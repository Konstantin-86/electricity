import { useState } from "react";
import type { Floor } from "../../types";
import styles from "./FloorSelector.module.css";
import RoomsList from "../RoomsList/RoomsList";
import ElectricalPanel from "../ElectricalPanel/ElectricalPanel";
import { useBreakerStore } from "../../store/breakerStore";
import FloorPlan from "../FloorPlan/FloorPlan";
import ElectricalScheme from "../ElectricalScheme/ElectricalScheme";
import Floor2Plan from "../FloorPlan/building1/floor2/Floor2Plan";

interface FloorSelectorProps {
  floors: Floor[];
  goBack: () => void;
}

const FloorSelector = ({ floors, goBack }: FloorSelectorProps) => {
  const [currentFloor, setCurrentFloor] = useState<Floor | null>(null);

  const setCurrentFloorInStore = useBreakerStore(
    (state) => state.setCurrentFloor
  );

  const handleFloorClick = (floor: Floor) => {
    setCurrentFloor(floor);
    setCurrentFloorInStore(floor);
  };

  const goBackButton = () => {
    setCurrentFloor(null);
  };

  if (currentFloor) {
    return (
      <>
        {/*  <ElectricalScheme /> */}
        <FloorPlan floor={currentFloor.id} />
        <ElectricalPanel />
        <RoomsList
          rooms={currentFloor.rooms}
          points={currentFloor.points}
          goBackButton={goBackButton}
        />
      </>
    );
  }

  return (
    <>
      <button onClick={goBack}>Назад</button>
      <div className={styles.floorsGrid}>
        {floors.map((floor) => (
          <div
            key={floor.id}
            className={styles.floorCard}
            onClick={() => handleFloorClick(floor)}
          >
            <div className={styles.floorNumber}>{floor.level}</div>
            <h3 className={styles.floorName}>{floor.name}</h3>
            <div className={styles.floorStats}>
              <span>Щитов: {floor.panels.length}</span>
              <span>Помещений: {floor.rooms.length}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FloorSelector;
