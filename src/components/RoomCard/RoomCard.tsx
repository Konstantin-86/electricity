// components/RoomCard/RoomCard.tsx
import React from "react";
import type { Room } from "../../types";
import styles from "./RoomCard.module.css";

interface RoomCardProps {
  room: Room;
  isPowered: boolean;
  isAffected: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, isPowered, isAffected }) => {
  const getRoomIcon = () => {
    switch (room.type) {
      case "office":
        return "🏢";
      case "conference":
        return "💬";
      case "kitchen":
        return "🍽️";
      case "bathroom":
        return "🚻";
      default:
        return "🚪";
    }
  };

  return (
    <div
      className={`${styles.roomCard} ${
        isPowered ? styles.powered : styles.unpowered
      } ${isAffected ? styles.affected : ""}`}
    >
      <div className={styles.header}>
        <span className={styles.icon}>{getRoomIcon()}</span>
        <div className={styles.title}>
          <h3 className={styles.name}>{room.name}</h3>
          <div
            className={`${styles.powerStatus} ${
              isPowered ? styles.on : styles.off
            }`}
          >
            {isPowered ? "⚡ Питание есть" : "⚡ Нет питания"}
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.number}>№ </div>
        <div className={styles.area}>{room.area} м²</div>
      </div>

      <div className={styles.typeBadge}>
        {room.type === "office" && "Офис"}
        {room.type === "conference" && "Переговорная"}
        {room.type === "kitchen" && "Кухня"}
        {room.type === "bathroom" && "Санузел"}
      </div>

      {!isPowered && (
        <div className={styles.overlay}>
          <span className={styles.overlayText}>ОТКЛЮЧЕНО</span>
        </div>
      )}
    </div>
  );
};

export default RoomCard;
