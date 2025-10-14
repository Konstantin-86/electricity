import { create } from "zustand";
import type { Room, Breaker, Panel } from "../types";

interface FloorDataState {
  // Данные текущего этажа
  currentRooms: Room[];
  currentPanels: Panel[];
  currentBreakers: Breaker[]; // Все автоматы этажа для удобства

  // Установка данных этажа
  setFloorData: (rooms: Room[], panels: Panel[]) => void;

  // Вспомогательные методы
  getRoomById: (roomId: string) => Room | undefined;
  getBreakersForRoom: (roomId: string) => Breaker[];
  getPanelById: (panelId: string) => Panel | undefined;
}

export const useFloorDataStore = create<FloorDataState>((set, get) => ({
  currentRooms: [],
  currentPanels: [],
  currentBreakers: [],

  setFloorData: (rooms, panels) => {
    const allBreakers = panels.flatMap((panel) => panel.breakers);
    set({
      currentRooms: rooms,
      currentPanels: panels,
      currentBreakers: allBreakers,
    });
  },

  getRoomById: (roomId) => {
    const { currentRooms } = get();
    return currentRooms.find((room) => room.id === roomId);
  },

  getBreakersForRoom: (roomId) => {
    const { currentBreakers } = get();
    return currentBreakers.filter((breaker) =>
      breaker.controlledRooms.includes(roomId)
    );
  },

  getPanelById: (panelId) => {
    const { currentPanels } = get();
    return currentPanels.find((panel) => panel.id === panelId);
  },
}));
