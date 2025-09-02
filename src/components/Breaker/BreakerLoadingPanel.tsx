import React from "react";
import styles from "./BreakerLoadingPanel.module.css";

interface LoadIndicatorProps {
  loadPercentage: number;
  currentLoad: number;
  maxLoad: number;
}

const BreakerLoadingPanel: React.FC<LoadIndicatorProps> = ({
  loadPercentage,
  currentLoad,
  maxLoad,
}) => {
  const getLoadLevel = () => {
    if (loadPercentage > 90) return "overload";
    if (loadPercentage > 70) return "high";
    if (loadPercentage > 30) return "medium";
    return "low";
  };

  return (
    <div className={styles.loadIndicator} data-load={getLoadLevel()}>
      <div className={styles.loadBar}>
        <div
          className={styles.loadFill}
          style={{ width: `${Math.min(loadPercentage, 100)}%` }}
        />
        <div className={styles.loadSparkle}></div>
      </div>

      <div className={styles.loadText}>{loadPercentage.toFixed(0)}%</div>
      <div className={styles.loadDetails}>
        {currentLoad.toFixed(1)}A / {maxLoad}A
      </div>
    </div>
  );
};

export default BreakerLoadingPanel;
