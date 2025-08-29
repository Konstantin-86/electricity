// components/FloorSelector/FloorSelector.tsx
import React from "react";
import type { Floor } from "../../types";
import styles from "./FloorSelector.module.css";

interface FloorSelectorProps {
  floors: Floor[];
  onFloorSelect: (floor: Floor) => void;
}

const FloorSelector: React.FC<FloorSelectorProps> = ({
  floors,
  onFloorSelect,
}) => {
  return (
    <div className={styles.floorsGrid}>
      {floors.map((floor) => (
        <div
          key={floor.id}
          className={styles.floorCard}
          onClick={() => onFloorSelect(floor)}
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
