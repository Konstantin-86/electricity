import { useState } from "react";
import type { Floor } from "../../types";
import styles from "./FloorSelector.module.css";
import FloorPlan from "../FloorPlan/FloorPlan";
import Header from "../Header/Header";

interface FloorSelectorProps {
  floors: Floor[];
}

const FloorSelector = ({ floors }: FloorSelectorProps) => {
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);

  const handleFloorClick = (floor: Floor) => {
    setSelectedFloor(floor);
  };
  const backButton = () => setSelectedFloor(null);
  if (selectedFloor)
    return (
      <>
        <Header backButton={backButton} />
        <FloorPlan rooms={selectedFloor.rooms} panels={selectedFloor.panels} />
      </>
    );

  return (
    <div className={styles.floorSelector}>
      <h2>Выберите этаж</h2>
      <div className={styles.floorsGrid}>
        {floors.map((floor) => (
          <div
            key={floor.id}
            className={styles.floorCard}
            onClick={() => handleFloorClick(floor)}
          >
            <div className={styles.floorIcon}>🏢</div>
            <h3>{floor.name}</h3>
            <p>Этаж {floor.level}</p>
            <span className={styles.roomsCount}>
              Помещений: {floor.rooms.length}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorSelector;
