import { useState } from "react";
import type { Panel } from "../../types";
import styles from "./ElectricalScheme.module.css";

interface ElectricalSchemeProps {
  panels: Panel[];
  onClose: () => void;
}

const ElectricalScheme = ({ panels, onClose }: ElectricalSchemeProps) => {
  const [selectedPanelIndex, setSelectedPanelIndex] = useState<number>(0);
  const currentPanel = panels[selectedPanelIndex];

  return (
    <div className={styles.overlay}>
      <div className={styles.scheme}>
        <div className={styles.header}>
          <h2>Схема щита освещения</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        {/* Панель переключения между щитами */}
        <div className={styles.panelSelector}>
          {panels.map((panel, index) => (
            <button
              key={panel.id}
              className={`${styles.panelTab} ${
                selectedPanelIndex === index ? styles.panelTabActive : ""
              }`}
              onClick={() => setSelectedPanelIndex(index)}
            >
              {panel.name}
            </button>
          ))}
        </div>

        {/* Основная схема */}
        <div className={styles.schemeContent}>
          <div className={styles.schemePaper}>
            {/* Заголовок схемы */}
            <div className={styles.schemeHeader}>
              <h3>{currentPanel.name}</h3>
              <div className={styles.schemeLocation}>
                {currentPanel.location}
              </div>
            </div>

            {/* Таблица автоматов */}
            <div className={styles.breakersTable}>
              {currentPanel.breakers.map((breaker) => (
                <div key={breaker.id} className={styles.breakerRow}>
                  <div className={styles.breakerLeft}>
                    <div className={styles.breakerSymbol}>
                      <div className={styles.circle}>{breaker.designation}</div>
                    </div>
                    <div className={styles.breakerLine}></div>
                  </div>

                  <div className={styles.breakerRight}>
                    <div className={styles.breakerInfo}>
                      <div className={styles.breakerMain}>
                        <span className={styles.breakerRating}>
                          {breaker.rating}А
                        </span>
                        {breaker.technicalInfo?.characteristic && (
                          <span className={styles.breakerCharacteristic}>
                            {breaker.technicalInfo.characteristic}
                          </span>
                        )}
                      </div>
                      <div className={styles.breakerDescription}>
                        {breaker.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Обозначения */}
            <div className={styles.legend}>
              <div className={styles.phaseLabels}>
                <span>L</span>
                <span>N</span>
                <span>PE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalScheme;
