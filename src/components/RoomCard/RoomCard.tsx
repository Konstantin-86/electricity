// components/RoomCard/RoomCard.tsx
import type { LightFixtureInstance, OutletInstance, Room } from "../../types";
import { useRoomElectricalState } from "../RoomsList/hooks/useRoomElectricalState";
import styles from "./RoomCard.module.css";
import { useBreakerStore } from "../../store/breakerStore";

interface RoomCardProps {
  room: Room;
  points: (OutletInstance | LightFixtureInstance)[];
}

const RoomCard = ({ room, points }: RoomCardProps) => {
  const electricalState = useRoomElectricalState(room.id);
  const toggleBreaker = useBreakerStore((state) => state.toggleBreaker);

  const handleBreakerClick = (breakerId: string) => {
    toggleBreaker(breakerId);
  };

  const breakers = new Map<
    string,
    { designation: string; isOn: boolean; panelName: string }
  >();

  electricalState.lights.forEach((light) => {
    if (light.breakerId && light.breakerDesignation) {
      breakers.set(light.breakerId, {
        designation: light.breakerDesignation,
        isOn: light.isPowered,
        panelName: light.panelName || "",
      });
    }
  });

  electricalState.outlets.forEach((outlet) => {
    if (outlet.breakerId && outlet.breakerDesignation) {
      breakers.set(outlet.breakerId, {
        designation: outlet.breakerDesignation,
        isOn: outlet.isPowered,
        panelName: outlet.panelName || "",
      });
    }
  });

  const lights = points.filter(
    (point): point is LightFixtureInstance => point.type === "light"
  );
  const outlets = points.filter(
    (point): point is OutletInstance => point.type === "outlet"
  );

  return (
    <div className={styles.roomCard}>
      <div className={styles.header}>
        <h3>{room.name}</h3>

        {/* Автоматы питания помещения */}
        {breakers.size > 0 && (
          <div className={styles.breakers}>
            {Array.from(breakers.values()).map((breaker, index) => (
              <div
                key={index}
                className={`${styles.breaker} ${
                  breaker.isOn ? styles.breakerOn : styles.breakerOff
                }`}
                onClick={() =>
                  handleBreakerClick(Array.from(breakers.keys())[index])
                }
                title={`${breaker.panelName} - ${breaker.designation} (${
                  breaker.isOn ? "ВКЛ" : "ВЫКЛ"
                })`}
              >
                {breaker.designation}
                <span className={styles.panelName}>{breaker.panelName}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.icons}>
        {/* Иконки светильников */}
        {lights.map((light) => {
          const lightState = electricalState.lights.find(
            (l) => l.id === light.id
          );
          const isPowered = lightState?.isPowered ?? false;

          return (
            <div
              key={light.id}
              className={`${styles.icon} ${isPowered ? styles.on : styles.off}`}
              title={light.template.name}
            >
              💡
            </div>
          );
        })}

        {/* Иконки розеток (группируем по количеству) */}
        {outlets.map((outlet) => {
          const outletState = electricalState.outlets.find(
            (o) => o.id === outlet.id
          );
          const isPowered = outletState?.isPowered ?? false;

          return (
            <div key={outlet.id} className={styles.outletGroup}>
              {Array.from({ length: outlet.count }, (_, index) => (
                <div
                  key={index}
                  className={`${styles.icon} ${
                    isPowered ? styles.on : styles.off
                  }`}
                  title={`${outlet.count} розеток`}
                >
                  🔌
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomCard;
