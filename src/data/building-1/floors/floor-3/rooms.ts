import type { Room } from "../../../../types";
import { ROOM_IDS_3_FLOOR } from "./roomID";

export const floor3Rooms: Room[] = [
  {
    id: ROOM_IDS_3_FLOOR.CORRIDOR,
    name: "Коридор",
    type: "corridor",
    area: 53,
  },
  {
    id: ROOM_IDS_3_FLOOR.ECONOMIST,
    name: "Экономист",
    type: "office",
    area: 10.5,
  },
  {
    id: ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
    name: "Охрана труда",
    type: "office",
    area: 35,
  },
  {
    id: ROOM_IDS_3_FLOOR.ACCOUNTING,
    name: "Бухгалтерия",
    type: "office",
    area: 47,
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
    area: 28,
  },
  {
    id: ROOM_IDS_3_FLOOR.RECEPTION,
    name: "Приемная",
    type: "office",
    area: 17,
  },
  {
    id: ROOM_IDS_3_FLOOR.CHIEF_ACCOUNTANT,
    name: "Главный бухгалтер",
    type: "office",
    area: 11,
  },
  {
    id: ROOM_IDS_3_FLOOR.REST_ROOM,
    name: "Комната отдыха",
    type: "other",
    area: 16,
  },
  {
    id: ROOM_IDS_3_FLOOR.MEETING_ROOM,
    name: "Селекторная",
    type: "conference",
    area: 11,
  },
  {
    id: ROOM_IDS_3_FLOOR.XEROX_HALL,
    name: "Ксерокс холл",
    type: "corridor",
    area: 8,
  },
  {
    id: ROOM_IDS_3_FLOOR.PROGRAMMER,
    name: "Инженер Программист",
    type: "office",
    area: 20,
  },
  {
    id: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    name: "Специалист по кадрам",
    type: "office",
    area: 11,
  },
  {
    id: ROOM_IDS_3_FLOOR.DIRECTOR,
    name: "Директор",
    type: "office",
    area: 44,
  },
  {
    id: ROOM_IDS_3_FLOOR.TOILET_MEN,
    name: "Мужской туалет",
    type: "bathroom",
    area: 7,
  },
  {
    id: ROOM_IDS_3_FLOOR.TOILET_WOMEN,
    name: "Женский туалет",
    type: "bathroom",
    area: 7,
  },
  {
    id: ROOM_IDS_3_FLOOR.WORK_ECONOMIST,
    name: "Экономист по труду",
    type: "office",
    area: 11,
  },
  {
    id: ROOM_IDS_3_FLOOR.MASS_WORK_SPECIALIST,
    name: "Специалист по организационно массовой работе",
    type: "office",
    area: 9,
  },
  {
    id: ROOM_IDS_3_FLOOR.ACCOUNTING_CONTROL_GROUP_LEAD,
    name: "Руководитель учетно-контрольной группы",
    type: "office",
    area: 23,
  },
];
