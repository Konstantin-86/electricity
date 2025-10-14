import React from "react";
import { useFloorDataStore } from "../../store/useFloorDataStore";

import styles from "./RoomPopup.module.css";

interface RoomPopupProps {
  roomId: string;
  isOpen: boolean;
  onClose: () => void;
}

const RoomPopup: React.FC<RoomPopupProps> = ({ roomId, isOpen, onClose }) => {
  const { getRoomById, getBreakersForRoom } = useFloorDataStore();

  if (!isOpen) return null;

  const room = getRoomById(roomId);
  const roomBreakers = getBreakersForRoom(roomId);

  if (!room) {
    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          <div>Комната не найдена</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.roomTitle}>{room.name}</h2>

        <div className={styles.roomInfo}>
          <div className={styles.infoRow}>
            <span className={styles.label}>Тип:</span>
            <span className={styles.value}>{room.type}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Площадь:</span>
            <span className={styles.value}>{room.area} м²</span>
          </div>
        </div>

        {/* Освещение */}
        {room.lighting && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Освещение</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Количество светильников:</span>
              <span className={styles.value}>{room.lighting.count}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Тип светильников:</span>
              <span className={styles.value}>{room.lighting.fixtureType}</span>
            </div>
          </div>
        )}

        {/* Розетки */}
        {room.outlets && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Розетки</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Количество розеток:</span>
              <span className={styles.value}>{room.outlets.count}</span>
            </div>
          </div>
        )}

        {/* Автоматы */}
        {roomBreakers.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Автоматы</h3>
            {roomBreakers.map((breaker) => (
              <div key={breaker.id} className={styles.breaker}>
                <div className={styles.breakerHeader}>
                  <span className={styles.breakerDesignation}>
                    {breaker.designation}
                  </span>
                  <span
                    className={`${styles.breakerStatus} ${
                      breaker.isOn ? styles.on : styles.off
                    }`}
                  >
                    {breaker.isOn ? "ВКЛ" : "ВЫКЛ"}
                  </span>
                </div>
                <div className={styles.breakerDescription}>
                  {breaker.description}
                </div>
                <div className={styles.breakerInfo}>
                  <span>{breaker.rating}A</span>
                  {breaker.technicalInfo && (
                    <span>
                      {breaker.technicalInfo.manufacturer}{" "}
                      {breaker.technicalInfo.model}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomPopup;
