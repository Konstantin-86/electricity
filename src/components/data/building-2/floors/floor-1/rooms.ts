import type { Room } from "../../../../../types";

// Все комнаты первого этажа в одном файле
export const floor1Rooms: Room[] = [
  {
    id: "room-1-101",
    name: "Рецепция",
    type: "office",
    area: 25,
    outlets: 6,
    lights: 20,
  },
  {
    id: "room-1-102",
    name: "Холл",
    type: "corridor",
    area: 40,
    outlets: 2,
    lights: 8,
  },
  {
    id: "room-1-103",
    name: "Офис 101",
    type: "office",
    area: 15,
    outlets: 4,
    lights: 3,
  },
  {
    id: "room-1-109",
    name: "Переговорная",
    type: "conference",
    area: 30,
    outlets: 10,
    lights: 6,
  },
];
