import React, { useState } from "react";
import type {
  Building,
  Floor,
  IBreaker,
  Panel,
  ViewState,
  Room,
} from "./types";
import { mockData } from "./components/data";
import BuildingSelector from "./components/BuildingSelector/BuildingSelector";
import FloorSelector from "./components/FloorSelector/FloorSelector";
import ElectricalPanel from "./components/ElectricalPanel/ElectricalPanel";
import RoomsList from "./components/RoomsList/RoomsList";
import styles from "./App.module.css";

// Упрощаем состояние устройств - теперь нам нужно только знать, включена ли нагрузка
interface LoadState {
  [loadId: string]: boolean; // ID нагрузки -> включена/выключена
}

interface PowerChange {
  roomId: string;
  loadIds: string[]; // Какие нагрузки изменили состояние
  type: "powerOn" | "powerOff";
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>("buildings");
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  );
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedBreaker, setSelectedBreaker] = useState<IBreaker | null>(null);
  const [loadState, setLoadState] = useState<LoadState>({});
  const [powerChanges, setPowerChanges] = useState<PowerChange[]>([]);
  const [panelsState, setPanelsState] = useState<Panel[]>([]);

  const handleBuildingSelect = (building: Building) => {
    setSelectedBuilding(building);
    setSelectedFloor(null);
    setSelectedBreaker(null);
    setCurrentView("floors");
  };

  const handleFloorSelect = (floor: Floor) => {
    setSelectedFloor(floor);
    setSelectedBreaker(null);
    setPanelsState(floor.panels);
    setCurrentView("floor-view");

    // Изначально все нагрузки включены
    const initialState: LoadState = {};
    floor.rooms.forEach((room) => {
      // Обрабатываем светильники
      room.lightFixtures?.forEach((fixture) => {
        initialState[fixture.id] = true; // Светильник включен
      });

      // Обрабатываем группы розеток
      room.outletGroups?.forEach((outletGroup) => {
        initialState[outletGroup.id] = true; // Группа розеток включена
      });
    });
    setLoadState(initialState);
  };

  const handleBreakerToggle = (breakerId: string, isOn: boolean) => {
    if (!selectedFloor) return;

    // Обновляем состояние автомата
    const updatedPanels = panelsState.map((panel) => ({
      ...panel,
      breakers: panel.breakers.map((breaker) =>
        breaker.id === breakerId ? { ...breaker, isOn: isOn } : breaker
      ),
    }));

    setPanelsState(updatedPanels);

    // Находим выбранный автомат и нагрузки, которые он контролирует
    let targetBreaker: IBreaker | null = null;
    const changes: PowerChange[] = [];

    updatedPanels.forEach((panel) => {
      panel.breakers.forEach((breaker) => {
        if (breaker.id === breakerId) {
          targetBreaker = breaker;

          // Проверяем наличие controlledLoads (для резервных автоматов)
          if (!breaker.controlledLoads) return;

          // Для каждой управляемой нагрузки этого автомата
          breaker.controlledLoads.forEach((load) => {
            const roomChanges: PowerChange = {
              roomId: load.roomId || "", // Добавляем проверку на roomId
              loadIds: [],
              type: isOn ? "powerOn" : "powerOff",
            };

            // Добавляем светильники
            if (load.lightFixtureIds) {
              roomChanges.loadIds.push(...load.lightFixtureIds);
            }

            // Добавляем группы розеток
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
            newState[loadId] = isOn; // Устанавливаем состояние для каждой нагрузки
          });
        });
        return newState;
      });

      // Очищаем изменения через 2 секунды
      setTimeout(() => {
        setPowerChanges([]);
      }, 2000);
    }
  };

  // Проверяем, есть ли вообще питание в помещении
  const getRoomPowerStatus = (room: Room): boolean => {
    // Проверяем светильники
    const hasLightPower = room.lightFixtures?.some(
      (fixture) => loadState[fixture.id]
    );

    // Проверяем группы розеток
    const hasOutletPower = room.outletGroups?.some(
      (outletGroup) => loadState[outletGroup.id]
    );

    return hasLightPower || hasOutletPower;
  };

  // Получаем количество активных устройств в комнате
  const getRoomDeviceCounts = (room: Room) => {
    let activeLights = 0;
    let totalLights = 0;
    let activeOutlets = 0;
    let totalOutlets = 0;

    // Обрабатываем светильники
    room.lightFixtures?.forEach((fixture) => {
      if (loadState[fixture.id]) {
        activeLights += fixture.lampIds.length;
      }
      totalLights += fixture.lampIds.length;
    });

    // Обрабатываем группы розеток
    room.outletGroups?.forEach((outletGroup) => {
      if (loadState[outletGroup.id]) {
        activeOutlets += outletGroup.count;
      }
      totalOutlets += outletGroup.count;
    });

    return { activeLights, totalLights, activeOutlets, totalOutlets };
  };

  const handleBack = () => {
    switch (currentView) {
      case "floors":
        setCurrentView("buildings");
        setSelectedBuilding(null);
        break;
      case "floor-view":
        setCurrentView("floors");
        setSelectedFloor(null);
        setSelectedBreaker(null);
        setPowerChanges([]);
        break;
      default:
        setCurrentView("buildings");
    }
  };

  const getRoomBreakers = (room: Room): IBreaker[] => {
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
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.navigation}>
          {currentView !== "buildings" && (
            <button className={styles.backButton} onClick={handleBack}>
              ← Назад
            </button>
          )}
        </div>

        {selectedBuilding && (
          <div className={styles.breadcrumbs}>
            <span>{selectedBuilding.name}</span>
            {selectedFloor && <span> › {selectedFloor.name}</span>}
          </div>
        )}
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          {currentView === "buildings" && (
            <BuildingSelector
              buildings={mockData}
              onBuildingSelect={handleBuildingSelect}
            />
          )}

          {currentView === "floors" && selectedBuilding && (
            <FloorSelector
              floors={selectedBuilding.floors}
              onFloorSelect={handleFloorSelect}
            />
          )}

          {currentView === "floor-view" && selectedFloor && (
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
    </div>
  );
};

export default App;
