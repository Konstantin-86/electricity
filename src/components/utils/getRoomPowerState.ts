import type { Panel, Room } from "../../types";

interface PowerSection {
  hasPower: boolean;
  breakerIds: string[];
}

interface PowerDetails {
  lighting: PowerSection;
  sockets: PowerSection;
}

export const getRoomPowerState = (
  room: Room,
  breakersState: Record<string, boolean>,
  panels: Panel[]
): { hasPower: boolean; partialPower: boolean; powerDetails: PowerDetails } => {
  const powerDetails: PowerDetails = {
    lighting: { hasPower: false, breakerIds: [] },
    sockets: { hasPower: false, breakerIds: [] },
  };

  let hasLightingControl = false;
  let hasSocketsControl = false;

  // Анализируем все выключатели, которые управляют этой комнатой
  panels.forEach((panel) => {
    panel.breakers.forEach((breaker) => {
      const roomLoad = breaker.controlledLoads?.find(
        (load) => load.roomId === room.id
      );

      if (roomLoad) {
        const isBreakerOn = breakersState[breaker.id] === true;

        // Проверяем светильники
        if (roomLoad.lightFixtureIds && roomLoad.lightFixtureIds.length > 0) {
          hasLightingControl = true;
          powerDetails.lighting.hasPower ||= isBreakerOn;
          powerDetails.lighting.breakerIds.push(breaker.id);
        }

        // Проверяем розетки
        if (roomLoad.outletGroupIds && roomLoad.outletGroupIds.length > 0) {
          hasSocketsControl = true;
          powerDetails.sockets.hasPower ||= isBreakerOn;
          powerDetails.sockets.breakerIds.push(breaker.id);
        }
      }
    });
  });

  // Если комната не управляется выключателями - считаем её полностью включенной
  if (!hasLightingControl && !hasSocketsControl) {
    return {
      hasPower: true,
      partialPower: false,
      powerDetails: {
        lighting: { hasPower: true, breakerIds: [] },
        sockets: { hasPower: true, breakerIds: [] },
      },
    };
  }

  const hasPower =
    powerDetails.lighting.hasPower || powerDetails.sockets.hasPower;
  const partialPower =
    hasLightingControl &&
    hasSocketsControl &&
    !(powerDetails.lighting.hasPower && powerDetails.sockets.hasPower);

  return { hasPower, partialPower, powerDetails };
};
