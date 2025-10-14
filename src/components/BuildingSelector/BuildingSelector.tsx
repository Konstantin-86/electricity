import { useState } from "react";
import type { Building, Floor } from "../../types";
import Header from "../Header/Header";

import styles from "./BuildingSelector.module.css";
import FloorSelector from "../FloorSelector/FloorSelector";

interface BuildingSelectorProps {
  buildings: Building[];
}

const BuildingSelector: React.FC<BuildingSelectorProps> = ({ buildings }) => {
  const [selectedFloors, setSelectedFloors] = useState<Floor[] | null>(null);

  console.log(selectedFloors);

  if (!selectedFloors) {
    return (
      <div className={styles.buildingsGrid}>
        {buildings.map((building) => (
          <div
            key={building.id}
            onClick={() => setSelectedFloors(building.floors)} // Убрали квадратные скобки
            className={styles.buildingCard}
          >
            <div className={styles.buildingIcon}>🏢</div>
            <h2>{building.name}</h2>
            <p>{building.address}</p>
            <span>Этажей: {building.floors.length}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <FloorSelector floors={selectedFloors} />
    </>
  );
};

export default BuildingSelector;
