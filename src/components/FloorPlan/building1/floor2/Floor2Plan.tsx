import { floor2Rooms } from "../../../../data/building-1/floors/floor-2/rooms";
import styles from "./Floor2Plan.module.css";

const Floor2Plan = () => {
  // Группируем помещения по уровням
  const firstLevelRooms = floor2Rooms.filter(
    (room) =>
      room.id === "room-2-204" || // OFFICE_ATX_HEAD
      room.id === "room-2-205" || // OFFICE_EVS_HEAD
      room.id === "room-2-206" || // OFFICE_AVR_HEAD
      room.id === "room-2-207" || // OFFICE_DIPNR_HEAD
      room.id === "room-2-211" || // DEPT_PTO
      room.id === "room-2-212" // DEPT_ATX_TECH
  );

  const secondLevelRooms = floor2Rooms.filter(
    (room) =>
      room.id === "room-2-201" || // CORRIDOR
      room.id === "room-2-203" // STAIRS_PANTRY
  );

  const thirdLevelRooms = floor2Rooms.filter(
    (room) =>
      room.id === "room-2-216" || // TOILET_MEN
      room.id === "room-2-210" || // OFFICE_MTS_HEAD
      room.id === "room-2-217" || // TOILET_WOMEN
      room.id === "room-2-208" || // OFFICE_AVR4_DEPUTY
      room.id === "room-2-209" || // OFFICE_GAZTORG_DIRECTOR
      room.id === "room-2-218" || // HEATER_TOILET_MEN
      room.id === "room-2-219" || // HEATER_TOILET_WOMEN
      room.id === "room-2-220" // HEATER
  );

  const roomid = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.floorPlan}>
      {/* Первый уровень - офисы и отделы */}
      <div className={styles.level}>
        {firstLevelRooms.map((room) => (
          <div
            key={room.id}
            onClick={() => roomid(room.id)}
            className={`${styles.room} ${styles[room.type]}`}
            title={`${room.name} (${room.area}м²)`}
            data-room-id={room.id}
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
            title={`${room.name} (${room.area}м²)`}
            data-room-id={room.id}
          >
            <span className={styles.roomName}>{room.name}</span>
            <span className={styles.roomArea}>{room.area}м²</span>
          </div>
        ))}
        <div className={styles.panel1}>ЩО3</div>
        <div className={styles.panel2}>ЩО5</div>
      </div>

      {/* Третий уровень - технические помещения и санузлы */}
      <div className={styles.level}>
        {thirdLevelRooms.map((room) => (
          <div
            key={room.id}
            className={`${styles.room} ${styles[room.type]}`}
            title={`${room.name} (${room.area}м²)`}
            data-room-id={room.id}
          >
            <span className={styles.roomName}>{room.name}</span>
            <span className={styles.roomArea}>{room.area}м²</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Floor2Plan;
