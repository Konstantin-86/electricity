import React from "react";
import type { IBreaker, Room } from "../../types";
import styles from "./Breaker.module.css";
import { calculateBreakerLoad } from "../utils/loadCalculator";
import BreakerLoadingPanel from "./BreakerLoadingPanel";
import { sharedLamps } from "../data/lamps/lamps";

interface BreakerProps {
  breaker: IBreaker;
  onClick: () => void;
  isSelected: boolean;
  isOn: boolean;
  rooms: Room[];
}

const Breaker: React.FC<BreakerProps> = ({
  breaker,
  onClick,
  isSelected,
  isOn,
  rooms,
}) => {
  const handleSwitchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  const loadInfo = calculateBreakerLoad(breaker, rooms, sharedLamps);

  const prefix = breaker.name.substring(0, 3);
  // Получаем остальную часть названия
  const restOfName = breaker.name.substring(3);

  return (
    <div
      className={`${styles.breaker} ${isSelected ? styles.selected : ""} ${
        isOn ? styles.on : styles.off
      }`}
    >
      <div className={styles.breakerContent}>
        <div className={styles.info}>
          <div className={styles.namePrefix}>{prefix}</div>
          <div className={styles.nameFull}>{restOfName}</div>
          <div className={styles.rating}>{breaker.rating}A</div>
          <div className={styles.status}>
            <div className={styles.statusIndicator}></div>
            {isOn ? "ВКЛ" : "ВЫКЛ"}
          </div>
        </div>

        <BreakerLoadingPanel
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
