import { useState } from "react";
import { getRoomInfo } from "./helpers/roomInfo";
import RoomInfoPanel from "../RoomInfoPanel/RoomInfoPanel";
import ElectricalPanel from "../ElectricalPanel/ElectricalPanel";
import ElectricalScheme from "../ElectricalScheme/ElectricalScheme";

import type { Panel, Room } from "../../types";

import styles from "./FloorPlan.module.css";

interface FloorPlanProps {
  rooms: Room[];
  panels: Panel[];
  backButton: () => void;
}

const FloorPlan = ({ rooms, panels, backButton }: FloorPlanProps) => {
  const [selectedRoomInfo, setSelectedRoomInfo] = useState<ReturnType<
    typeof getRoomInfo
  > | null>(null);
  const [showElectricalPanels, setShowElectricalPanels] = useState(false);
  const [showElectricalScheme, setShowElectricalScheme] = useState(false);

  const handleRoomClick = (roomID: string) => {
    const roomInfo = getRoomInfo(roomID, rooms, panels);
    setSelectedRoomInfo(roomInfo);
  };

  const handleCloseRoomInfo = () => {
    setSelectedRoomInfo(null);
  };

  const handleShowElectricalPanels = () => {
    setShowElectricalPanels(true);
  };

  const handleCloseElectricalPanels = () => {
    setShowElectricalPanels(false);
  };

  const handleShowElectricalScheme = () => {
    setShowElectricalScheme(true);
  };

  const handleCloseElectricalScheme = () => {
    setShowElectricalScheme(false);
  };

  return (
    <div className={styles.floorPlan}>
      <div className={styles.topNav}>
        <button onClick={backButton}>назад</button>
        <button onClick={handleShowElectricalPanels}>Щиты</button>
        <button onClick={handleShowElectricalScheme}>Схема</button>
      </div>

      <div className={styles.roomsContainerWrapper}>
        <div className={styles.roomsContainer}>
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`${styles.room} ${styles[room.type]}`}
              onClick={() => handleRoomClick(room.id)}
              data-room-id={room.id}
            >
              <div className={styles.roomContent}>
                <h4 className={styles.roomName}>{room.name}</h4>
                <span className={styles.roomArea}>{room.area} м²</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRoomInfo && (
        <RoomInfoPanel
          roomInfo={selectedRoomInfo}
          onClose={handleCloseRoomInfo}
        />
      )}

      {showElectricalPanels && (
        <ElectricalPanel
          panels={panels}
          onClose={handleCloseElectricalPanels}
        />
      )}

      {showElectricalScheme && (
        <ElectricalScheme
          panels={panels}
          onClose={handleCloseElectricalScheme}
        />
      )}
    </div>
  );
};

export default FloorPlan;
