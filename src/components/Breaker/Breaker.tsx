// Breaker.tsx
import React from "react";
import type { IBreaker, Room, Lamp } from "../../types";
import styles from "./Breaker.module.css";
import { calculateBreakerLoad } from "../utils/loadCalculator";
import LoadIndicator from "./LoadIndicator"; // Импортируем новый компонент

interface BreakerProps {
  breaker: IBreaker;
  onClick: () => void;
  isSelected: boolean;
  isOn: boolean;
  rooms: Room[];
  lamps: Lamp[];
}

const Breaker: React.FC<BreakerProps> = ({
  breaker,
  onClick,
  isSelected,
  isOn,
  rooms,
  lamps,
}) => {
  const handleSwitchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  const loadInfo = calculateBreakerLoad(breaker, rooms, lamps);

  return (
    <div
      className={`${styles.breaker} ${isSelected ? styles.selected : ""} ${
        isOn ? styles.on : styles.off
      }`}
    >
      <div className={styles.breakerContent}>
        <div className={styles.info}>
          <div className={styles.name}>{breaker.name}</div>
          <div className={styles.rating}>{breaker.rating}A</div>
          <div className={styles.status}>
            <div className={styles.statusIndicator}></div>
            {isOn ? "ВКЛ" : "ВЫКЛ"}
          </div>
        </div>

        <LoadIndicator
          loadPercentage={loadInfo.loadPercentage}
          currentLoad={loadInfo.currentLoad}
          maxLoad={breaker.rating}
        />

        <div className={styles.switchContainer} onClick={handleSwitchClick}>
          <div
            className={`${styles.switch} ${
              isOn ? styles.switchOn : styles.switchOff
            }`}
          >
            <div className={styles.switchHandle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breaker;
