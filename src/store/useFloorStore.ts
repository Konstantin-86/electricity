import { create } from "zustand";

interface FloorState {
  selectedFloorId: string | null;
  setSelectedFloor: (floorId: string | null) => void;
}

export const useFloorStore = create<FloorState>((set) => ({
  selectedFloorId: null,
  setSelectedFloor: (floorId) => set({ selectedFloorId: floorId }),
}));
