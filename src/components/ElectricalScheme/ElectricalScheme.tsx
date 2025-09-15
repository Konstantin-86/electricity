import React, { useState } from "react";
import { useBreakerStore } from "../../store/breakerStore";
import type { Panel } from "../../types";
import styles from "./ElectricalScheme.module.css";

const ElectricalScheme: React.FC = () => {
  const { panels } = useBreakerStore();
  const [selectedPanelId, setSelectedPanelId] = useState<string>(
    panels[0]?.id || ""
  );
  const [isPrintView, setIsPrintView] = useState(false);

  const selectedPanel = panels.find((panel) => panel.id === selectedPanelId);

  const handlePrint = () => {
    setIsPrintView(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => setIsPrintView(false), 100);
    }, 100);
  };

  if (panels.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <h2>Нет данных о панелях</h2>
          <p>Добавьте панели для отображения электрической схемы</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {!isPrintView && (
        <div className={styles.header}>
          <h1>Однолинейная электрическая схема</h1>
          <button className={styles.printButton} onClick={handlePrint}>
            Распечатать схему
          </button>
        </div>
      )}

      {!isPrintView && (
        <div className={styles.panelSelector}>
          <h2>Выберите щит:</h2>
          <select
            value={selectedPanelId}
            onChange={(e) => setSelectedPanelId(e.target.value)}
            className={styles.select}
          >
            {panels.map((panel) => (
              <option key={panel.id} value={panel.id}>
                {panel.name} - {panel.location}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedPanel && (
        <div className={styles.singleLineScheme}>
          <div className={styles.panelHeader}>
            <h2>Щит: {selectedPanel.name}</h2>
            {/*   <div className={styles.panelDetails}>
              <span>
                <strong>Тип:</strong>{" "}
                {selectedPanel.type === "lighting" ? "Освещение" : "Силовой"}
              </span>
              <span>
                <strong>Расположение:</strong> {selectedPanel.location}
              </span>
              <span>
                <strong>Кабель:</strong> {selectedPanel.cableType}
              </span>
              <span>
                <strong>Питание:</strong> {selectedPanel.poweredFrom}
              </span>
            </div> */}
          </div>

          <div className={styles.breakersGrid}>
            {selectedPanel.breakers.map((breaker) => (
              <div key={breaker.id} className={styles.breakerLine}>
                <div className={styles.breakerSymbol}>
                  <div className={styles.breakerDesignation}>
                    {breaker.designation}
                  </div>
                </div>
                <div className={styles.breakerInfo}>
                  <div className={styles.breakerDescription}>
                    {breaker.description}
                  </div>
                  <div className={styles.breakerRating}>{breaker.rating}A</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectricalScheme;
