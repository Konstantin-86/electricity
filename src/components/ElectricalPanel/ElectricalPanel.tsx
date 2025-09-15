import Breaker from "../Breaker/Breaker";
import { useBreakerStore } from "../../store/breakerStore";

import styles from "./ElectricalPanel.module.css";
import { useState } from "react";

const ElectricalPanel = () => {
  const { panels, breakersState } = useBreakerStore();
  const [showPanel, setShowPanel] = useState(false);

  if (!panels || panels.length === 0) {
    return (
      <div className={styles.panel}>
        <h1>Панель управления</h1>
        <p>Выберите этаж для отображения щитов</p>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <div onClick={() => setShowPanel(!showPanel)}>panel</div>
      {showPanel
        ? panels.map((panel) => (
            <div key={panel.id} className={styles.panelSection}>
              <h2>{panel.name}</h2>
              <div className={styles.breakersGrid}>
                {panel.breakers.map((breaker) => (
                  <Breaker
                    key={breaker.id}
                    breaker={breaker}
                    isOn={breakersState[breaker.id]}
                  />
                ))}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default ElectricalPanel;
