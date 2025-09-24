// components/RoomCard/LightFixturePopup.tsx
import { useEffect } from "react";
import { fixtureTemplates } from "../../data/fixture/fixtureTemplates";
import { lampTemplates } from "../../data/fixture/lampTemplates";
import type { FixtureKey } from "../../types";
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      };
    }
  }, [isOpen]);
  if (!isOpen) return null;

  const fixture = fixtureTemplates[fixtureKey];
  if (!fixture) {
    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <h2>Ошибка</h2>
          <p>Светильник "{fixtureKey}" не найден</p>
        </div>
      </div>
    );
  }

  const lamps = fixture.lampIds.map((id) => lampTemplates[id]).filter(Boolean);

  const totalWattage = lamps.reduce((sum, lamp) => sum + lamp.wattage, 0);
  const totalLumens = lamps.reduce((sum, lamp) => sum + (lamp.lumens || 0), 0);

  const fixtureTypeLabels = {
    ceiling: "Потолочный",
    wall: "Настенный",
    emergency: "Аварийный",
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>{fixture.name}</h2>

        {/* Основные характеристики */}
        <div className={styles.section}>
          <h3>Основные характеристики</h3>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <span>Тип:</span>
              <span>
                {fixture.fixtureType
                  ? fixtureTypeLabels[fixture.fixtureType]
                  : "Не указан"}
              </span>
            </div>
            <div className={styles.gridItem}>
              <span>Мощность:</span>
              <span>{totalWattage} Вт</span>
            </div>
            <div className={styles.gridItem}>
              <span>Световой поток:</span>
              <span>{totalLumens} лм</span>
            </div>
            <div className={styles.gridItem}>
              <span>Количество ламп:</span>
              <span>{lamps.length} шт.</span>
            </div>
          </div>
        </div>

        {/* Техническая информация */}
        {fixture.technicalInfo && (
          <div className={styles.section}>
            <h3>Техническая информация</h3>
            <div className={styles.grid}>
              {fixture.technicalInfo.model && (
                <div className={styles.gridItem}>
                  <span>Модель:</span>
                  <span>{fixture.technicalInfo.model}</span>
                </div>
              )}
              {fixture.technicalInfo.socketType && (
                <div className={styles.gridItem}>
                  <span>Цоколь:</span>
                  <span>{fixture.technicalInfo.socketType}</span>
                </div>
              )}
              {fixture.technicalInfo.lifespan && (
                <div className={styles.gridItem}>
                  <span>Срок службы:</span>
                  <span>{fixture.technicalInfo.lifespan} часов</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Лампы */}
        <div className={styles.section}>
          <h3>Лампы ({lamps.length} шт.)</h3>
          <div className={styles.lampsList}>
            {lamps.map((lamp, index) => (
              <div key={index} className={styles.lampItem}>
                <div className={styles.lampHeader}>
                  <span>Лампа {index + 1}</span>
                  {lamp.type && <span>{lamp.type}</span>}
                </div>
                <div className={styles.lampDetails}>
                  <span>{lamp.wattage} Вт</span>
                  {lamp.lumens && <span>{lamp.lumens} лм</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightFixturePopup;
