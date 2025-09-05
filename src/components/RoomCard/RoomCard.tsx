import type { Room } from "../../types";
import styles from "./RoomCard.module.css";

interface RoomCardProps {
  room: Room;
  powerState: {
    hasPower: boolean;
    partialPower: boolean;
    powerDetails: {
      lighting: { hasPower: boolean; breakerIds: string[] };
      sockets: { hasPower: boolean; breakerIds: string[] };
    };
  };
}

const RoomCard = ({ room, powerState }: RoomCardProps) => {
  const { hasPower, partialPower, powerDetails } = powerState;

  const hasLighting = room.lightFixtures.length > 0;
  const hasSockets = room.outletGroups.length > 0;
  const hasLightingControl = powerDetails.lighting.breakerIds.length > 0;
  const hasSocketsControl = powerDetails.sockets.breakerIds.length > 0;

  return (
    <div
      className={`
      ${styles.roomCard} 
      ${hasPower ? styles.powered : styles.noPower}
      ${partialPower ? styles.partialPower : ""}
    `}
    >
      <h3>{room.name}</h3>
      <p>Тип: {room.type}</p>
      <p>Площадь: {room.area} м²</p>

      {/* Статус питания показываем всегда */}
      <div className={styles.powerStatus}>
        {hasPower ? (
          partialPower ? (
            <span className={styles.partial}>⚠ Частичное питание</span>
          ) : (
            <span className={styles.full}>✓ Полное питание</span>
          )
        ) : (
          <span className={styles.off}>✗ Нет питания</span>
        )}
      </div>

      {/* Детали по системам - показываем только если есть соответствующее оборудование */}
      <div className={styles.systems}>
        {/* Свет - показываем если есть светильники ИЛИ управление светом */}
        {(hasLighting || hasLightingControl) && (
          <div
            className={powerDetails.lighting.hasPower ? styles.on : styles.off}
          >
            💡 Свет: {powerDetails.lighting.hasPower ? "ВКЛ" : "ВЫКЛ"}
          </div>
        )}

        {/* Розетки - показываем если есть розетки ИЛИ управление розетками */}
        {(hasSockets || hasSocketsControl) && (
          <div
            className={powerDetails.sockets.hasPower ? styles.on : styles.off}
          >
            🔌 Розетки: {powerDetails.sockets.hasPower ? "ВКЛ" : "ВЫКЛ"}
          </div>
        )}
      </div>

      {/* Информация о оборудовании - показываем только если есть что показывать */}
      {(hasLighting || hasSockets) && (
        <div className={styles.equipment}>
          {hasLighting && (
            <span>Светильников: {room.lightFixtures.length}</span>
          )}
          {hasSockets &&
            room.outletGroups.map((outlet, index) => (
              <span key={index}>
                Розеток: {outlet.count} ({outlet.estimatedLoad}W)
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default RoomCard;
