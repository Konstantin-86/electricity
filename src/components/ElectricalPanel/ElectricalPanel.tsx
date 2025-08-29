// components/ElectricalPanel/ElectricalPanel.tsx
import React from "react";
import type { Panel } from "../../types";
import Breaker from "../Breaker/Breaker";
import styles from "./ElectricalPanel.module.css";

interface ElectricalPanelProps {
  panel: Panel;
  onBreakerToggle?: (breakerId: string, isOn: boolean) => void;
  selectedBreakerId?: string;
}

const ElectricalPanel: React.FC<ElectricalPanelProps> = ({
  panel,
  onBreakerToggle,
  selectedBreakerId,
}) => {
  const getPanelTypeIcon = () => {
    switch (panel.type) {
      case "lighting":
        return "💡";
      case "power":
        return "🔌";
      default:
        return "📦";
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.icon}>{getPanelTypeIcon()}</span>
          <h2 className={styles.name}>{panel.name}</h2>
        </div>
        <div className={styles.meta}>
          <span className={styles.type}>{panel.type}</span>
          <span className={styles.location}>📍 {panel.location}</span>
        </div>
      </div>

      <div className={styles.breakers}>
        <h3 className={styles.breakersTitle}>
          Автоматы ({panel.breakers.length})
        </h3>
        <div className={styles.breakersGrid}>
          {panel.breakers.map((breaker) => (
            <Breaker
              key={breaker.id}
              breaker={breaker}
              onToggle={onBreakerToggle}
              isSelected={breaker.id === selectedBreakerId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectricalPanel;
