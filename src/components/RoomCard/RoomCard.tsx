// components/RoomCard/RoomCard.tsx
import { useState } from "react";
import type {
  FixtureKey,
  LightFixtureInstance,
  OutletInstance,
  Room,
} from "../../types";
import { useRoomElectricalState } from "../RoomsList/hooks/useRoomElectricalState";
import { useBreakerStore } from "../../store/useBreakerStore";
import LightFixturePopup from "./LightFixturePopup";
import IlluminationCalculator from "./IlluminationCalculator/IlluminationCalculator";
import styles from "./RoomCard.module.css";
import { fixtureTemplates } from "../../data/fixture/fixtureTemplates";
import { lampTemplates } from "../../data/fixture/lampTemplates";

interface RoomCardProps {
  room: Room;
  points: (OutletInstance | LightFixtureInstance)[];
}

const RoomCard = ({ room, points }: RoomCardProps) => {
  const electricalState = useRoomElectricalState(room.id);
  const toggleBreaker = useBreakerStore((state) => state.toggleBreaker);

  // Состояние для попапа
  const [selectedFixture, setSelectedFixture] = useState<FixtureKey | null>(
    null
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBreakerClick = (breakerId: string) => {
    toggleBreaker(breakerId);
  };

  const handleLightClick = (fixtureKey: FixtureKey) => {
    setSelectedFixture(fixtureKey);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedFixture(null);
  };

  const breakers = new Map<
    string,
    { designation: string; isOn: boolean; panelName: string }
  >();

  electricalState.lights.forEach((light) => {
    if (light.breakerId && light.breakerDesignation) {
      breakers.set(light.breakerId, {
        designation: light.breakerDesignation,
        isOn: light.isPowered,
        panelName: light.panelName || "",
      });
    }
  });

  electricalState.outlets.forEach((outlet) => {
    if (outlet.breakerId && outlet.breakerDesignation) {
      breakers.set(outlet.breakerId, {
        designation: outlet.breakerDesignation,
        isOn: outlet.isPowered,
        panelName: outlet.panelName || "",
      });
    }
  });

  const lights = points.filter(
    (point): point is LightFixtureInstance => point.type === "light"
  );

  const outlets = points.filter(
    (point): point is OutletInstance => point.type === "outlet"
  );

  // Рассчитываем общий световой поток для помещения
  const calculateTotalIllumination = () => {
    let totalLumens = 0;

    lights.forEach((light) => {
      const fixture = fixtureTemplates[light.template];
      if (fixture) {
        const lamps = fixture.lampIds
          .map((lampId) => lampTemplates[lampId])
          .filter(Boolean);
        const fixtureLumens = lamps.reduce(
          (sum, lamp) => sum + (lamp.lumens || 0),
          0
        );
        totalLumens += fixtureLumens;
      }
    });

    return totalLumens;
  };

  const totalLumens = calculateTotalIllumination();

  return (
    <>
      <div className={styles.roomCard}>
        <div className={styles.header}>
          <div className={styles.roomTitle}>
            <h3>{room.name}</h3>
          </div>

          {/* Автоматы питания помещения */}
          {breakers.size > 0 && (
            <div className={styles.breakers}>
              {Array.from(breakers.values()).map((breaker, index) => (
                <div
                  key={index}
                  className={`${styles.breaker} ${
                    breaker.isOn ? styles.breakerOn : styles.breakerOff
                  }`}
                  onClick={() =>
                    handleBreakerClick(Array.from(breakers.keys())[index])
                  }
                  title={`${breaker.panelName} - ${breaker.designation} (${
                    breaker.isOn ? "ВКЛ" : "ВЫКЛ"
                  })`}
                >
                  {breaker.designation}
                  <span className={styles.panelName}>{breaker.panelName}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.icons}>
          {/* Иконки светильников */}
          {lights.map((light) => {
            const lightState = electricalState.lights.find(
              (l) => l.id === light.id
            );
            const isPowered = lightState?.isPowered ?? false;

            return (
              <div
                key={light.id}
                className={`${styles.icon} ${
                  isPowered ? styles.on : styles.off
                } ${styles.lightIcon}`}
                title={`${getFixtureName(
                  light.template
                )} (клик для информации)`}
                onClick={() => handleLightClick(light.template)}
              >
                💡
                {isPowered && <div className={styles.glowEffect}></div>}
              </div>
            );
          })}

          {/* Иконки розеток */}
          {outlets.map((outlet) => {
            const outletState = electricalState.outlets.find(
              (o) => o.id === outlet.id
            );
            const isPowered = outletState?.isPowered ?? false;

            return (
              <div key={outlet.id} className={styles.outletGroup}>
                {Array.from({ length: outlet.count }, (_, index) => (
                  <div
                    key={index}
                    className={`${styles.icon} ${
                      isPowered ? styles.on : styles.off
                    } ${styles.outletIcon}`}
                    title={`Розетка ${outlet.count}x`}
                  >
                    🔌
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        {/* Блок с освещенностью */}
        {lights.length > 0 && room.area > 0 && (
          <IlluminationCalculator
            totalLumens={totalLumens}
            roomArea={room.area}
            roomType={room.type}
          />
        )}
      </div>

      {/* Попап с информацией о светильнике */}
      {selectedFixture && (
        <LightFixturePopup
          fixtureKey={selectedFixture}
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

const getFixtureName = (fixtureKey: FixtureKey): string => {
  const fixture = fixtureTemplates[fixtureKey];
  return fixture ? fixture.name : fixtureKey;
};

export default RoomCard;
