import { floor3Rooms } from "../../../../data/building-1/floors/floor-3/rooms";
import styles from "./Floor3Plan.module.css";

const Floor3Plan = () => {
  // Группируем помещения по уровням
  const firstLevelRooms = floor3Rooms.filter(
    (room) =>
      room.id === "room-3-303" || // OCCUPATIONAL_SAFETY
      room.id === "room-3-302" || // ECONOMIST
      room.id === "room-3-313" || // HR_DEPARTMENT
      room.id === "room-3-310" || // MEETING_ROOM
      room.id === "room-3-308" || // CHIEF_ACCOUNTANT
      room.id === "room-3-317" || // WORK_ECONOMIST
      room.id === "room-3-318" || // MASS_WORK_SPECIALIST
      room.id === "room-3-319" || // ACCOUNTING_CONTROL_GROUP_LEAD
      room.id === "room-3-312" // PROGRAMMER
  );

  const secondLevelRooms = floor3Rooms.filter(
    (room) => room.id === "room-3-301" // CORRIDOR
  );

  const thirdLevelRooms = floor3Rooms.filter(
    (room) =>
      room.id === "room-3-306" || // CHIEF_ENGINEER
      /*  room.id === "room-3-305" || // INVENTORY_ACCOUNTING */ /* уточнить!!! */
      room.id === "room-3-307" || // RECEPTION
      room.id === "room-3-304" || // ACCOUNTING
      room.id === "room-3-309" || // REST_ROOM
      /*   room.id === "room-3-311" || // XEROX_HALL */
      room.id === "room-3-306" || // CHIEF_ENGINEER
      room.id === "room-3-314" || // DIRECTOR
      room.id === "room-3-315" || // TOILET_MEN
      room.id === "room-3-316" // TOILET_WOMEN
  );

  const roomid = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.floorPlan}>
      {/* Первый уровень - офисы и туалеты */}
      <div className={styles.level}>
        {firstLevelRooms.map((room) => (
          <div
            key={room.id}
            onClick={() => roomid(room.id)}
            className={`${styles.room} ${styles[room.type]}`}
            data-room-id={room.id}
          >
            <span className={styles.roomName}>{room.name}</span>
            <span className={styles.roomArea}>{room.area}м²</span>
          </div>
        ))}
      </div>

      {/* Второй уровень - только коридор */}
      <div className={`${styles.level} ${styles.levelPanels}`}>
        <div
          onClick={() => roomid("room-3-301")}
          className={`${styles.room} ${styles.roomCorridor}`}
        >
          <span className={styles.roomName}>Корридор</span>
          <span className={styles.roomArea}>53 м²</span>
          <div className={styles.panel1}>ЩО4</div>
          <div className={styles.panel2}>ЩО5</div>
        </div>
      </div>

      {/* Третий уровень - руководство и дополнительные помещения */}
      <div className={styles.level}>
        {thirdLevelRooms.map((room) => (
          <div
            key={room.id}
            className={`${styles.room} ${styles[room.type]}`}
            onClick={() => roomid(room.id)}
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

export default Floor3Plan;
