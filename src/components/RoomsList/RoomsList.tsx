// components/RoomsList/RoomsList.tsx
import { memo } from "react";
import { useBreakerStore } from "../../store/breakerStore";
import RoomCard from "../RoomCard/RoomCard";
import type { Room, LightFixtureInstance, OutletInstance } from "../../types";
import styles from "./RoomsList.module.css";

interface RoomsListProps {
  rooms: Room[];
  points: (OutletInstance | LightFixtureInstance)[];
  goBackButton: () => void;
}

const RoomsList = ({ rooms, points, goBackButton }: RoomsListProps) => {
  const currentFloor = useBreakerStore((state) => state.currentFloor);

  if (!currentFloor) {
    return <div className={styles.placeholder}>Выберите этаж</div>;
  }

  return (
    <div className={styles.roomsGrid}>
      <button onClick={goBackButton}>I`ll be back</button>
      {rooms.map((room) => {
        const roomPoints = points.filter((point) => point.roomId === room.id);

        return <RoomCard key={room.id} room={room} points={roomPoints} />;
      })}
    </div>
  );
};

export default memo(RoomsList);
