import type { LightFixtureInstance, FixtureKey } from "../../../types";
import styles from "../styles/LightIcons.module.css";

interface LightIconsProps {
  lights: LightFixtureInstance[];
  lightStates: Record<string, boolean>;
  onLightClick: (fixtureKey: FixtureKey) => void;
}

export const LightIcons = ({
  lights,
  lightStates,
  onLightClick,
}: LightIconsProps) => {
  return (
    <div className={styles.lightsSection}>
      {lights.map((light) => {
        const isPowered = lightStates[light.id] ?? false;

        return (
          <div
            key={light.id}
            className={`${styles.lightIcon} ${
              isPowered ? styles.on : styles.off
            }`}
            onClick={() => onLightClick(light.template)}
          >
            💡
          </div>
        );
      })}
    </div>
  );
};
