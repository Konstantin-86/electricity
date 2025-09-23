// components/Header/Header.tsx
import React from "react";
import { useBuildingStore } from "../../store/useBuildingStore";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const {
    selectedBuilding,
    selectedFloor,
    activeVisualization,
    showVisualization,
    goBack,
  } = useBuildingStore();

  if (!selectedBuilding) return null;

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.backButton} onClick={goBack}>
          ← <span>Назад</span>
        </button>
        <h1 className={styles.title}>
          {selectedBuilding.name}
          {selectedFloor && ` - ${selectedFloor.name}`}
        </h1>
      </div>

      {selectedFloor && (
        <div className={styles.headerRight}>
          <button
            className={`${styles.toggleButton} ${
              activeVisualization === "floorPlan" ? styles.active : ""
            }`}
            onClick={() =>
              showVisualization(
                activeVisualization === "floorPlan" ? null : "floorPlan"
              )
            }
          >
            🏢 План
          </button>
          <button
            className={`${styles.toggleButton} ${
              activeVisualization === "electricalPanel" ? styles.active : ""
            }`}
            onClick={() =>
              showVisualization(
                activeVisualization === "electricalPanel"
                  ? null
                  : "electricalPanel"
              )
            }
          >
            ⚡ Щит
          </button>
          <button
            className={`${styles.toggleButton} ${
              activeVisualization === "electricalScheme" ? styles.active : ""
            }`}
            onClick={() =>
              showVisualization(
                activeVisualization === "electricalScheme"
                  ? null
                  : "electricalScheme"
              )
            }
          >
            📋 Схема
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
