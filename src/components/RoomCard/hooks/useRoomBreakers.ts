import { useMemo } from "react";
import { useRoomElectricalState } from "../../RoomsList/hooks/useRoomElectricalState";
import type { LightFixtureInstance, OutletInstance } from "../../../types";

// hooks/useRoomBreakers.ts
export const useRoomBreakers = (roomId: string) => {
  const electricalState = useRoomElectricalState(roomId);

  const breakers = useMemo(() => {
    const breakerMap = new Map();

    [...electricalState.lights, ...electricalState.outlets].forEach((item) => {
      if (item.breakerId && item.breakerDesignation) {
        breakerMap.set(item.breakerId, {
          designation: item.breakerDesignation,
          isOn: item.isPowered,
          panelName: item.panelName || "",
        });
      }
    });

    return breakerMap;
  }, [electricalState]);

  return breakers;
};

// hooks/useRoomElectricalPoints.ts
export const useRoomElectricalPoints = (
  points: (OutletInstance | LightFixtureInstance)[]
) => {
  const lights = useMemo(
    () =>
      points.filter(
        (point): point is LightFixtureInstance => point.type === "light"
      ),
    [points]
  );

  const outlets = useMemo(
    () =>
      points.filter(
        (point): point is OutletInstance => point.type === "outlet"
      ),
    [points]
  );

  return { lights, outlets };
};
