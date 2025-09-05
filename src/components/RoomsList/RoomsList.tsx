import type { Panel, Room } from "../../types";
import FloorPlan from "../FloorPlan/FloorPlan";
import RoomCard from "../RoomCard/RoomCard";
import { getRoomPowerState } from "../utils/getRoomPowerState";

import styles from "./RoomsList.module.css";

interface RoomsListProps {
  rooms: Room[];
  panels: Panel[];
  breakersState: { [key: string]: boolean };
}

const RoomsList = ({ rooms, panels, breakersState }: RoomsListProps) => {
  console.log("breakersState", breakersState);

  return (
    <div className={styles.roomsList}>
      <FloorPlan />
      <div className={styles.roomsGrid}>
        {rooms.map((room) => {
          const powerState = getRoomPowerState(room, breakersState, panels);
          console.log(`Power state for ${room.name}:`, powerState);

          return <RoomCard key={room.id} room={room} powerState={powerState} />;
        })}
      </div>
    </div>
  );
};

export default RoomsList;
