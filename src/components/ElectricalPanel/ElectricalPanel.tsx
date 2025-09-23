import { useState } from "react";
import { useBreakerStore } from "../../store/useBreakerStore";

import Breaker from "../Breaker/Breaker";

import styles from "./ElectricalPanel.module.css";

const ElectricalPanel = () => {
  const { panels, breakersState } = useBreakerStore();

  return (
    <>
      <div className={styles.panel}>
        {panels.map((panel) => (
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
        ))}
      </div>
    </>
  );
};

export default ElectricalPanel;
