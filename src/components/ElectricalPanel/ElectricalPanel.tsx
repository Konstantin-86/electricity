import React from "react";
import type { Panel } from "../../types";
import Breaker from "../Breaker/Breaker";
import styles from "./ElectricalPanel.module.css";
import {
  floor1Rooms,
  sharedLamps,
} from "../data/building-1/floors/floor-1/rooms";

interface ElectricalPanelProps {
  panel: Panel;
  onBreakerToggle: (breakerId: string, isOn: boolean) => void;
  selectedBreakerId?: string;
}

const ElectricalPanel: React.FC<ElectricalPanelProps> = ({
  panel,
  onBreakerToggle,
  selectedBreakerId,
}) => {
  const handleBreakerClick = (breakerId: string, currentState: boolean) => {
    onBreakerToggle(breakerId, !currentState);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <h3 className={styles.panelName}>{panel.name}</h3>
        <div className={styles.panelType}>{panel.type}</div>
        <div className={styles.panelLocation}>{panel.location}</div>
      </div>

      <div className={styles.breakers}>
        {panel.breakers.map((breaker) => (
          <Breaker
            key={breaker.id}
            breaker={breaker}
            isSelected={selectedBreakerId === breaker.id}
            isOn={breaker.isOn}
            onClick={() => handleBreakerClick(breaker.id, breaker.isOn)}
            rooms={floor1Rooms}
            lamps={sharedLamps}
          />
        ))}
      </div>
    </div>
  );
};

export default ElectricalPanel;
