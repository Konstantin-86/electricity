// store/useBuildingStore.ts
import { create } from "zustand";
import { useBreakerStore } from "./useBreakerStore";
import type { Building, Floor } from "../types";

type VisualizationType =
  | "floorPlan"
  | "electricalPanel"
  | "electricalScheme"
  | "roomsList"
  | null;

interface BuildingState {
  selectedBuilding: Building | null;
  selectedFloor: Floor | null;
  activeVisualization: VisualizationType;

  setSelectedBuilding: (building: Building | null) => void;
  setSelectedFloor: (floor: Floor | null) => void;
  showVisualization: (type: VisualizationType) => void;
  hideVisualization: () => void;
  goBack: () => void;
}

export const useBuildingStore = create<BuildingState>((set) => ({
  selectedBuilding: null,
  selectedFloor: null,
  activeVisualization: null,

  setSelectedBuilding: (building) => {
    set({
      selectedBuilding: building,
      activeVisualization: null,
    });
    // Сбрасываем этаж при смене здания
    if (!building) {
      useBreakerStore.getState().setCurrentFloor(null as any);
    }
  },

  setSelectedFloor: (floor) => {
    set({
      selectedFloor: floor,
      activeVisualization: null,
    });
    // Синхронизируем с breakerStore только если этаж не null
    if (floor) {
      useBreakerStore.getState().setCurrentFloor(floor);
    } else {
      // Если передали null, сбрасываем состояние в breakerStore
      useBreakerStore.setState({
        currentFloor: null,
        panels: [],
        breakersState: {},
      });
    }
  },

  showVisualization: (type: VisualizationType) =>
    set({ activeVisualization: type }),

  hideVisualization: () => set({ activeVisualization: null }),

  goBack: () =>
    set((state) => {
      if (state.activeVisualization) {
        return { activeVisualization: null };
      }
      if (state.selectedFloor) {
        return {
          selectedFloor: null,
          activeVisualization: null,
        };
      }
      if (state.selectedBuilding) {
        return {
          selectedBuilding: null,
          selectedFloor: null,
          activeVisualization: null,
        };
      }
      return {};
    }),
}));
