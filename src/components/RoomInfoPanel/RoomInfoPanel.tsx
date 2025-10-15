import type { RoomInfo } from "../FloorPlan/helpers/roomInfo";
import styles from "./RoomInfoPanel.module.css";

interface RoomInfoPanelProps {
  roomInfo: RoomInfo;
  onClose: () => void;
}

const RoomInfoPanel = ({ roomInfo, onClose }: RoomInfoPanelProps) => {
  if (!roomInfo.room) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.roomDetails} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.roomTitle}>🏠 {roomInfo.room.name}</div>

          {/* Правая панель с выключателями и розетками */}
          <div className={styles.roomSummary}>
            {/* Информация о выключателях */}
            {roomInfo.breakers.length > 0 && (
              <div className={styles.summarySection}>
                {roomInfo.breakers.map((breaker, index) => (
                  <div
                    key={`${breaker.id}-${index}`}
                    className={
                      breaker.isOn
                        ? styles.breakerItemOn
                        : styles.breakerItemOff
                    }
                  >
                    <p className={styles.breakerText}>{breaker.designation}</p>
                    <p className={styles.breakerText}>{breaker.panelName}</p>
                  </div>
                ))}
              </div>
            )}

            <button className={styles.closeButton} onClick={onClose}>
              <span>✕</span>
            </button>
          </div>
        </div>

        <div className={styles.wrapper}>
          {/* Детальная информация об освещении */}
          {roomInfo.lighting.fixtureInfo && (
            <div className={styles.lightingInfo}>
              <h4 className={styles.sectionTitle}> Освещение</h4>
              <p>
                <strong>Тип светильника:</strong>{" "}
                {roomInfo.lighting.fixtureInfo.name}
              </p>
              <p>
                <strong>Модель:</strong>{" "}
                {roomInfo.lighting.fixtureInfo.technicalInfo?.model}
              </p>
              <p>
                <strong>Тип размещения:</strong>{" "}
                {roomInfo.lighting.fixtureInfo.fixtureType}
              </p>
              <p>
                <strong>Количество ламп:</strong> {roomInfo.lighting.lampCount}
              </p>
              <p>
                <strong>Световой поток:</strong>{" "}
                {roomInfo.lighting.fixtureInfo.technicalInfo?.luminousFlux} лм
              </p>
              <p>
                <strong>Срок службы:</strong>{" "}
                {roomInfo.lighting.fixtureInfo.technicalInfo?.lifespan} часов
              </p>
              {roomInfo.lighting.fixtureInfo.technicalInfo?.safetyStandards && (
                <p>
                  <strong>Стандарты безопасности:</strong>{" "}
                  {roomInfo.lighting.fixtureInfo.technicalInfo.safetyStandards}
                </p>
              )}
            </div>
          )}
          {/* Информация о розетках */}
          {roomInfo.room.outlets && (
            <div className={styles.outletsSection}>
              <div className={styles.sectionTitle}>🔌 Розетки</div>
              <div className={styles.outletsInfo}>
                <p>
                  <strong>Количество:</strong> {roomInfo.room.outlets.count}
                </p>
                {roomInfo.room.outlets && (
                  <p>
                    <strong>Специальные:</strong>
                    {roomInfo.room.outlets.count}{" "}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomInfoPanel;
