import React from "react";
import type { Room } from "../../types";
import styles from "./RoomCard.module.css";

interface RoomCardProps {
  room: Room;
  loadState: { [loadId: string]: boolean };
  isAffected: boolean;
  deviceCounts: {
    activeLights: number;
    totalLights: number;
    activeOutlets: number;
    totalOutlets: number;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({
  room,
  loadState,
  isAffected,
  deviceCounts,
}) => {
  const getRoomIcon = () => {
    const icons: Record<string, string> = {
      office: "🏢",
      corridor: "🚶",
      conference: "👥",
      bathroom: "🚻",
      kitchen: "🍳",
      storage: "📦",
      technical: "🔧",
      other: "🏠",
    };
    return icons[room.type] || "🏠";
  };

  const getRoomTypeLabel = () => {
    const typeLabels: Record<string, string> = {
      office: "Офис",
      corridor: "Коридор",
      conference: "Конференц-зал",
      bathroom: "Санузел",
      kitchen: "Кухня",
      storage: "Кладовая",
      technical: "Техническое",
      other: "Другое",
    };
    return typeLabels[room.type] || room.type;
  };

  // Подсчет общего количества ламп во всех светильниках
  const totalLampsCount =
    room.lightFixtures?.reduce(
      (total, fixture) => total + fixture.lampIds.length,
      0
    ) || 0;

  // Подсчет активных ламп
  const activeLampsCount =
    room.lightFixtures?.reduce((total, fixture) => {
      if (loadState[fixture.id]) {
        return total + fixture.lampIds.length;
      }
      return total;
    }, 0) || 0;

  // Визуализация ламп (всех, а не только светильников)
  const renderLamps = () => {
    if (!room.lightFixtures) return null;

    return room.lightFixtures.flatMap((fixture) =>
      fixture.lampIds.map((lampId, index) => (
        <div
          key={`${fixture.id}-${lampId}`}
          className={`${styles.lamp} ${
            loadState[fixture.id] ? styles.lampOn : styles.lampOff
          }`}
          title={`Лампа ${index + 1} (${fixture.name})`}
        >
          💡
        </div>
      ))
    );
  };

  // Визуализация розеток (всех по отдельности)
  const renderOutlets = () => {
    if (!room.outletGroups) return null;

    return room.outletGroups.flatMap((outletGroup) =>
      Array(outletGroup.count)
        .fill(0)
        .map((_, index) => (
          <div
            key={`${outletGroup.id}-${index}`}
            className={`${styles.outlet} ${
              loadState[outletGroup.id] ? styles.outletOn : styles.outletOff
            }`}
            title={`Розетка ${index + 1} (${outletGroup.name || "группа"})`}
          >
            🔌
          </div>
        ))
    );
  };

  return (
    <div className={`${styles.roomCard} ${isAffected ? styles.affected : ""}`}>
      <div className={styles.header}>
        <span className={styles.icon}>{getRoomIcon()}</span>
        <div className={styles.title}>
          <h3 className={styles.name}>{room.name}</h3>
          <div className={styles.typeBadge}>{getRoomTypeLabel()}</div>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.area}>{room.area} м²</div>
        <div className={styles.deviceStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>
              {activeLampsCount}/{totalLampsCount}
            </span>
            <span className={styles.statLabel}>ламп</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>
              {deviceCounts.activeOutlets}/{deviceCounts.totalOutlets}
            </span>
            <span className={styles.statLabel}>розеток</span>
          </div>
        </div>
      </div>

      <div className={styles.devices}>
        <div className={styles.deviceGroup}>
          <div className={styles.deviceHeader}>
            <span className={styles.deviceLabel}>Лампы</span>
            <span className={styles.deviceCount}>
              ({activeLampsCount}/{totalLampsCount})
            </span>
          </div>
          <div className={styles.lampsContainer}>{renderLamps()}</div>
        </div>

        <div className={styles.deviceGroup}>
          <div className={styles.deviceHeader}>
            <span className={styles.deviceLabel}>Розетки</span>
            <span className={styles.deviceCount}>
              ({deviceCounts.activeOutlets}/{deviceCounts.totalOutlets})
            </span>
          </div>
          <div className={styles.outletsContainer}>{renderOutlets()}</div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
