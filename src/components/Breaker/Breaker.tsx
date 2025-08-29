// components/Breaker/Breaker.tsx
import React, { useState } from "react";
import type { Breaker } from "../../types";
import styles from "./Breaker.module.css";

interface BreakerProps {
  breaker: Breaker;
  onToggle?: (id: string, isOn: boolean) => void;
  isSelected?: boolean;
  compact?: boolean;
}

const Breaker: React.FC<BreakerProps> = ({
  breaker,
  onToggle,
  isSelected = false,
  compact = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);

    // Запускаем анимацию
    setTimeout(() => {
      onToggle?.(breaker.id, !breaker.isOn);
      setIsAnimating(false);
    }, 300);
  };

  const getTypeBadges = () => {
    const badges = [];
    if (breaker.types.lighting) badges.push("💡 Освещение");
    if (breaker.types.socket) badges.push("🔌 Розетки");
    if (breaker.types.special) badges.push("⚡ Специальное");
    return badges;
  };

  if (compact) {
    return (
      <div className={`${styles.breaker} ${styles.compact}`}>
        <div className={styles.header}>
          <span className={styles.name}>{breaker.name}</span>
          <div
            className={`${styles.status} ${
              breaker.isOn ? styles.on : styles.off
            }`}
          >
            {breaker.isOn ? "ВКЛ" : "ВЫКЛ"}
          </div>
        </div>
        <div className={styles.rating}>{breaker.rating}</div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.breaker} ${isSelected ? styles.selected : ""} ${
        isAnimating ? styles.animating : ""
      }`}
    >
      <div className={styles.header}>
        <h3 className={styles.name}>{breaker.name}</h3>
        <button
          className={`${styles.toggleButton} ${
            breaker.isOn ? styles.on : styles.off
          }`}
          onClick={handleToggle}
          disabled={isAnimating}
        >
          <span className={styles.toggleCircle} />
        </button>
      </div>

      <div className={styles.details}>
        <div className={styles.rating}>Номинал: {breaker.rating}</div>

        <div className={styles.types}>
          {getTypeBadges().map((badge, index) => (
            <span key={index} className={styles.badge}>
              {badge}
            </span>
          ))}
        </div>

        {breaker.powers.length > 0 && (
          <div className={styles.powers}>
            <h4>Управляет:</h4>
            {breaker.powers.map((power, index) => (
              <div key={index} className={styles.powerItem}>
                <span>💡 {power.lights} светильников</span>
                <span>🔌 {power.outlets} розеток</span>
                <span className={styles.roomId}>Комната: {power.roomId}</span>
              </div>
            ))}
            <div className={styles.totalPower}>Всего: точек</div>
          </div>
        )}
      </div>

      {isAnimating && (
        <div className={styles.animationOverlay}>
          <div className={styles.spark}></div>
          <div className={styles.spark}></div>
          <div className={styles.spark}></div>
        </div>
      )}
    </div>
  );
};

export default Breaker;
