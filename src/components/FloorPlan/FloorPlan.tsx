// components/FloorPlan/FloorPlan.tsx
import { useState } from "react";
import type { Room, RoomType } from "../../types";
import styles from "./FloorPlan.module.css";

interface FloorPlanProps {
  rooms: Room[];
}

const FloorPlan = ({ rooms }: FloorPlanProps) => {
  const [showPlan, setShowPlan] = useState(false);

  const getRoomIcon = (type: RoomType) => {
    switch (type) {
      case "office":
        return "💼";
      case "corridor":
        return "🚶";
      case "conference":
        return "👥";
      case "bathroom":
        return "🚽";
      case "kitchen":
        return "🍳";
      case "storage":
        return "📦";
      case "technical":
        return "🔧";
      case "other":
      default:
        return "🏠";
    }
  };

  // Функция для получения класса по типу комнаты
  const getRoomClass = (type: RoomType) => {
    switch (type) {
      case "office":
        return styles.office;
      case "corridor":
        return styles.corridor;
      case "conference":
        return styles.conference;
      case "bathroom":
        return styles.bathroom;
      case "kitchen":
        return styles.kitchen;
      case "storage":
        return styles.storage;
      case "technical":
        return styles.technical;
      case "other":
      default:
        return styles.other;
    }
  };

  return (
    <>
      <div onClick={() => setShowPlan(!showPlan)}>Plan</div>
      {showPlan ? (
        <div className={styles.floorPlan}>
          <div className={styles.gridContainer}>
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`${styles.room} ${getRoomClass(room.type)}`}
                title={`${room.name}\nПлощадь: ${room.area} м²`}
              >
                <div className={styles.roomIcon}>{getRoomIcon(room.type)}</div>
                <div className={styles.roomContent}>
                  <div className={styles.roomName}>{room.name}</div>
                  <div className={styles.roomArea}>{room.area} м²</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FloorPlan;
