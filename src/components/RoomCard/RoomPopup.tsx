import type {
  LightFixtureInstance,
  OutletInstance,
  Panel,
  Room,
} from "../../types";
import RoomCard from "../RoomCard/RoomCard";

import styles from "./RoomPopup.module.css";

interface RoomPopupProps {
  room: Room;
  points: (OutletInstance | LightFixtureInstance)[];
  panels: Panel[];
  isOpen: boolean;
  onClose: () => void;
}

export const RoomPopup = ({
  room,
  points,
  panels,
  isOpen,
  onClose,
}: RoomPopupProps) => {
  if (!isOpen) return null;

  const roomBreakers = panels.flatMap((panel) =>
    panel.breakers.filter((breaker) =>
      breaker.controlledLoads?.some((load) => load.roomId === room.id)
    )
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.popupTitle}>
          {room.name} ({room.area}м²)
        </h2>

        {/* Основная информация о помещении */}
        <div className={styles.roomInfo}>
          <RoomCard room={room} points={points} />
        </div>

        {/* Информация об электропитании */}
        <div className={styles.powerInfo}>
          {roomBreakers.length > 0 ? (
            <div className={styles.breakersList}>
              {roomBreakers.map((breaker) => (
                <div key={breaker.id} className={styles.breakerItem}>
                  <span className={styles.breakerName}>
                    {breaker.designation}
                  </span>
                  <span className={styles.breakerDescription}>
                    {breaker.description}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p>Нет информации об автоматах</p>
          )}
        </div>

        {/* Детальная информация о точках */}
        <div className={styles.detailedPoints}>
          {/* Светильники */}
          <div className={styles.pointsSection}>
            <h4>
              Светильники ({points.filter((p) => p.type === "light").length})
            </h4>
            {points
              .filter((p) => p.type === "light")
              .map((fixture) => (
                <div key={fixture.id} className={styles.fixtureItem}>
                  <span>Тип: {(fixture as LightFixtureInstance).template}</span>
                </div>
              ))}
          </div>

          {/* Розетки */}
          <div className={styles.pointsSection}>
            <h4>
              Розетки ({points.filter((p) => p.type === "outlet").length})
            </h4>
            {points
              .filter((p) => p.type === "outlet")
              .map((outlet) => (
                <div key={outlet.id} className={styles.outletItem}>
                  <span>
                    Средняя нагрузка: {(outlet as OutletInstance).estimatedLoad}
                    W
                  </span>
                  <span>Количество: {(outlet as OutletInstance).count}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
