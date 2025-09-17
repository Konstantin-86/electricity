import type { Room } from "../../../../types";
import { ROOM_IDS_3_FLOOR } from "./roomID";

export const floor3Rooms: Room[] = [
  {
    id: ROOM_IDS_3_FLOOR.CORRIDOR,
    name: "Коридор",
    type: "corridor",
    area: 35,
  },
  {
    id: ROOM_IDS_3_FLOOR.ECONOMIST,
    name: "Экономист",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
    name: "Охрана труда",
    type: "office",
    area: 16,
  },
  {
    id: ROOM_IDS_3_FLOOR.ACCOUNTING,
    name: "Бухгалтерия",
    type: "office",
    area: 25,
  },
  {
    id: ROOM_IDS_3_FLOOR.INVENTORY_ACCOUNTING,
    name: "Учет МПЗ",
    type: "office",
    area: 20,
  },
  {
    id: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
    name: "Главный инженер",
    type: "office",
    area: 22,
  },
  {
    id: ROOM_IDS_3_FLOOR.RECEPTION,
    name: "Приемная",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_3_FLOOR.CHIEF_ACCOUNTANT,
    name: "Главный бухгалтер",
    type: "office",
    area: 20,
  },
  {
    id: ROOM_IDS_3_FLOOR.REST_ROOM,
    name: "Комната отдыха",
    type: "other",
    area: 12,
  },
  {
    id: ROOM_IDS_3_FLOOR.MEETING_ROOM,
    name: "Селекторная",
    type: "conference",
    area: 30,
  },
  {
    id: ROOM_IDS_3_FLOOR.XEROX_HALL,
    name: "Ксерокс холл",
    type: "corridor",
    area: 8,
  },
  {
    id: ROOM_IDS_3_FLOOR.PROGRAMMER,
    name: "Программист",
    type: "office",
    area: 16,
  },
  {
    id: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    name: "Отдел кадров",
    type: "office",
    area: 24,
  },
  {
    id: ROOM_IDS_3_FLOOR.DIRECTOR,
    name: "Директор",
    type: "office",
    area: 28,
  },
];
