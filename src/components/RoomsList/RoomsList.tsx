// components/RoomsList/RoomsList.tsx
import React from "react";
import type { Room, Breaker } from "../../types";
import RoomCard from "../RoomCard/RoomCard";
import styles from "./RoomsList.module.css";

interface RoomsListProps {
  rooms: Room[];
  roomsState: { [roomId: string]: boolean };
  selectedBreaker?: Breaker | null;
  title?: string;
}

const RoomsList: React.FC<RoomsListProps> = ({
  rooms,
  roomsState,
  selectedBreaker,
  title = "Помещения",
}) => {
  const getRoomsByType = () => {
    const grouped: { [key: string]: Room[] } = {};
    rooms.forEach((room) => {
      if (!grouped[room.type]) {
        grouped[room.type] = [];
      }
      grouped[room.type].push(room);
    });
    return grouped;
  };

  const groupedRooms = getRoomsByType();

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "office":
        return "Офисы";
      case "conference":
        return "Переговорные";
      case "kitchen":
        return "Кухни";
      case "bathroom":
        return "Санузлы";
      case "server":
        return "Серверные";
      default:
        return "Другие помещения";
    }
  };

  // Проверяем, связано ли помещение с выбранным автоматом
  const isRoomAffectedByBreaker = (roomId: string) => {
    if (!selectedBreaker) return false;
    return selectedBreaker.powers.some((power) => power.roomId === roomId);
  };

  return (
    <div className={styles.roomsList}>
      <h2 className={styles.title}>
        {title} ({rooms.length})
      </h2>

      {Object.entries(groupedRooms).map(([type, typeRooms]) => (
        <div key={type} className={styles.typeSection}>
          <h3 className={styles.typeTitle}>{getTypeLabel(type)}</h3>
          <div className={styles.roomsGrid}>
            {typeRooms.map((room) => {
              const isPowered = roomsState[room.id];
              const isAffected = isRoomAffectedByBreaker(room.id);

              return (
                <RoomCard
                  key={room.id}
                  room={room}
                  isPowered={isPowered}
                  isAffected={isAffected}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
