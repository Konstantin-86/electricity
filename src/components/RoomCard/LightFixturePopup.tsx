import { fixtureTemplates } from "../../data/fixture/fixtureTemplates";
import { lampTemplates } from "../../data/fixture/lampTemplates";
import type { FixtureKey, Lamp, LightFixture } from "../../types";

import styles from "./LightFixturePopup.module.css";

interface LightFixturePopupProps {
  fixtureKey: FixtureKey;
  isOpen: boolean;
  onClose: () => void;
}

const LightFixturePopup = ({
  fixtureKey,
  isOpen,
  onClose,
}: LightFixturePopupProps) => {
  if (!isOpen) return null;

  // Добавляем проверку на существование светильника
  const fixture: LightFixture | undefined = fixtureTemplates[fixtureKey];

  // Если светильник не найден, показываем сообщение об ошибке
  if (!fixture) {
    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          <h2 className={styles.title}>Ошибка</h2>
          <p>Светильник "{fixtureKey}" не найден в базе данных.</p>
        </div>
      </div>
    );
  }

  const lamps: Lamp[] = fixture.lampIds
    .map((lampId) => lampTemplates[lampId])
    .filter((lamp): lamp is Lamp => lamp !== undefined); // Фильтруем undefined

  // Рассчитываем общую мощность
  const totalWattage = lamps.reduce((sum, lamp) => sum + lamp.wattage, 0);
  const totalLumens = lamps.reduce((sum, lamp) => sum + (lamp.lumens || 0), 0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.title}>{fixture.name}</h2>

        <div className={styles.section}>
          <h3>Основные характеристики</h3>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <span className={styles.label}>Тип:</span>
              <span className={styles.value}>
                {fixture.fixtureType === "ceiling" && "Потолочный"}
                {fixture.fixtureType === "wall" && "Настенный"}
                {fixture.fixtureType === "emergency" && "Аварийный"}
                {!fixture.fixtureType && "Не указан"}
              </span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.label}>Общая мощность:</span>
              <span className={styles.value}>{totalWattage} Вт</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.label}>Световой поток:</span>
              <span className={styles.value}>{totalLumens} лм</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.label}>Количество ламп:</span>
              <span className={styles.value}>{lamps.length} шт.</span>
            </div>
          </div>
        </div>

        {fixture.technicalInfo && (
          <div className={styles.section}>
            <h3>Техническая информация</h3>
            <div className={styles.grid}>
              {fixture.technicalInfo.model && (
                <div className={styles.gridItem}>
                  <span className={styles.label}>Модель:</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.model}
                  </span>
                </div>
              )}
              {fixture.technicalInfo.socketType && (
                <div className={styles.gridItem}>
                  <span className={styles.label}>Тип цоколя:</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.socketType}
                  </span>
                </div>
              )}
              {fixture.technicalInfo.lifespan && (
                <div className={styles.gridItem}>
                  <span className={styles.label}>Срок службы:</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.lifespan} часов
                  </span>
                </div>
              )}
              {fixture.technicalInfo.safetyStandards && (
                <div className={styles.gridItem}>
                  <span className={styles.label}>Стандарты безопасности:</span>
                  <span className={styles.value}>
                    {fixture.technicalInfo.safetyStandards}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className={styles.section}>
          <h3>Лампы</h3>
          <div className={styles.lampsList}>
            {lamps.map((lamp, index) => (
              <div key={`${lamp.id}-${index}`} className={styles.lampItem}>
                {" "}
                {/* Уникальный ключ */}
                <div className={styles.lampHeader}>
                  <span className={styles.lampNumber}>Лампа {index + 1}</span>
                  {lamp.type && (
                    <span className={styles.lampType}>{lamp.type}</span>
                  )}
                </div>
                <div className={styles.lampDetails}>
                  <span>{lamp.wattage} Вт</span>
                  {lamp.lumens && <span>{lamp.lumens} лм</span>}
                  {lamp.colorTemperature && (
                    <span>{lamp.colorTemperature}K</span>
                  )}
                </div>
                {lamp.manufacturer && (
                  <div className={styles.lampModel}>
                    {lamp.manufacturer} {lamp.model}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightFixturePopup;
