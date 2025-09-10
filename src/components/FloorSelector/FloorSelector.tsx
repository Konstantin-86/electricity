import { useState } from "react";
import type { Floor } from "../../types";
import styles from "./FloorSelector.module.css";
import RoomsList from "../RoomsList/RoomsList";
import ElectricalPanel from "../ElectricalPanel/ElectricalPanel";
import { useBreakerStore } from "../../store/breakerStore";
import FloorPlan from "../FloorPlan/FloorPlan";

interface FloorSelectorProps {
  floors: Floor[];
}

const FloorSelector: React.FC<FloorSelectorProps> = ({ floors }) => {
  const [currentFloor, setCurrentFloor] = useState<Floor | null>(null);
  const setCurrentFloorInStore = useBreakerStore(
    (state) => state.setCurrentFloor
  );

  const handleFloorClick = (floor: Floor) => {
    setCurrentFloor(floor);
    setCurrentFloorInStore(floor);
  };

  if (currentFloor) {
    return (
      <>
        {/*  <FloorPlan rooms={currentFloor.rooms} /> */}
        {/*   <ElectricalPanel /> */}
        <RoomsList rooms={currentFloor.rooms} points={currentFloor.points} />
      </>
    );
  }

  return (
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
  );
};

export default FloorSelector;
