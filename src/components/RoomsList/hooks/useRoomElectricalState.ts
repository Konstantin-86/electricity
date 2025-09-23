import { useMemo } from "react";
import { useBreakerStore } from "../../../store/useBreakerStore";
import type { Panel } from "../../../types";

// hooks/useRoomElectricalState.ts
export const useRoomElectricalState = (roomId: string) => {
  const panels = useBreakerStore((state) => state.panels);
  const breakersState = useBreakerStore((state) => state.breakersState);

  return useMemo(() => {
    const lights: {
      id: string;
      isPowered: boolean;
      breakerId?: string;
      breakerDesignation?: string;
      panelName?: string;
    }[] = [];

    const outlets: {
      id: string;
      isPowered: boolean;
      breakerId?: string;
      breakerDesignation?: string;
      panelName?: string;
    }[] = [];

    panels.forEach((panel: Panel) => {
      panel.breakers.forEach((breaker) => {
        const breakerIsOn = breakersState[breaker.id] ?? breaker.isOn;

        breaker.controlledLoads?.forEach((load) => {
          if (load.roomId === roomId) {
            load.lightFixtureIds?.forEach((lightId) => {
              lights.push({
                id: lightId,
                isPowered: breakerIsOn,
                breakerId: breaker.id,
                breakerDesignation: breaker.designation,
                panelName: panel.name,
              });
            });

            load.outletGroupIds?.forEach((outletId) => {
              outlets.push({
                id: outletId,
                isPowered: breakerIsOn,
                breakerId: breaker.id,
                breakerDesignation: breaker.designation,
                panelName: panel.name,
              });
            });
          }
        });
      });
    });

    return { lights, outlets };
  }, [panels, breakersState, roomId]);
};
