import React from "react";
import type { IBreaker } from "../../types";
import styles from "./Breaker.module.css";

interface BreakerProps {
  breaker: IBreaker;
  onClick: () => void;
  isSelected: boolean;
  isOn: boolean;
}

const Breaker: React.FC<BreakerProps> = ({
  breaker,
  onClick,
  isSelected,
  isOn
}) => {
  const handleSwitchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      className={`${styles.breaker} ${isSelected ? styles.selected : ""} ${isOn ? styles.on : styles.off
        }`}
    >
      <div className={styles.breakerContent}>
        <div className={styles.info}>
          <div className={styles.name}>{breaker.name}</div>
          <div className={styles.rating}>{breaker.rating}</div>
          <div className={styles.status}>
            <div className={styles.statusIndicator}></div>
            {isOn ? "ВКЛ" : "ВЫКЛ"}
          </div>
        </div>

        <div className={styles.switchContainer} onClick={handleSwitchClick}>
          <div className={`${styles.switch} ${isOn ? styles.switchOn : styles.switchOff}`}>
            <div className={styles.switchHandle}></div>
          </div>
        </div>
      </div>

      {/* Дополнительная информация если есть */}
      {breaker.additionalInfo && (
        <div className={styles.additionalInfo}>
          <small>Установлен: {breaker.additionalInfo.installationDate}</small>
        </div>
      )}
    </div>
  );
};

export default Breaker;