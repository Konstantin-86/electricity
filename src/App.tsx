// App.tsx
import React, { useState } from "react";
import type { Building, Floor, Panel, Room, Breaker, ViewState } from "./types";
import { mockData } from "./components/data";
import BuildingSelector from "./components/BuildingSelector/BuildingSelector";
import FloorSelector from "./components/FloorSelector/FloorSelector";
import ElectricalPanel from "./components/ElectricalPanel/ElectricalPanel";
import RoomsList from "./components/RoomsList/RoomsList";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>("buildings");
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  );
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedBreaker, setSelectedBreaker] = useState<Breaker | null>(null);
  const [roomsState, setRoomsState] = useState<{ [roomId: string]: boolean }>(
    {}
  );

  // Обработчик выбора здания
  const handleBuildingSelect = (building: Building) => {
    setSelectedBuilding(building);
    setSelectedFloor(null);
    setSelectedBreaker(null);
    setCurrentView("floors");
  };

  // Обработчик выбора этажа
  const handleFloorSelect = (floor: Floor) => {
    setSelectedFloor(floor);
    setSelectedBreaker(null);
    setCurrentView("floor-view");

    // Инициализируем состояние помещений
    const initialState: { [roomId: string]: boolean } = {};
    floor.rooms.forEach((room) => {
      initialState[room.id] = true; // Все помещения включены по умолчанию
    });
    setRoomsState(initialState);
  };

  // Обработчик переключения автомата
  const handleBreakerToggle = (breakerId: string, isOn: boolean) => {
    if (!selectedFloor) return;

    // Находим автомат
    let targetBreaker: Breaker | null = null;
    let affectedRoomIds: string[] = [];

    selectedFloor.panels.forEach((panel) => {
      panel.breakers.forEach((breaker) => {
        if (breaker.id === breakerId) {
          targetBreaker = breaker;
          affectedRoomIds = breaker.powers.map((power) => power.roomId);
        }
      });
    });

    if (targetBreaker) {
      setSelectedBreaker(targetBreaker);

      // Анимация: сначала мигание, затем изменение состояния
      setTimeout(() => {
        setRoomsState((prev) => {
          const newState = { ...prev };
          affectedRoomIds.forEach((roomId) => {
            newState[roomId] = isOn;
          });
          return newState;
        });
      }, 300); // Задержка для анимации мигания
    }
  };

  // Навигация назад
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
        break;
      default:
        setCurrentView("buildings");
    }
  };

  // Получение заголовка для текущего вида
  const getTitle = () => {
    switch (currentView) {
      case "buildings":
        return "Выбор здания";
      case "floors":
        return `Этажи: ${selectedBuilding?.name}`;
      case "floor-view":
        return `Этаж: ${selectedFloor?.name}`;
      default:
        return "Электрические щиты";
    }
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
                  {selectedFloor.panels.map((panel) => (
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
                  roomsState={roomsState}
                  selectedBreaker={selectedBreaker}
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
