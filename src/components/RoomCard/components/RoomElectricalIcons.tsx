// components/RoomCard/components/RoomElectricalIcons.tsx
import type {
  LightFixtureInstance,
  OutletInstance,
  FixtureKey,
} from "../../../types";
import { LightIcons } from "./LightIcons";
import { OutletIcons } from "./OutletIcons";

import styles from "../styles/RoomElectricalIcons.module.css";

interface RoomElectricalIconsProps {
  lights: LightFixtureInstance[];
  outlets: OutletInstance[];
  electricalState: {
    lights: Record<string, boolean>; // исправлено!
    outlets: Record<string, boolean>; // исправлено!
  };
  onLightClick: (fixtureKey: FixtureKey) => void;
}

export const RoomElectricalIcons = ({
  lights,
  outlets,
  electricalState,
  onLightClick,
}: RoomElectricalIconsProps) => {
  const hasLights = lights.length > 0;
  const hasOutlets = outlets.length > 0;

  // Если нет ни светильников, ни розеток - не рендерим ничего
  if (!hasLights && !hasOutlets) {
    return null;
  }
  return (
    <div className={styles.container}>
      {hasLights && (
        <LightIcons
          lights={lights}
          lightStates={electricalState.lights}
          onLightClick={onLightClick}
        />
      )}
      {hasOutlets && (
        <OutletIcons outlets={outlets} outletStates={electricalState.outlets} />
      )}
    </div>
  );
};
