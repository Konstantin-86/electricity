import type { Room, IBreaker } from "../../types";
import RoomCard from "../RoomCard/RoomCard";
import styles from "./RoomsList.module.css";

interface PowerChange {
  roomId: string;
  loadIds: string[];
  type: "powerOn" | "powerOff";
}

interface RoomsListProps {
  rooms: Room[];
  loadState: { [loadId: string]: boolean };
  selectedBreaker?: IBreaker | null;
  powerChanges?: PowerChange[];
  getRoomPowerStatus: (room: Room) => boolean;
  getRoomDeviceCounts: (room: Room) => {
    activeLights: number;
    totalLights: number;
    activeOutlets: number;
    totalOutlets: number;
  };
  title?: string;
}

const RoomsList: React.FC<RoomsListProps> = ({
  rooms,
  loadState,
  selectedBreaker,
  getRoomDeviceCounts,
  title = "Помещения",
}) => {
  // Группировка помещений по типам
  const groupedRooms = rooms.reduce((acc, room) => {
    if (!acc[room.type]) {
      acc[room.type] = [];
    }
    acc[room.type].push(room);
    return acc;
  }, {} as Record<string, Room[]>);

  const getTypeLabel = (type: string): string => {
    const typeLabels: Record<string, string> = {
      office: "Офисы",
      corridor: "Коридоры",
      conference: "Конференц-залы",
      bathroom: "Санузлы",
      kitchen: "Кухни",
      storage: "Кладовые",
      technical: "Технические помещения",
      other: "Прочие помещения",
    };
    return typeLabels[type] || type;
  };

  const isRoomAffectedByBreaker = (room: Room) => {
    if (!selectedBreaker) return false;
    return selectedBreaker.controlledLoads.some(
      (load) => load.roomId === room.id
    );
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
            {typeRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                loadState={loadState}
                isAffected={isRoomAffectedByBreaker(room)}
                deviceCounts={getRoomDeviceCounts(room)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
