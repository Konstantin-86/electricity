import type { LightFixtureInstance, OutletInstance, Room } from "../../types";
import { RoomCardHeader } from "./components/RoomCardHeader";
import { useRoomCard } from "./utils/useRoomCard";
import { RoomElectricalIcons } from "./components/RoomElectricalIcons";

import styles from "./RoomCard.module.css";
import LightFixturePopup from "./LightFixturePopup";

interface RoomCardProps {
  room: Room;
  points: (OutletInstance | LightFixtureInstance)[];
}

const RoomCard = ({ room, points }: RoomCardProps) => {
  const { data, ui, actions } = useRoomCard(room.id, points);

  return (
    <>
      <div className={styles.roomCard}>
        <RoomCardHeader
          room={room}
          breakers={data.breakers}
          onBreakerClick={actions.toggleBreaker}
        />

        <RoomElectricalIcons
          lights={data.lights}
          outlets={data.outlets}
          electricalState={data.electricalState}
          onLightClick={actions.openLightPopup}
        />

        {/*  {hasLights && (
          <IlluminationCalculator
            totalLumens={data.totalLumens}
            roomArea={room.area}
            roomType={room.type}
          />
        )} */}
      </div>

      {ui.selectedFixture && (
        <LightFixturePopup
          fixtureKey={ui.selectedFixture}
          isOpen={ui.isPopupOpen}
          onClose={actions.closePopup}
        />
      )}
    </>
  );
};

export default RoomCard;
