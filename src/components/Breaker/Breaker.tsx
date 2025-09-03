import React, { useState } from "react";
import type { IBreaker, Room } from "../../types";
import styles from "./Breaker.module.css";
import { calculateBreakerLoad } from "../utils/loadCalculator";
import BreakerLoadingPanel from "./BreakerLoadingPanel";
import { sharedLamps } from "../data/lamps/lamps";
import BreakerTechnicalInfo from "./BreakerTechnicalInfo";

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
  const [showTechnicalInfo, setShowTechnicalInfo] = useState(false);

  const handleSwitchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTechnicalInfo(true);
  };

  const handleCloseTechnicalInfo = () => {
    setShowTechnicalInfo(false);
  };

  // Для резервных автоматов без controlledLoads используем нулевую нагрузку
  const loadInfo = breaker.controlledLoads
    ? calculateBreakerLoad(breaker, rooms, sharedLamps)
    : {
        totalPower: 0,
        currentLoad: 0,
        loadPercentage: 0,
        lightingPower: 0,
        socketPower: 0,
        isOverloaded: false,
        isCritical: false,
        rating: breaker.rating,
      };

  return (
    <>
      <div
        className={`${styles.breaker} ${isSelected ? styles.selected : ""} ${
          isOn ? styles.on : styles.off
        }`}
      >
        <div className={styles.breakerContent}>
          <div className={styles.info}>
            <div className={styles.nameBreaker}>{breaker.designation}</div>
            <div className={styles.description}>{breaker.description}</div>
            <div className={styles.moreInfo} onClick={handleInfoClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1976d2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
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

      <BreakerTechnicalInfo
        technicalInfo={breaker.technicalInfo}
        isVisible={showTechnicalInfo}
        onClose={handleCloseTechnicalInfo}
      />
    </>
  );
};

export default Breaker;
