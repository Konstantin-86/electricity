import { useState } from "react";
import type { Panel } from "../../types";

import styles from "./ElectricalPanel.module.css";

interface ElectricalPanelProps {
  panels: Panel[];
  onClose: () => void;
}

const ElectricalPanel = ({ panels, onClose }: ElectricalPanelProps) => {
  const [selectedPanelIndex, setSelectedPanelIndex] = useState<number>(0);

  const currentPanel = panels[selectedPanelIndex];

  const getStatusText = (isOn: boolean) => {
    return isOn ? "ВКЛ" : "ВЫКЛ";
  };

  const getStatusClass = (isOn: boolean) => {
    return isOn ? styles.statusOn : styles.statusOff;
  };

  const getCharacteristicText = (char?: "B" | "C" | "D") => {
    const characteristics = {
      B: "B (Высокая чувствительность)",
      C: "C (Стандартная)",
      D: "D (Пониженная чувствительность)",
    };
    return char ? characteristics[char] : "Не указана";
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2>Электрические щиты</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

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

        {/* Содержимое выбранного щита */}
        <div className={styles.panelContent}>
          <div className={styles.panelInfo}>
            <div className={styles.panelHeader}>
              <h3>{currentPanel.name}</h3>
              <span className={styles.panelLocation}>
                {currentPanel.location}
              </span>
            </div>

            <div className={styles.breakersList}>
              {currentPanel.breakers.map((breaker) => (
                <div key={breaker.id} className={styles.breakerCard}>
                  <div className={styles.breakerHeader}>
                    <span className={styles.breakerDesignation}>
                      {breaker.designation}
                    </span>
                    <span
                      className={`${styles.breakerStatus} ${getStatusClass(
                        breaker.isOn
                      )}`}
                    >
                      {getStatusText(breaker.isOn)}
                    </span>
                  </div>

                  <div className={styles.breakerDescription}>
                    {breaker.description}
                  </div>

                  <div className={styles.breakerDetails}>
                    <div className={styles.detailGroup}>
                      <span className={styles.detailLabel}>Номинал:</span>
                      <span className={styles.breakerRating}>
                        {breaker.rating}A
                      </span>
                    </div>

                    {breaker.technicalInfo && (
                      <>
                        {breaker.technicalInfo.manufacturer && (
                          <div className={styles.detailGroup}>
                            <span className={styles.detailLabel}>
                              Производитель:
                            </span>
                            <span className={styles.breakerManufacturer}>
                              {breaker.technicalInfo.manufacturer}
                            </span>
                          </div>
                        )}

                        {breaker.technicalInfo.model && (
                          <div className={styles.detailGroup}>
                            <span className={styles.detailLabel}>Модель:</span>
                            <span className={styles.breakerModel}>
                              {breaker.technicalInfo.model}
                            </span>
                          </div>
                        )}

                        {breaker.technicalInfo.characteristic && (
                          <div className={styles.detailGroup}>
                            <span className={styles.detailLabel}>
                              Характеристика:
                            </span>
                            <span className={styles.breakerCharacteristic}>
                              {getCharacteristicText(
                                breaker.technicalInfo.characteristic
                              )}
                            </span>
                          </div>
                        )}

                        {breaker.technicalInfo.serialNumber && (
                          <div className={styles.detailGroup}>
                            <span className={styles.detailLabel}>
                              Серийный номер:
                            </span>
                            <span className={styles.breakerSerial}>
                              {breaker.technicalInfo.serialNumber}
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {breaker.controlledRooms.length > 0 && (
                    <div className={styles.controlledRooms}>
                      <span className={styles.controlledRoomsLabel}>
                        Управляет помещениями:
                      </span>
                      {breaker.controlledRooms.join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalPanel;
