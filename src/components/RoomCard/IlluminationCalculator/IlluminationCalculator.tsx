import type { RoomType } from "../../../types";
import styles from "./IlluminationCalculator.module.css";

interface IlluminationCalculatorProps {
  totalLumens: number;
  roomArea: number;
  roomType: RoomType;
}

const ILLUMINATION_STANDARDS: Record<
  RoomType,
  { min: number; optimal: number; max: number }
> = {
  office: { min: 300, optimal: 500, max: 750 },
  conference: { min: 200, optimal: 300, max: 500 },
  corridor: { min: 50, optimal: 100, max: 200 },
  bathroom: { min: 50, optimal: 200, max: 300 },
  kitchen: { min: 150, optimal: 300, max: 500 },
  storage: { min: 50, optimal: 75, max: 150 },
  technical: { min: 100, optimal: 150, max: 300 },
  other: { min: 100, optimal: 200, max: 400 },
};

const IlluminationCalculator = ({
  totalLumens,
  roomArea,
  roomType,
}: IlluminationCalculatorProps) => {
  const illumination = roomArea > 0 ? Math.round(totalLumens / roomArea) : 0;
  const standard = ILLUMINATION_STANDARDS[roomType];

  const getIlluminationStatus = () => {
    if (illumination < standard.min) return "low";
    if (illumination <= standard.optimal) return "good";
    if (illumination <= standard.max) return "excellent";
    return "excessive";
  };

  const status = getIlluminationStatus();
  const percentage =
    standard.optimal > 0
      ? Math.min(Math.round((illumination / standard.optimal) * 100), 150)
      : 0;

  const statusColors = {
    low: "#ff6b6b",
    good: "#51cf66",
    excellent: "#339af0",
    excessive: "#ff922b",
  };

  const statusText = {
    low: "Недостаточно",
    good: "Нормально",
    excellent: "Отлично",
    excessive: "Избыточно",
  };

  const currentColor = statusColors[status];

  return (
    <div className={styles.calculator}>
      <div className={styles.firstRow}>
        <span className={styles.label}>Освещенность:</span>
        <span className={styles.value}>{illumination} лк</span>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${percentage}%`, backgroundColor: currentColor }}
          />
          <div
            className={styles.progressMarkers}
            style={{ color: currentColor }}
          >
            <span style={{ left: "0%" }}>0</span>
            <span
              style={{ left: `${(standard.min / standard.optimal) * 100}%` }}
            >
              мин
            </span>
            <span style={{ left: "100%" }}>опт</span>
            <span
              style={{ left: `${(standard.max / standard.optimal) * 100}%` }}
            >
              макс
            </span>
          </div>
        </div>
        <span className={styles.status} style={{ color: currentColor }}>
          {statusText[status]}
        </span>
      </div>
    </div>
  );
};

export default IlluminationCalculator;
