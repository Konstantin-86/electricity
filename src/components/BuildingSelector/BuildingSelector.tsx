import React from "react";
import type { Building } from "../../types";
import styles from "./BuildingSelector.module.css";

interface BuildingSelectorProps {
  buildings: Building[];
  onBuildingSelect: (building: Building) => void;
}

const BuildingSelector: React.FC<BuildingSelectorProps> = ({
  buildings,
  onBuildingSelect,
}) => {
  return (
    <div className={styles.buildingsGrid}>
      {buildings.map((building) => (
        <div
          key={building.id}
          className={styles.buildingCard}
          onClick={() => onBuildingSelect(building)}
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
