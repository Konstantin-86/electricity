import Breaker from "../Breaker/Breaker";

import type { Panel } from "../../types";

import styles from "./ElectricalPanel.module.css";

interface ElectricalPanelProps {
  panels: Panel[];
  onToggleBreaker: (breakerId: string) => void;
}

const ElectricalPanel = ({ panels, onToggleBreaker }: ElectricalPanelProps) => {
  console.log("panels", panels);

  return (
    <div className={styles.panel}>
      <h1>panel</h1>
      {panels.map((panel) => (
        <div key={panel.id}>
          <h2>{panel.name}</h2>
          {panel.breakers.map((breaker) => (
            <Breaker
              key={breaker.id}
              breaker={breaker}
              onToggle={() => onToggleBreaker(breaker.id)}
            />
          ))}
        </div>
      ))}
      {/*  <div className={styles.panelHeader}>
        <h3 className={styles.panelName}>{panel.name}</h3>
        <div className={styles.panelType}>{panel.type}</div>
        <div className={styles.panelLocation}>{panel.location}</div>
      </div>

      <div className={styles.breakers}>
        
      </div> */}
    </div>
  );
};

export default ElectricalPanel;
