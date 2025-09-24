import type { Room } from "../../../types";
import { getRoomTypeInfo } from "../utils/roomUtils";

import styles from "../styles/RoomCardHeader.module.css";

interface BreakerInfo {
  designation: string;
  isOn: boolean;
  panelName: string;
}

interface RoomCardHeaderProps {
  room: Room;
  breakers: Map<string, BreakerInfo>;
  onBreakerClick: (breakerId: string) => void;
}

export const RoomCardHeader = ({
  room,
  breakers,
  onBreakerClick,
}: RoomCardHeaderProps) => {
  const roomTypeInfo = getRoomTypeInfo(room.type);

  return (
    <div className={styles.header}>
      <div className={styles.roomTitle}>
        <h3 className={styles.title}>
          <span className={styles.roomTypeIcon}>{roomTypeInfo.icon}</span>
          {room.name}
        </h3>
      </div>

      {breakers.size > 0 && (
        <div className={styles.breakers}>
          {Array.from(breakers.entries()).map(([breakerId, breaker]) => (
            <div
              key={breakerId}
              className={`${styles.breaker} ${
                breaker.isOn ? styles.breakerOn : styles.breakerOff
              }`}
              onClick={() => onBreakerClick(breakerId)}
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
  );
};
