import { fixtureTemplates } from "../../../data/fixture/fixtureTemplates";
import type { Breaker, LightFixture, Panel, Room } from "../../../types";

export interface BreakerWithPanel extends Breaker {
  panelName: string;
  panelId?: string;
  fixtureInfo?: LightFixture;
}

export interface RoomInfo {
  room: Room | null;
  breakers: BreakerWithPanel[];
  lighting: {
    fixtureType?: string;
    fixtureInfo?: LightFixture;
    totalPower?: number;
    lampCount?: number;
  };
}

export const getRoomInfo = (
  roomID: string,
  rooms: Room[],
  panels: Panel[]
): RoomInfo => {
  const room = rooms.find((room) => room.id === roomID) || null;

  const fixtureType = room?.lighting?.fixtureType;
  const fixtureInfo: LightFixture | undefined = fixtureType
    ? fixtureTemplates[fixtureType as keyof typeof fixtureTemplates]
    : undefined;

  const lampCount = fixtureInfo?.lampIds?.length || 0;
  const totalPower = room?.lighting?.count
    ? room.lighting.count * lampCount
    : 0;

  const breakers: BreakerWithPanel[] = panels.flatMap((panel) =>
    panel.breakers
      .filter((breaker) => breaker.controlledRooms.includes(roomID))
      .map(
        (breaker) =>
          ({
            ...breaker,
            panelName: panel.name,
            panelId: panel.id,
            fixtureInfo: fixtureInfo,
          } as BreakerWithPanel)
      )
  );

  return {
    room,
    breakers,
    lighting: {
      fixtureType,
      fixtureInfo,
      totalPower,
      lampCount,
    },
  };
};
