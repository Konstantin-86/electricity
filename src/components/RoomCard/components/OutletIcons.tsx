import type { OutletInstance } from "../../../types";

import styles from "../styles/OutletIcons.module.css";

interface OutletIconsProps {
  outlets: OutletInstance[];
  outletStates: Record<string, boolean>;
}

export const OutletIcons = ({ outlets, outletStates }: OutletIconsProps) => {
  if (outlets.length === 0) {
    return null;
  }

  return (
    <div className={styles.outletsSection}>
      {outlets.map((outlet) => {
        const isPowered = outletStates[outlet.id] ?? false;

        return Array.from({ length: outlet.count }, (_, index) => (
          <div
            key={`${outlet.id}-${index}`}
            className={`${styles.outletIcon} ${
              isPowered ? styles.on : styles.off
            }`}
          >
            🔌
          </div>
        ));
      })}
    </div>
  );
};
