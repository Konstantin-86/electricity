import { useMemo, useState } from "react";
import { floor2Rooms } from "../../../../data/building-1/floors/floor-2/rooms";
import { electricalInstances2Floor } from "../../../../data/building-1/floors/floor-2/pointsRooms";
import { RoomPopup } from "../../../RoomCard/RoomPopup";
import { floor2Panels } from "../../../../data/building-1/floors/floor-2/panels";

import styles from "./Floor2Plan.module.css";

const Floor2Plan = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const selectedRoom = useMemo(
    () =>
      selectedRoomId
        ? floor2Rooms.find((room) => room.id === selectedRoomId)
        : null,
    [selectedRoomId]
  );

  const roomPoints = useMemo(
    () =>
      selectedRoomId
        ? electricalInstances2Floor.filter(
            (point) => point.roomId === selectedRoomId
          )
        : [],
    [selectedRoomId]
  );

  const handleRoomClick = (id: string) => {
    setSelectedRoomId(id);
  };

  const handleClosePopup = () => {
    setSelectedRoomId(null);
  };

  const firstLevelRooms = floor2Rooms.filter(
    (room) =>
      room.id === "room-2-201" || // OFFICE_AVR4_DEPUTY
      room.id === "room-2-202" || // OFFICE_UOOP_CHIEF
      room.id === "room-2-203" || // OFFICE_ATX_HEAD
      room.id === "room-2-204" || // OFFICE_BUH_MPZ
      room.id === "room-2-205" || // OFFICE_AVU2
      room.id === "room-2-206" || // OFFICE_AVU3
      room.id === "room-2-207" || // DEPT_ATX_TECH
      room.id === "room-2-208" || // OFFICE_PROGRAMMIST
      room.id === "room-2-208-1" // VENTILYATSIYA
  );

  const secondLevelRooms = floor2Rooms.filter(
    (room) =>
      room.id === "room-2-209" || // CORRIDOR
      room.id === "room-2-222" // STAIRS_PANTRY
  );

  const thirdLevelRooms = floor2Rooms.filter(
    (room) =>
      room.id === "room-2-221" || // OFFICE_ARKHIV
      room.id === "room-2-219" || // OFFICE_AVU1_HEAD
      room.id === "room-2-217" || // OFFICE_AVU1_ENGINEER
      room.id === "room-2-216" || // OFFICE_UOOP
      room.id === "room-2-215" || // OFFICE_AVU1
      room.id === "room-2-214" || // CHIEF_PTO
      room.id === "room-2-214_1" || // PTO_ENGENEERS
      room.id === "room-2-212" || // TOILET_WOMEN
      room.id === "room-2-211" // TOILET_MEN
  );

  return (
    <div className={styles.floorPlan}>
      {/* Первый уровень - офисы и отделы */}
      <div className={styles.level}>
        {firstLevelRooms.map((room) => (
          <div
            key={room.id}
            className={`${styles.room} ${styles[room.type]}`}
            data-room-id={room.id}
            onClick={() => handleRoomClick(room.id)}
          >
            <span className={styles.roomName}>{room.name}</span>
            <span className={styles.roomArea}>{room.area}м²</span>
          </div>
        ))}
      </div>

      {/* Второй уровень - лестница, коридор, лестница */}
      <div className={`${styles.level} ${styles.levelPanels}`}>
        {secondLevelRooms.map((room) => (
          <div
            key={room.id}
            className={`${styles.room} ${styles[room.type]}`}
            data-room-id={room.id}
            onClick={() => handleRoomClick(room.id)}
          >
            <span className={styles.roomName}>{room.name}</span>
            <span className={styles.roomArea}>{room.area}м²</span>
          </div>
        ))}
        <div className={styles.panel1}>ЩО3</div>
        <div className={styles.panel2}>ЩО2</div>
      </div>

      {/* Третий уровень - технические помещения и санузлы */}
      <div className={styles.level}>
        {thirdLevelRooms.map((room) => (
          <div
            key={room.id}
            className={`${styles.room} ${styles[room.type]}`}
            data-room-id={room.id}
            onClick={() => handleRoomClick(room.id)}
          >
            <span className={styles.roomName}>{room.name}</span>
            <span className={styles.roomArea}>{room.area}м²</span>
          </div>
        ))}
      </div>
      {selectedRoom && (
        <RoomPopup
          room={selectedRoom}
          points={roomPoints}
          panels={floor2Panels}
          isOpen={!!selectedRoomId}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Floor2Plan;
