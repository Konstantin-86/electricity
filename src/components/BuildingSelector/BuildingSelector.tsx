import { useState } from "react";
import type { Building } from "../../types";

import FloorSelector from "../FloorSelector/FloorSelector";

import styles from "./BuildingSelector.module.css";

interface BuildingSelectorProps {
  buildings: Building[];
}

const BuildingSelector: React.FC<BuildingSelectorProps> = ({ buildings }) => {
  const [floors, setFloors] = useState<Building | null>(null);

  if (floors) {
    return <FloorSelector floors={floors.floors} />;
  }

  return (
    <div className={styles.buildingsGrid}>
      {buildings.map((building) => (
        <div
          key={building.id}
          className={styles.buildingCard}
          onClick={() => setFloors(building)}
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
