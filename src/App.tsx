import { useState, useCallback } from "react";
import type { Building, Floor, IBreaker, Panel, Room } from "./types";
import { mockData } from "./data";
import BuildingSelector from "./components/BuildingSelector/BuildingSelector";
import FloorSelector from "./components/FloorSelector/FloorSelector";
import ElectricalPanel from "./components/ElectricalPanel/ElectricalPanel";
import RoomsList from "./components/RoomsList/RoomsList";

import styles from "./App.module.css";
import { building1 } from "./data/building-1";

interface LoadState {
  [loadId: string]: boolean;
}

interface PowerChange {
  roomId: string;
  loadIds: string[];
  type: "powerOn" | "powerOff";
}

const App: React.FC = () => {
  console.log(mockData);

  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  );
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedBreaker, setSelectedBreaker] = useState<IBreaker | null>(null);
  const [loadState, setLoadState] = useState<LoadState>({});
  const [powerChanges, setPowerChanges] = useState<PowerChange[]>([]);
  const [panelsState, setPanelsState] = useState<Panel[]>([]);

  const handleBuildingSelect = useCallback((building: Building) => {
    setSelectedBuilding(building);
    setSelectedFloor(null);
    setSelectedBreaker(null);
  }, []);

  const handleFloorSelect = useCallback((floor: Floor) => {
    setSelectedFloor(floor);
    setSelectedBreaker(null);
    setPanelsState(floor.panels);

    // Инициализируем состояние нагрузок
    const initialState: LoadState = {};
    floor.rooms.forEach((room) => {
      room.lightFixtures?.forEach((fixture) => {
        initialState[fixture.id] = true;
      });
      room.outletGroups?.forEach((outletGroup) => {
        initialState[outletGroup.id] = true;
      });
    });
    setLoadState(initialState);
  }, []);

  const handleBreakerToggle = useCallback(
    (breakerId: string, isOn: boolean) => {
      if (!selectedFloor) return;

      // Обновляем состояние автомата
      const updatedPanels = panelsState.map((panel) => ({
        ...panel,
        breakers: panel.breakers.map((breaker) =>
          breaker.id === breakerId ? { ...breaker, isOn } : breaker
        ),
      }));

      setPanelsState(updatedPanels);

      // Находим выбранный автомат и обрабатываем нагрузки
      let targetBreaker: IBreaker | null = null;
      const changes: PowerChange[] = [];

      updatedPanels.forEach((panel) => {
        panel.breakers.forEach((breaker) => {
          if (breaker.id === breakerId) {
            targetBreaker = breaker;

            if (!breaker.controlledLoads) return;

            breaker.controlledLoads.forEach((load) => {
              const roomChanges: PowerChange = {
                roomId: load.roomId || "",
                loadIds: [],
                type: isOn ? "powerOn" : "powerOff",
              };

              if (load.lightFixtureIds) {
                roomChanges.loadIds.push(...load.lightFixtureIds);
              }

              if (load.outletGroupIds) {
                roomChanges.loadIds.push(...load.outletGroupIds);
              }

              if (roomChanges.loadIds.length > 0) {
                changes.push(roomChanges);
              }
            });
          }
        });
      });

      if (targetBreaker && changes.length > 0) {
        setSelectedBreaker(targetBreaker);
        setPowerChanges(changes);

        // Обновляем состояние нагрузок
        setLoadState((prev) => {
          const newState = { ...prev };
          changes.forEach((change) => {
            change.loadIds.forEach((loadId) => {
              newState[loadId] = isOn;
            });
          });
          return newState;
        });

        setTimeout(() => setPowerChanges([]), 2000);
      }
    },
    [selectedFloor, panelsState]
  );

  const getRoomPowerStatus = useCallback(
    (room: Room): boolean => {
      const hasLightPower = room.lightFixtures?.some(
        (fixture) => loadState[fixture.id]
      );
      const hasOutletPower = room.outletGroups?.some(
        (outletGroup) => loadState[outletGroup.id]
      );
      return hasLightPower || hasOutletPower;
    },
    [loadState]
  );

  const getRoomDeviceCounts = useCallback(
    (room: Room) => {
      let activeLights = 0;
      let totalLights = 0;
      let activeOutlets = 0;
      let totalOutlets = 0;

      room.lightFixtures?.forEach((fixture) => {
        if (loadState[fixture.id]) {
          activeLights += fixture.lampIds.length;
        }
        totalLights += fixture.lampIds.length;
      });

      room.outletGroups?.forEach((outletGroup) => {
        if (loadState[outletGroup.id]) {
          activeOutlets += outletGroup.count;
        }
        totalOutlets += outletGroup.count;
      });

      return { activeLights, totalLights, activeOutlets, totalOutlets };
    },
    [loadState]
  );

  const getRoomBreakers = useCallback(
    (room: Room): IBreaker[] => {
      const roomBreakers: IBreaker[] = [];

      panelsState.forEach((panel) => {
        panel.breakers.forEach((breaker) => {
          if (
            breaker.controlledLoads?.some(
              (load) =>
                load.roomId === room.id ||
                (load.lightFixtureIds &&
                  room.lightFixtures?.some((f) =>
                    load.lightFixtureIds?.includes(f.id)
                  )) ||
                (load.outletGroupIds &&
                  room.outletGroups?.some((o) =>
                    load.outletGroupIds?.includes(o.id)
                  ))
            )
          ) {
            roomBreakers.push(breaker);
          }
        });
      });

      return roomBreakers;
    },
    [panelsState]
  );

  const handleBack = useCallback(() => {
    if (selectedFloor) {
      setSelectedFloor(null);
      setSelectedBreaker(null);
      setPowerChanges([]);
    } else if (selectedBuilding) {
      setSelectedBuilding(null);
    }
  }, [selectedBuilding, selectedFloor]);

  const showBackButton = selectedBuilding !== null;
  const showBreadcrumbs = selectedBuilding !== null;

  return (
    /*   <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.navigation}>
          {showBackButton && (
            <button className={styles.backButton} onClick={handleBack}>
              ← Назад
            </button>
          )}
        </div>

        {showBreadcrumbs && (
          <div className={styles.breadcrumbs}>
            <span>{selectedBuilding.name}</span>
            {selectedFloor && <span> › {selectedFloor.name}</span>}
          </div>
        )}
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          {!selectedBuilding && (
            <BuildingSelector
              buildings={mockData}
              onBuildingSelect={handleBuildingSelect}
            />
          )}

          {selectedBuilding && !selectedFloor && (
            <FloorSelector
              floors={selectedBuilding.floors}
              onFloorSelect={handleFloorSelect}
            />
          )}

          {selectedBuilding && selectedFloor && (
            <div className={styles.floorView}>
              <div className={styles.panelsSection}>
                <div className={styles.panels}>
                  {panelsState.map((panel) => (
                    <ElectricalPanel
                      key={panel.id}
                      panel={panel}
                      onBreakerToggle={handleBreakerToggle}
                      selectedBreakerId={selectedBreaker?.id}
                      rooms={selectedFloor.rooms}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.roomsSection}>
                <RoomsList
                  rooms={selectedFloor.rooms}
                  loadState={loadState}
                  selectedBreaker={selectedBreaker}
                  powerChanges={powerChanges}
                  getRoomPowerStatus={getRoomPowerStatus}
                  getRoomDeviceCounts={getRoomDeviceCounts}
                  getRoomBreakers={getRoomBreakers}
                  title="Помещения на этаже"
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div> */
    <>
      <BuildingSelector buildings={mockData} />
    </>
  );
};

export default App;
