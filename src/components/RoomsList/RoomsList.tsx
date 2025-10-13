import { memo } from "react";
import { useBreakerStore } from "../../store/useBreakerStore";
import RoomCard from "../RoomCard/RoomCard";
import type { Room, LightFixtureInstance, OutletInstance } from "../../types";

import styles from "./RoomsList.module.css";

interface RoomsListProps {
  rooms: Room[];
  points: (OutletInstance | LightFixtureInstance)[];
}

const RoomsList = ({ rooms, points }: RoomsListProps) => {
  const currentFloor = useBreakerStore((state) => state.currentFloor);

  if (!currentFloor) {
    return <div className={styles.placeholder}>Выберите этаж</div>;
  }

  return (
    <div className={styles.rooms}>
      {rooms.map((room) => {
        const roomPoints = points.filter((point) => point.roomId === room.id);
        return <RoomCard key={room.id} room={room} points={roomPoints} />;
      })}
    </div>
  );
};

export default memo(RoomsList);
