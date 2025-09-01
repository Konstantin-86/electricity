import React, { useState } from "react";
import type { Building, Floor, IBreaker, Panel, ViewState, BreakerPower } from "./types";
import { mockData } from "./components/data";
import BuildingSelector from "./components/BuildingSelector/BuildingSelector";
import FloorSelector from "./components/FloorSelector/FloorSelector";
import ElectricalPanel from "./components/ElectricalPanel/ElectricalPanel";
import RoomsList from "./components/RoomsList/RoomsList";
import styles from "./App.module.css";

interface DeviceState {
  [roomId: string]: {
    lights: boolean[]; // Массив состояний каждой лампы
    outlets: boolean[]; // Массив состояний каждой розетки
  };
}

interface PowerChange {
  roomId: string;
  lights: number;
  outlets: number;
  type: 'powerOn' | 'powerOff';
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>("buildings");
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedBreaker, setSelectedBreaker] = useState<IBreaker | null>(null);
  const [deviceState, setDeviceState] = useState<DeviceState>({});
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

    // Изначально все устройства включены
    const initialState: DeviceState = {};
    floor.rooms.forEach((room) => {
      initialState[room.id] = {
        lights: Array(room.lights).fill(true),
        outlets: Array(room.outlets).fill(true)
      };
    });
    setDeviceState(initialState);
  };

  const handleBreakerToggle = (breakerId: string, isOn: boolean) => {
    if (!selectedFloor) return;

    // Обновляем состояние автомата
    const updatedPanels = panelsState.map(panel => ({
      ...panel,
      breakers: panel.breakers.map(breaker =>
        breaker.id === breakerId
          ? { ...breaker, isOn: isOn }
          : breaker
      )
    }));

    setPanelsState(updatedPanels);

    // Находим выбранный автомат и помещения, которые он контролирует
    let targetBreaker: IBreaker | null = null;
    const changes: PowerChange[] = [];

    updatedPanels.forEach((panel) => {
      panel.breakers.forEach((breaker) => {
        if (breaker.id === breakerId) {
          targetBreaker = breaker;
          breaker.powers.forEach((power) => {
            changes.push({
              roomId: power.roomId,
              lights: power.lights || 0,
              outlets: power.outlets || 0,
              type: isOn ? 'powerOn' : 'powerOff'
            });
          });
        }
      });
    });

    if (targetBreaker && changes.length > 0) {
      setSelectedBreaker(targetBreaker);
      setPowerChanges(changes);

      // Обновляем состояние устройств
      setDeviceState(prev => {
        const newState = { ...prev };
        changes.forEach(change => {
          const room = newState[change.roomId];
          if (room) {
            // Обновляем лампы
            if (change.lights > 0) {
              const lightsToChange = Math.min(change.lights, room.lights.length);
              const newLights = [...room.lights];
              for (let i = 0; i < lightsToChange; i++) {
                newLights[i] = isOn;
              }
              room.lights = newLights;
            }

            // Обновляем розетки
            if (change.outlets > 0) {
              const outletsToChange = Math.min(change.outlets, room.outlets.length);
              const newOutlets = [...room.outlets];
              for (let i = 0; i < outletsToChange; i++) {
                newOutlets[i] = isOn;
              }
              room.outlets = newOutlets;
            }
          }
        });
        return newState;
      });

      // Очищаем изменения через 2 секунды
      setTimeout(() => {
        setPowerChanges([]);
      }, 2000);
    }
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

  const getTitle = () => {
    switch (currentView) {
      case "buildings": return "Выбор здания";
      case "floors": return `Этажи: ${selectedBuilding?.name}`;
      case "floor-view": return `Этаж: ${selectedFloor?.name}`;
      default: return "Электрические щиты";
    }
  };

  // Проверяем, есть ли вообще питание в помещении
  const getRoomPowerStatus = (roomId: string): boolean => {
    const roomDevices = deviceState[roomId];
    if (!roomDevices) return false;

    // Помещение считается с питанием, если хотя бы одно устройство включено
    return roomDevices.lights.some(on => on) || roomDevices.outlets.some(on => on);
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
          <h1 className={styles.title}>{getTitle()}</h1>
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
                <h2>Электрические щиты</h2>
                <div className={styles.panelsGrid}>
                  {panelsState.map((panel) => (
                    <ElectricalPanel
                      key={panel.id}
                      panel={panel}
                      onBreakerToggle={handleBreakerToggle}
                      selectedBreakerId={selectedBreaker?.id}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.roomsSection}>
                <RoomsList
                  rooms={selectedFloor.rooms}
                  deviceState={deviceState}
                  selectedBreaker={selectedBreaker}
                  powerChanges={powerChanges}
                  getRoomPowerStatus={getRoomPowerStatus}
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