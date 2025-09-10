import { create } from "zustand";
import type { Floor, Panel } from "../types";

interface RoomElectricalState {
  lights: {
    id: string;
    isPowered: boolean;
    breakerId?: string;
    panelId?: string;
  }[];
  outlets: {
    id: string;
    isPowered: boolean;
    breakerId?: string;
    panelId?: string;
  }[];
}

interface BreakerState {
  breakersState: Record<string, boolean>;
  currentFloor: Floor | null;
  panels: Panel[];

  toggleBreaker: (breakerId: string) => void;
  setCurrentFloor: (floor: Floor) => void;
  getRoomElectricalState: (roomId: string) => RoomElectricalState;
}

export const useBreakerStore = create<BreakerState>((set, get) => ({
  breakersState: {},
  currentFloor: null,
  panels: [],

  toggleBreaker: (breakerId: string) =>
    set({
      breakersState: {
        ...get().breakersState,
        [breakerId]: !get().breakersState[breakerId],
      },
    }),

  setCurrentFloor: (floor: Floor) => {
    const initialState: Record<string, boolean> = {};

    floor.panels.forEach((panel) => {
      panel.breakers.forEach((breaker) => {
        initialState[breaker.id] = breaker.isOn;
      });
    });

    set({
      currentFloor: floor,
      panels: floor.panels,
      breakersState: initialState,
    });
  },

  getRoomElectricalState: (roomId: string) => {
    const { panels, breakersState } = get();

    const lights: RoomElectricalState["lights"] = [];
    const outlets: RoomElectricalState["outlets"] = [];

    panels.forEach((panel) => {
      panel.breakers.forEach((breaker) => {
        const breakerIsOn = breakersState[breaker.id] ?? breaker.isOn;

        // Проверяем все controlledLoads этого автомата
        breaker.controlledLoads?.forEach((load) => {
          // Если нагрузка относится к нужной комнате
          if (load.roomId === roomId) {
            // Обрабатываем светильники
            load.lightFixtureIds?.forEach((lightId) => {
              lights.push({
                id: lightId,
                isPowered: breakerIsOn,
                breakerId: breaker.id,
                panelId: panel.id,
              });
            });

            // Обрабатываем розетки
            load.outletGroupIds?.forEach((outletId) => {
              outlets.push({
                id: outletId,
                isPowered: breakerIsOn,
                breakerId: breaker.id,
                panelId: panel.id,
              });
            });
          }
        });
      });
    });

    return { lights, outlets };
  },
}));
