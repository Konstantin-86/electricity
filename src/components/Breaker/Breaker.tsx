import { useState } from "react";
import type { IBreaker } from "../../types";
import styles from "./Breaker.module.css";
import BreakerTechnicalInfo from "./BreakerTechnicalInfo";
import { useBreakerStore } from "../../store/breakerStore";

interface BreakerProps {
  breaker: IBreaker;
  isOn: boolean;
}

const Breaker = ({ breaker, isOn }: BreakerProps) => {
  const [showTechnicalInfo, setShowTechnicalInfo] = useState(false);
  const toggleBreaker = useBreakerStore((state) => state.toggleBreaker);

  const handleSwitchClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем всплытие
    toggleBreaker(breaker.id);
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем всплытие
    setShowTechnicalInfo(true);
  };

  const handleCloseTechnicalInfo = () => {
    setShowTechnicalInfo(false);
  };

  // Добавим класс для разных типов автоматов
  const getTypeClass = () => {
    switch (breaker.type) {
      case "lighting":
        return styles.typeLighting;
      case "socket":
        return styles.typeSocket;
      case "mixed":
        return styles.typeMixed;
      default:
        return "";
    }
  };

  return (
    <>
      <div
        className={`${styles.breaker} ${
          isOn ? styles.on : styles.off
        } ${getTypeClass()}`}
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
              <span className={styles.rating}>{breaker.rating}A</span>
            </div>
          </div>

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
