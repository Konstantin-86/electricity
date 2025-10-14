// components/FloorPlan/building1/floor3/Floor1_3Plan.tsx
import { useState } from "react";
import { useFloorDataStore } from "../../../../store/useFloorDataStore";
import RoomPopup from "../../../RoomPopup/RoomPopup";
import styles from "./Floor1_3Plan.module.css";
import { ROOM_IDS_3_FLOOR } from "../../../../data/building-1/floors/floor-3/rooms";

const Floor1_3Plan = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const { currentRooms } = useFloorDataStore();

  const handleRoomClick = (roomId: string) => {
    setSelectedRoomId(roomId);
  };

  const handleClosePopup = () => {
    setSelectedRoomId(null);
  };

  const firstLevelRooms = [
    ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
    ROOM_IDS_3_FLOOR.ECONOMIST,
    ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    ROOM_IDS_3_FLOOR.MEETING_ROOM,
    ROOM_IDS_3_FLOOR.PAYROLL,
    ROOM_IDS_3_FLOOR.WORK_ECONOMIST,
    ROOM_IDS_3_FLOOR.MASS_WORK_SPECIALIST,
    ROOM_IDS_3_FLOOR.ACCOUNTING_CONTROL_GROUP_LEAD,
    ROOM_IDS_3_FLOOR.PROGRAMMER,
  ];

  const thirdLevelRooms = [
    ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
    ROOM_IDS_3_FLOOR.RECEPTION,
    ROOM_IDS_3_FLOOR.ACCOUNTING,
    ROOM_IDS_3_FLOOR.DIRECTOR,
    ROOM_IDS_3_FLOOR.TOILET_MEN,
    ROOM_IDS_3_FLOOR.TOILET_WOMEN,
  ];

  return (
    <>
      <div className={styles.floorPlan}>
        <div className={styles.level}>
          {firstLevelRooms.map((roomId) => {
            const room = currentRooms.find((r) => r.id === roomId);
            return room ? (
              <div
                key={room.id}
                className={`${styles.room} ${styles[room.type]}`}
                data-room-id={room.id}
                onClick={() => handleRoomClick(room.id)}
              >
                <span className={styles.roomName}>{room.name}</span>
                <span className={styles.roomArea}>{room.area}м²</span>
              </div>
            ) : null;
          })}
        </div>

        <div className={`${styles.level} ${styles.levelPanels}`}>
          <div
            className={`${styles.room} ${styles.corridor}`}
            data-room-id={ROOM_IDS_3_FLOOR.CORRIDOR}
            onClick={() => handleRoomClick(ROOM_IDS_3_FLOOR.CORRIDOR)}
          >
            <span className={styles.roomName}>Коридор</span>
            <span className={styles.roomArea}>53 м²</span>
            <div className={styles.panel1}>ЩО4</div>
            <div className={styles.panel2}>ЩО5</div>
          </div>
        </div>

        <div className={styles.level}>
          {thirdLevelRooms.map((roomId) => {
            const room = currentRooms.find((r) => r.id === roomId);
            return room ? (
              <div
                key={room.id}
                className={`${styles.room} ${styles[room.type]}`}
                data-room-id={room.id}
                onClick={() => handleRoomClick(room.id)}
              >
                <span className={styles.roomName}>{room.name}</span>
                <span className={styles.roomArea}>{room.area}м²</span>
              </div>
            ) : null;
          })}
        </div>
      </div>
      {selectedRoomId && (
        <RoomPopup
          roomId={selectedRoomId}
          isOpen={true}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default Floor1_3Plan;
