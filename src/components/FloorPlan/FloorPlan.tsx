import { useState } from "react";
import styles from "./FloorPlan.module.css";
import type { Panel, Room } from "../../types";
import { getRoomInfo } from "./helpers/roomInfo";
import RoomInfoPanel from "../RoomInfoPanel/RoomInfoPanel";

interface FloorPlanProps {
  rooms: Room[];
  panels: Panel[];
}

const FloorPlan = ({ rooms, panels }: FloorPlanProps) => {
  const [selectedRoomInfo, setSelectedRoomInfo] = useState<ReturnType<
    typeof getRoomInfo
  > | null>(null);

  const handleRoomClick = (roomID: string) => {
    const roomInfo = getRoomInfo(roomID, rooms, panels);
    setSelectedRoomInfo(roomInfo);
  };

  const handleCloseRoomInfo = () => {
    setSelectedRoomInfo(null);
  };

  console.log(selectedRoomInfo);

  return (
    <div className={styles.floorPlan}>
      <div className={styles.roomsContainer}>
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`${styles.room} ${styles[room.type]}`}
            onClick={() => handleRoomClick(room.id)}
            data-room-id={room.id}
          >
            <div className={styles.roomContent}>
              <h4 className={styles.roomName}>{room.name}</h4>
              <span className={styles.roomType}>{room.type}</span>
              <span className={styles.roomArea}>{room.area} м²</span>
            </div>
          </div>
        ))}
      </div>

      {selectedRoomInfo && (
        <RoomInfoPanel
          roomInfo={selectedRoomInfo}
          onClose={handleCloseRoomInfo}
        />
      )}
    </div>
  );
};

export default FloorPlan;
