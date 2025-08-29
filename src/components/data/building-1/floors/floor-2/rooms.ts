import type { Room } from "../../../../../types";

// Все комнаты первого этажа в одном файле
export const floor2Rooms: Room[] = [
  {
    id: "room-2-202",
    name: "Рецепция",
    type: "office",
    area: 25,
    outlets: 6,
    lights: 20,
  },
  {
    id: "room-2-202",
    name: "Холл",
    type: "corridor",
    area: 40,
    outlets: 2,
    lights: 8,
  },
  {
    id: "room-2-203",
    name: "Офис 202",
    type: "office",
    area: 25,
    outlets: 4,
    lights: 3,
  },
  {
    id: "room-2-204",
    name: "Переговорная",
    type: "conference",
    area: 30,
    outlets: 20,
    lights: 6,
  },
];
