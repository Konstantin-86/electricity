import React from "react";
import type { Room } from "../../types";
import styles from "./RoomCard.module.css";

interface RoomCardProps {
  room: Room;
  deviceState?: {
    lights: boolean[];
    outlets: boolean[];
  };
  isPowered: boolean;
  isAffected: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
  room,
  deviceState,
  isPowered,
  isAffected
}) => {
  const getRoomIcon = () => {
    const icons: { [key: string]: string } = {
      office: "🏢",
      conference: "💬",
      kitchen: "🍽️",
      bathroom: "🚻",
      technical: "🔧",
      corridor: "🚶"
    };
    return icons[room.type] || "🚪";
  };

  const getRoomTypeLabel = () => {
    const labels: { [key: string]: string } = {
      office: "Офис",
      conference: "Переговорная",
      kitchen: "Кухня",
      bathroom: "Санузел",
      technical: "Техническое",
      corridor: "Коридор"
    };
    return labels[room.type] || room.type;
  };

  const countActiveLights = () => {
    if (!deviceState) return 0;
    return deviceState.lights.filter(isOn => isOn).length;
  };

  const countActiveOutlets = () => {
    if (!deviceState) return 0;
    return deviceState.outlets.filter(isOn => isOn).length;
  };

  const renderLights = () => {
    if (!deviceState) return null;

    return deviceState.lights.map((isOn, index) => (
      <div
        key={`light-${index}`}
        className={`${styles.light} ${isOn ? styles.lightOn : styles.lightOff}`}
      >
        <div className={styles.lightBulb}>
          <div className={styles.bulb}></div>
          <div className={styles.base}></div>
          {isOn && <div className={styles.glow}></div>}
        </div>
      </div>
    ));
  };

  const renderOutlets = () => {
    if (!deviceState) return null;

    return deviceState.outlets.map((isOn, index) => (
      <div
        key={`outlet-${index}`}
        className={`${styles.outlet} ${isOn ? styles.outletOn : styles.outletOff}`}
      >
        <div className={styles.outletFace}>
          <div className={styles.slots}>
            <div className={styles.slot}></div>
            <div className={styles.slot}></div>
          </div>
          {isOn && <div className={styles.powerIndicator}></div>}
        </div>
      </div>
    ));
  };

  return (
    <div className={`${styles.roomCard} ${isAffected ? styles.affected : ''}`}>
      <div className={styles.header}>
        <span className={styles.icon}>{getRoomIcon()}</span>
        <div className={styles.title}>
          <h3 className={styles.name}>{room.name}</h3>
          <div className={styles.typeBadge}>{getRoomTypeLabel()}</div>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.area}>{room.area} м²</div>
        <div className={styles.deviceCounts}>
          {countActiveLights()}/{room.lights} ламп • {countActiveOutlets()}/{room.outlets} розеток
        </div>
      </div>

      <div className={styles.devices}>
        <div className={styles.deviceGroup}>
          <span className={styles.deviceLabel}>Освещение</span>
          <div className={styles.lightsContainer}>
            {renderLights()}
          </div>
        </div>

        <div className={styles.deviceGroup}>
          <span className={styles.deviceLabel}>Розетки</span>
          <div className={styles.outletsContainer}>
            {renderOutlets()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;