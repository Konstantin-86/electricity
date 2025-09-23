// components/BuildingSelector/BuildingSelector.tsx
import React from "react";
import { useBuildingStore } from "../../store/useBuildingStore";
import type { Building } from "../../types";

import FloorSelector from "../FloorSelector/FloorSelector";
import Header from "../Header/Header";

import styles from "./BuildingSelector.module.css";

interface BuildingSelectorProps {
  buildings: Building[];
}

const BuildingSelector: React.FC<BuildingSelectorProps> = ({ buildings }) => {
  const { selectedBuilding, setSelectedBuilding } = useBuildingStore();

  if (selectedBuilding) {
    return (
      <>
        <Header />
        <FloorSelector floors={selectedBuilding.floors} />
      </>
    );
  }

  return (
    <div className={styles.buildingsGrid}>
      {buildings.map((building) => (
        <div
          key={building.id}
          className={styles.buildingCard}
          onClick={() => setSelectedBuilding(building)}
        >
          <div className={styles.buildingIcon}>🏢</div>
          <h2 className={styles.buildingName}>{building.name}</h2>
          <p className={styles.buildingAddress}>{building.address}</p>
          <div className={styles.buildingStats}>
            <span>Этажей: {building.floors.length}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuildingSelector;
