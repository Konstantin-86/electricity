import type { OutletInstance } from "../../types";
import styles from "./LightFixturePopup.module.css";

interface OutletIconProps {
  outlet: OutletInstance;
  isPowered: boolean;
}

const OutletIcon = ({ outlet, isPowered }: OutletIconProps) => (
  <div className={styles.outletGroup}>
    {Array.from({ length: outlet.count }, (_, index) => (
      <div
        key={index}
        className={`${styles.icon} ${isPowered ? styles.on : styles.off} ${
          styles.outletIcon
        }`}
        title={`Розетка ${outlet.count}x`}
      >
        🔌
      </div>
    ))}
  </div>
);
