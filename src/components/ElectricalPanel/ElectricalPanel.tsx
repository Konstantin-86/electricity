import { useState } from "react";
import { useBreakerStore } from "../../store/breakerStore";

import Breaker from "../Breaker/Breaker";
import ElectricalScheme from "../ElectricalScheme/ElectricalScheme";

import styles from "./ElectricalPanel.module.css";

const ElectricalPanel = () => {
  const { panels, breakersState } = useBreakerStore();
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <button
        className={showPanel ? `${styles.btnOn}` : `${styles.btnOff}`}
        onClick={() => setShowPanel(!showPanel)}
      >
        ЩО
      </button>
      <ElectricalScheme />
      {showPanel ? (
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
          ))}{" "}
        </div>
      ) : null}
    </>
  );
};

export default ElectricalPanel;
