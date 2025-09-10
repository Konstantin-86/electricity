import type { Room } from "../../../../types";
import { ROOM_IDS_1_FLOOR } from "./roomID";

export const floor1Rooms: Room[] = [
  {
    id: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    name: "Холл Коридор",
    type: "corridor",
    area: 28,
  },
  {
    id: ROOM_IDS_1_FLOOR.STAIRS,
    name: "Лестница",
    type: "conference",
    area: 45,
  },
  {
    id: ROOM_IDS_1_FLOOR.TOILET,
    name: "Туалет",
    type: "bathroom",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.WASHROOM,
    name: "Умывальня",
    type: "bathroom",
    area: 18,
  },
  {
    id: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
    name: "Раздевалка",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
    name: "Помещение старшего смены",
    type: "office",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.HALL_SOCKETS,
    name: "Холл розетки",
    type: "corridor",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.CHECKPOINT,
    name: "Проходная",
    type: "corridor",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
    name: "Розетки кладовка (прием пищи)",
    type: "other",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.HALL_SOCKET,
    name: "Холл розетка",
    type: "other",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.EMERGENCY_LIGHTING,
    name: "Дежурное освещение",
    type: "corridor",
    area: 12,
  },
];
