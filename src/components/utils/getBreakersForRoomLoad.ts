import type { IBreaker, Panel } from "../../types";

export const getBreakersForRoomLoad = (
  roomId: string,
  loadType: "lighting" | "sockets" | "all",
  panels: Panel[]
): IBreaker[] => {
  const breakers: IBreaker[] = [];

  panels.forEach((panel) => {
    panel.breakers.forEach((breaker) => {
      const roomLoad = breaker.controlledLoads?.find(
        (load) => load.roomId === roomId
      );

      if (roomLoad) {
        const hasLighting =
          roomLoad.lightFixtureIds && roomLoad.lightFixtureIds.length > 0;
        const hasSockets =
          roomLoad.outletGroupIds && roomLoad.outletGroupIds.length > 0;

        const shouldInclude =
          loadType === "all" ||
          (loadType === "lighting" && hasLighting) ||
          (loadType === "sockets" && hasSockets);

        if (shouldInclude) {
          breakers.push(breaker);
        }
      }
    });
  });

  return breakers;
};
