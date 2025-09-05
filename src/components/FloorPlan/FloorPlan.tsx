import React from "react";
import styles from "./FloorPlan.module.css";

const FloorPlan: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>План первого этажа</h2>

      <div className={styles.building}>
        {/* Вход сверху */}
        <div className={styles.entrance}>Вход</div>

        {/* Проходная */}
        <div className={styles.passageRoom}>
          <div className={styles.roomName}>Проходная</div>
        </div>

        {/* Помещение охраны */}
        <div className={styles.securityRoom}>
          <div className={styles.roomName}>Охрана</div>
        </div>

        {/* Холл */}
        <div className={styles.hall}>
          <div className={styles.roomName}>Холл</div>
          <div className={styles.electricalPanel}>Щит освещения 1</div>
        </div>

        {/* Помещения справа от холла */}
        <div className={styles.rightRooms}>
          <div className={styles.restroom}>Санузел 1</div>
          <div className={styles.restroom}>Санузел 2</div>
          <div className={styles.storage}>Кладовка</div>
        </div>

        {/* Столовая */}
        <div className={styles.diningRoom}>
          <div className={styles.roomName}>Столовая</div>
        </div>

        {/* Кухонная зона */}
        <div className={styles.kitchenArea}>
          <div className={styles.kitchenCorridor}>Кухонный коридор</div>

          <div className={styles.kitchenRooms}>
            <div className={styles.kitchenRoom}>
              <div className={styles.roomName}>Хранение продуктов</div>
            </div>
            <div className={styles.kitchenRoom}>
              <div className={styles.roomName}>Приготовление пищи</div>
              <div className={styles.electricalPanel}>Щит освещения 2</div>
            </div>
            <div className={styles.kitchenRoom}>
              <div className={styles.roomName}>Мойка</div>
            </div>
            <div className={styles.kitchenRoom}>
              <div className={styles.roomName}>Выпечка</div>
            </div>
            <div className={styles.kitchenRoom}>
              <div className={styles.roomName}>Хранение посуды</div>
            </div>
            <div className={styles.kitchenRoom}>
              <div className={styles.roomName}>Разделка</div>
            </div>
            <div className={styles.kitchenRoom}>
              <div className={styles.roomName}>Персонал</div>
            </div>
          </div>
        </div>

        {/* Коридор с выходом */}
        <div className={styles.mainCorridor}>
          <div className={styles.roomName}>Коридор</div>
          <div className={styles.stairs}>Лестница</div>
        </div>

        {/* Выход */}
        <div className={styles.exit}>Выход</div>

        {/* Проходы */}
        <div className={styles.passage1}></div>
        <div className={styles.passage2}></div>
        <div className={styles.passage3}></div>
      </div>
    </div>
  );
};

export default FloorPlan;
