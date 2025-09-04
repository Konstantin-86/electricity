// RoomCard.tsx (обновленная версия)
import React, { useState } from "react";
import type { IBreaker, Room, LightFixture } from "../../types";
import styles from "./RoomCard.module.css";
import FixtureModal from "./FixtureModal";

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
  breakers: IBreaker[];
}

const RoomCard: React.FC<RoomCardProps> = ({
  room,
  loadState,
  isAffected,
  deviceCounts,
  breakers,
}) => {
  const [selectedFixture, setSelectedFixture] = useState<LightFixture | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleFixtureClick = (fixture: LightFixture) => {
    setSelectedFixture(fixture);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFixture(null);
  };

  const totalLampsCount =
    room.lightFixtures?.reduce(
      (total, fixture) => total + fixture.lampIds.length,
      0
    ) || 0;

  const activeLampsCount =
    room.lightFixtures?.reduce((total, fixture) => {
      if (loadState[fixture.id]) {
        return total + fixture.lampIds.length;
      }
      return total;
    }, 0) || 0;

  const renderFixtures = () => {
    if (!room.lightFixtures) return null;

    return room.lightFixtures.map((fixture) => (
      <div
        key={fixture.id}
        className={`${styles.fixture} ${
          loadState[fixture.id] ? styles.fixtureOn : styles.fixtureOff
        }`}
        title={`${fixture.name} (${fixture.lampIds.length} ламп)`}
        onClick={() => handleFixtureClick(fixture)}
        style={{ cursor: "pointer" }}
      >
        <span className={styles.fixtureIcon}>💡</span>
        {fixture.lampIds.length > 1 && (
          <span className={styles.lampCount}>{fixture.lampIds.length}</span>
        )}
      </div>
    ));
  };

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
    <>
      <div
        className={`${styles.roomCard} ${isAffected ? styles.affected : ""}`}
      >
        <div className={styles.header}>
          <span className={styles.icon}>{getRoomIcon()}</span>
          <div className={styles.title}>
            <h3 className={styles.name}>{room.name}</h3>
            <div className={styles.typeBadge}>{getRoomTypeLabel()}</div>
          </div>
        </div>

        {breakers.length > 0 && (
          <div className={styles.breakersInfo}>
            <div className={styles.breakerList}>
              {breakers.map((breaker) => (
                <span
                  key={breaker.id}
                  className={`${styles.breakerTag} ${
                    breaker.isOn ? styles.breakerOn : styles.breakerOff
                  }`}
                  title={breaker.description}
                >
                  {breaker.designation}
                </span>
              ))}
            </div>
          </div>
        )}

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
            <div className={styles.fixturesContainer}>{renderFixtures()}</div>
          </div>

          <div className={styles.deviceGroup}>
            <div className={styles.outletsContainer}>{renderOutlets()}</div>
          </div>
        </div>
      </div>

      {selectedFixture && (
        <FixtureModal
          fixture={selectedFixture}
          isOpen={isModalOpen}
          onClose={closeModal}
          isActive={loadState[selectedFixture.id]}
        />
      )}
    </>
  );
};

export default RoomCard;
