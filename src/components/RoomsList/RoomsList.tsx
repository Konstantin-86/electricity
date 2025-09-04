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
  getRoomBreakers?: (room: Room) => IBreaker[];
}

const RoomsList: React.FC<RoomsListProps> = ({
  rooms,
  loadState,
  selectedBreaker,
  getRoomDeviceCounts,
  title = "Помещения",
  getRoomBreakers,
}) => {
  const isRoomAffectedByBreaker = (room: Room) => {
    if (!selectedBreaker || !selectedBreaker.controlledLoads) return false;

    return selectedBreaker.controlledLoads.some(
      (load) => load.roomId === room.id
    );
  };

  return (
    <div className={styles.roomsList}>
      <h2 className={styles.title}>
        {title} ({rooms.length})
      </h2>

      <div className={styles.roomsGrid}>
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            loadState={loadState}
            isAffected={isRoomAffectedByBreaker(room)}
            deviceCounts={getRoomDeviceCounts(room)}
            breakers={getRoomBreakers?.(room) || []}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
