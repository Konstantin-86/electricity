import { floor1Rooms } from "../../../../data/building-1/floors/floor-1/rooms";
import styles from "./Floor1Plan.module.css";

const Floor1Plan = () => {
  const roomid = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.floorPlan}>
      <div className={styles.outside}>
        <div
          onClick={() => roomid(floor1Rooms[6].id)}
          className={`${styles.room} ${styles.checkpoint}`}
        >
          <span className={styles.roomName}>{floor1Rooms[6].name}</span>
          <span className={styles.roomArea}>{floor1Rooms[6].area}м²</span>
        </div>
        <div className={`${styles.room} ${styles.office}`}>
          <span className={styles.roomName}>{floor1Rooms[5].name}</span>
          <span className={styles.roomArea}>{floor1Rooms[5].area}м²</span>
        </div>
      </div>

      <div className={styles.roomsContainer}>
        {/* Левая часть - входная группа */}
        <div className={styles.leftSection}>
          {/* Входная группа */}
          <div className={styles.entranceGroup}>
            <div
              onClick={() => roomid(floor1Rooms[0].id)}
              className={`${styles.room} ${styles.corridor} ${styles.hall}`}
              title={`${floor1Rooms[0].name} (${floor1Rooms[0].area}м²)`}
            >
              <span className={styles.roomName}>{floor1Rooms[0].name}</span>
            </div>
          </div>

          {/* Правая сторона от холла */}
          <div className={styles.serviceGroup}>
            <div className={styles.toiletGroup}>
              <div
                onClick={() => roomid(floor1Rooms[2].id)}
                className={`${styles.room} ${styles.bathroom}`}
                title={`${floor1Rooms[2].name} (${floor1Rooms[2].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[2].name}</span>
                <span className={styles.roomArea}>{floor1Rooms[2].area}м²</span>
              </div>

              <div
                onClick={() => roomid(floor1Rooms[3].id)}
                className={`${styles.room} ${styles.bathroom}`}
                title={`${floor1Rooms[3].name} (${floor1Rooms[3].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[3].name}</span>
                <span className={styles.roomArea}>{floor1Rooms[3].area}м²</span>
              </div>
            </div>

            <div className={styles.dressingGroup}>
              <div
                onClick={() => roomid(floor1Rooms[4].id)}
                className={`${styles.room} ${styles.office}`}
                title={`${floor1Rooms[4].name} (${floor1Rooms[4].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[4].name}</span>
                <span className={styles.roomArea}>{floor1Rooms[4].area}м²</span>
              </div>
            </div>

            <div className={styles.technicalGroup}>
              <div
                onClick={() => roomid(floor1Rooms[15].id)}
                className={`${styles.room} ${styles.bathroom}`}
                title={`${floor1Rooms[15].name} (${floor1Rooms[15].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[15].name}</span>
                <span className={styles.roomArea}>
                  {floor1Rooms[15].area}м²
                </span>
              </div>

              <div
                onClick={() => roomid(floor1Rooms[7].id)}
                className={`${styles.room} ${styles.other}`}
                title={`${floor1Rooms[7].name} (${floor1Rooms[7].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[7].name}</span>
                <span className={styles.roomArea}>{floor1Rooms[7].area}м²</span>
              </div>

              <div
                onClick={() => roomid(floor1Rooms[8].id)}
                className={`${styles.room} ${styles.corridor}`}
                title={`${floor1Rooms[8].name} (${floor1Rooms[8].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[8].name}</span>
                <span className={styles.roomArea}>{floor1Rooms[8].area}м²</span>
              </div>
              <div
                onClick={() => roomid(floor1Rooms[1].id)}
                className={`${styles.room} ${styles.conference}`}
                title={`${floor1Rooms[1].name} (${floor1Rooms[1].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[1].name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Правая часть - столовая */}
        <div className={styles.rightSection}>
          {/* Обеденные залы */}
          <div className={styles.diningArea}>
            <div
              onClick={() => roomid(floor1Rooms[23].id)}
              className={`${styles.room} ${styles.kitchen} ${styles.mainDining}`}
              title={`${floor1Rooms[23].name} (${floor1Rooms[23].area}м²)`}
            >
              <span className={styles.roomName}>{floor1Rooms[23].name}</span>
              <span className={styles.roomArea}>{floor1Rooms[23].area}м²</span>
            </div>

            <div
              onClick={() => roomid(floor1Rooms[9].id)}
              className={`${styles.room} ${styles.kitchen} ${styles.vipDining}`}
              title={`${floor1Rooms[9].name} (${floor1Rooms[9].area}м²)`}
            >
              <span className={styles.roomName}>{floor1Rooms[9].name}</span>
              <span className={styles.roomArea}>{floor1Rooms[9].area}м²</span>
            </div>
          </div>

          {/* Коридор столовой */}
          <div
            onClick={() => roomid(floor1Rooms[21].id)}
            className={`${styles.room} ${styles.corridor} ${styles.diningCorridor}`}
            title={`${floor1Rooms[21].name} (${floor1Rooms[21].area}м²)`}
          >
            <span className={styles.roomName}>{floor1Rooms[21].name}</span>
          </div>

          {/* Цеха */}
          <div className={styles.workshopGroup}>
            <div
              onClick={() => roomid(floor1Rooms[10].id)}
              className={`${styles.room} ${styles.technical}`}
              title={`${floor1Rooms[10].name} (${floor1Rooms[10].area}м²)`}
            >
              <span className={styles.roomName}>{floor1Rooms[10].name}</span>
              <span className={styles.roomArea}>{floor1Rooms[10].area}м²</span>
            </div>

            <div
              onClick={() => roomid(floor1Rooms[11].id)}
              className={`${styles.room} ${styles.technical}`}
              title={`${floor1Rooms[11].name} (${floor1Rooms[11].area}м²)`}
            >
              <span className={styles.roomName}>{floor1Rooms[11].name}</span>
              <span className={styles.roomArea}>{floor1Rooms[11].area}м²</span>
            </div>

            <div
              onClick={() => roomid(floor1Rooms[12].id)}
              className={`${styles.room} ${styles.technical}`}
              title={`${floor1Rooms[12].name} (${floor1Rooms[12].area}м²)`}
            >
              <span className={styles.roomName}>{floor1Rooms[12].name}</span>
              <span className={styles.roomArea}>{floor1Rooms[12].area}м²</span>
            </div>

            <div
              onClick={() => roomid(floor1Rooms[14].id)}
              className={`${styles.room} ${styles.technical}`}
              title={`${floor1Rooms[14].name} (${floor1Rooms[14].area}м²)`}
            >
              <span className={styles.roomName}>{floor1Rooms[14].name}</span>
              <span className={styles.roomArea}>{floor1Rooms[14].area}м²</span>
            </div>
          </div>

          {/* Служебные помещения */}
          <div className={styles.diningServiceGroup}>
            <div className={styles.officeRow}>
              <div
                onClick={() => roomid(floor1Rooms[13].id)}
                className={`${styles.room} ${styles.office}`}
                title={`${floor1Rooms[13].name} (${floor1Rooms[13].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[13].name}</span>
                <span className={styles.roomArea}>
                  {floor1Rooms[13].area}м²
                </span>
              </div>

              <div
                onClick={() => roomid(floor1Rooms[19].id)}
                className={`${styles.room} ${styles.office}`}
                title={`${floor1Rooms[19].name} (${floor1Rooms[19].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[19].name}</span>
                <span className={styles.roomArea}>
                  {floor1Rooms[19].area}м²
                </span>
              </div>

              <div
                onClick={() => roomid(floor1Rooms[17].id)}
                className={`${styles.room} ${styles.bathroom}`}
                title={`${floor1Rooms[17].name} (${floor1Rooms[17].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[17].name}</span>
                <span className={styles.roomArea}>
                  {floor1Rooms[17].area}м²
                </span>
              </div>
            </div>

            <div className={styles.storageRow}>
              <div
                onClick={() => roomid(floor1Rooms[16].id)}
                className={`${styles.room} ${styles.storage}`}
                title={`${floor1Rooms[16].name} (${floor1Rooms[16].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[16].name}</span>
                <span className={styles.roomArea}>
                  {floor1Rooms[16].area}м²
                </span>
              </div>

              <div
                onClick={() => roomid(floor1Rooms[18].id)}
                className={`${styles.room} ${styles.storage}`}
                title={`${floor1Rooms[18].name} (${floor1Rooms[18].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[18].name}</span>
                <span className={styles.roomArea}>
                  {floor1Rooms[18].area}м²
                </span>
              </div>

              <div
                onClick={() => roomid(floor1Rooms[20].id)}
                className={`${styles.room} ${styles.storage}`}
                title={`${floor1Rooms[20].name} (${floor1Rooms[20].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[20].name}</span>
                <span className={styles.roomArea}>
                  {floor1Rooms[20].area}м²
                </span>
              </div>

              <div
                onClick={() => roomid(floor1Rooms[22].id)}
                className={`${styles.room} ${styles.corridor}`}
                title={`${floor1Rooms[22].name} (${floor1Rooms[22].area}м²)`}
              >
                <span className={styles.roomName}>{floor1Rooms[22].name}</span>
                <span className={styles.roomArea}>
                  {floor1Rooms[22].area}м²
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Floor1Plan;
