import { useState } from "react";
import { useBreakerStore } from "../../store/useBreakerStore";
import { useBuildingStore } from "../../store/useBuildingStore";

import styles from "./ElectricalScheme.module.css";

const ElectricalScheme: React.FC = () => {
  const { showVisualization } = useBuildingStore();
  const { panels } = useBreakerStore();
  const [selectedPanelId, setSelectedPanelId] = useState<string>(
    panels[0]?.id || ""
  );
  const [isPrinting, setIsPrinting] = useState(false);

  const selectedPanel = panels.find((panel) => panel.id === selectedPanelId);

  const handlePrint = () => {
    setIsPrinting(true);

    setTimeout(() => {
      window.print();
      setTimeout(() => setIsPrinting(false), 100);
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
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Электрическая схема</h2>
          <div className={styles.controls}>
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
            <button className={styles.printButton} onClick={handlePrint}>
              Печать
            </button>
          </div>
        </div>

        <div
          className={`${styles.singleLineScheme} ${
            isPrinting ? styles.printView : ""
          }`}
          id="print-scheme"
        >
          {selectedPanel && (
            <>
              <div className={styles.panelHeader}>
                <h3>{selectedPanel.name}</h3>
                <p>{selectedPanel.location}</p>
              </div>

              <div className={styles.breakersList}>
                {selectedPanel.breakers.map((breaker) => (
                  <div key={breaker.id} className={styles.breakerItem}>
                    <div className={styles.breakerSymbol}>
                      <span className={styles.designation}>
                        {breaker.designation}
                      </span>
                    </div>
                    <div className={styles.breakerInfo}>
                      <span className={styles.description}>
                        {breaker.description}
                      </span>
                      <span className={styles.rating}>{breaker.rating}A</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectricalScheme;
