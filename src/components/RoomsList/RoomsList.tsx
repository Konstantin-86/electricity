import type { Room, IBreaker } from "../../types";
import RoomCard from "../RoomCard/RoomCard";
import styles from "./RoomsList.module.css";

interface RoomsListProps {
  rooms: Room[];
  deviceState: { [roomId: string]: { lights: boolean[]; outlets: boolean[] } };
  selectedBreaker?: IBreaker | null;
  powerChanges?: {
    roomId: string;
    lights: number;
    outlets: number;
    type: 'powerOn' | 'powerOff';
  }[];
  getRoomPowerStatus: (roomId: string) => boolean;
  title?: string;
}

const RoomsList: React.FC<RoomsListProps> = ({
  rooms,
  deviceState,
  selectedBreaker,
  powerChanges = [],
  getRoomPowerStatus,
  title = "Помещения"
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
    const labels: { [key: string]: string } = {
      office: "Офисы",
      conference: "Переговорные",
      kitchen: "Кухни",
      bathroom: "Санузлы",
      technical: "Технические",
      corridor: "Коридоры"
    };
    return labels[type] || "Другие помещения";
  };

  const isRoomAffectedByBreaker = (roomId: string) => {
    if (!selectedBreaker) return false;
    return selectedBreaker.powers.some((power) => power.roomId === roomId);
  };

  return (
    <div className={styles.roomsList}>
      <h2 className={styles.title}>{title} ({rooms.length})</h2>

      {Object.entries(groupedRooms).map(([type, typeRooms]) => (
        <div key={type} className={styles.typeSection}>
          <h3 className={styles.typeTitle}>{getTypeLabel(type)}</h3>
          <div className={styles.roomsGrid}>
            {typeRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                deviceState={deviceState[room.id]}
                isPowered={getRoomPowerStatus(room.id)}
                isAffected={isRoomAffectedByBreaker(room.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;