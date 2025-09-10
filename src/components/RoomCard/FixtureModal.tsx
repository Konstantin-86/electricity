import type { LightFixture } from "../../types";
import styles from "./FixtureModal.module.css";

interface FixtureModalProps {
  fixture: LightFixture;
  isOpen: boolean;
  onClose: () => void;
  isActive: boolean;
}

const FixtureModal: React.FC<FixtureModalProps> = ({
  fixture,
  isOpen,
  onClose,
  isActive,
}) => {
  if (!isOpen) return null;

  // Функция для отображения типа цоколя
  const renderSocketType = (socketType: string | undefined) => {
    if (!socketType) return "Не указано";

    const socketTypes: Record<string, string> = {
      E27: "E27 (Стандартный винтовой)",
      E14: "E14 (Миньон винтовой)",
      E40: "E40 (Крупный винтовой)",
      GU10: "GU10 (Поворотный штырьковый)",
      "GU5.3": "GU5.3 (Двухштырьковый)",
      G4: "G4 (Миниатюрный штырьковый)",
      GX53: "GX53 (Поворотный штырьковый для мебели)",
      G13: "G13 (Линейный для люминесцентных ламп)",
      G5: "G5 (Линейный миниатюрный)",
      B22: "B22 (Байонетный стандартный)",
      B15: "B15 (Байонетный миньон)",
      special: "Специальный",
    };

    return socketTypes[socketType] || socketType;
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>{fixture.name}</h3>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.statusSection}>
            <div
              className={`${styles.statusBadge} ${
                isActive ? styles.active : styles.inactive
              }`}
            >
              {isActive ? "Включен" : "Выключен"}
            </div>
          </div>

          <div className={styles.infoSection}>
            <h4>Основная информация</h4>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Тип светильника:</span>
                <span className={styles.value}>
                  {fixture.fixtureType === "ceiling" && "Потолочный"}
                  {fixture.fixtureType === "wall" && "Настенный"}
                  {fixture.fixtureType === "emergency" && "Аварийный"}
                  {!fixture.fixtureType && "Не указано"}
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Количество ламп:</span>
                <span className={styles.value}>{fixture.lampIds.length}</span>
              </div>
            </div>
          </div>

          {fixture.technicalInfo && (
            <div className={styles.infoSection}>
              <h4>Технические характеристики</h4>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Модель:</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.model || "Не указано"}
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.label}>Тип цоколя:</span>
                  <span className={styles.value}>
                    {renderSocketType(fixture.technicalInfo.socketType)}
                  </span>
                </div>

                {fixture.technicalInfo.socketType === "special" && (
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Описание цоколя:</span>
                    <span className={styles.value}>
                      {fixture.technicalInfo.socketDescription || "Не указано"}
                    </span>
                  </div>
                )}

                <div className={styles.infoItem}>
                  <span className={styles.label}>Количество цоколей:</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.socketType || "Не указано"}
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.label}>Световой поток:</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.luminousFlux
                      ? `${fixture.technicalInfo.luminousFlux} лм`
                      : "Не указано"}
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.label}>Срок службы:</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.lifespan
                      ? `${(fixture.technicalInfo.lifespan / 1000).toFixed(
                          0
                        )} тыс. часов`
                      : "Не указано"}
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.label}>Степень защиты (IP):</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.safetyStandards || "Не указано"}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className={styles.lampsSection}>
            <h4>Лампы ({fixture.lampIds.length})</h4>
            <div className={styles.lampsList}>
              {fixture.lampIds.map((lamp, index) => (
                <div key={`${lamp.id}-${index}`} className={styles.lampItem}>
                  <span className={styles.lampIcon}>💡</span>
                  <div className={styles.lampInfo}>
                    <div className={styles.lampInfoID}>{lamp.id}</div>
                    <div className={styles.lampInfoWattage}>
                      {lamp.wattage} Вт
                    </div>
                    <div className={styles.lampInfoType}>
                      {lamp.type === "led" && "Светодиодная"}
                      {lamp.type === "incandescent" && "Лампа накаливания"}
                      {lamp.type === "fluorescent" && "Люминесцентная"}
                      {!lamp.type && "Тип не указан"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixtureModal;
