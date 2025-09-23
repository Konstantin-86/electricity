// components/FloorSelector/FloorSelector.tsx
import React from "react";
import { useBuildingStore } from "../../store/useBuildingStore";
import type { Floor } from "../../types";

import FloorView from "../FloorView/FloorView";
import styles from "./FloorSelector.module.css";

interface FloorSelectorProps {
  floors: Floor[];
}

const FloorSelector: React.FC<FloorSelectorProps> = ({ floors }) => {
  const { selectedFloor, setSelectedFloor } = useBuildingStore();

  if (selectedFloor) {
    return <FloorView />;
  }

  return (
    <div className={styles.floorsGrid}>
      {floors.map((floor) => (
        <div
          key={floor.id}
          className={styles.floorCard}
          onClick={() => setSelectedFloor(floor)} // Используем метод из buildingStore
        >
          <div className={styles.floorIcon}>🏢</div>
          <h3 className={styles.floorName}>{floor.name}</h3>
          <p className={styles.floorRooms}>Комнат: {floor.rooms.length}</p>
        </div>
      ))}
    </div>
  );
};

export default FloorSelector;
