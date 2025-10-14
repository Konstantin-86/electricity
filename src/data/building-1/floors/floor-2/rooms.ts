import type { Room } from "../../../../types";
import { ROOM_IDS_2_FLOOR } from "./roomID";

export const floor2Rooms: Room[] = [
  {
    id: ROOM_IDS_2_FLOOR.CORRIDOR,
    name: "Коридор",
    type: "corridor",
    area: 35,
  },
  {
    id: ROOM_IDS_2_FLOOR.STAIRS_PANTRY,
    name: "Лестница столовая",
    type: "other",
    area: 10,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
    name: "Зам. начальника УАВР-4",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_UOOP_CHIEF,
    name: "УООП (начальник)",
    type: "office",
    area: 25,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    name: "Автотранспортный участок",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_BUH_MPZ,
    name: "Бухгалтерия по учету МПЗ",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU2,
    name: "АВУ2",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU3,
    name: "АВУ3",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    name: "Техник АТХ, техник АВР",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_PROGRAMMIST,
    name: "Программист",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_2_FLOOR.VENTILYATSIYA,
    name: "Вентиляция",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_ARKHIV,
    name: "Архив",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU1_HEAD,
    name: "Начальник участка АВУ1",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU1_ENGINEER,
    name: "Инженер АВУ1",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_UOOP,
    name: "УООП",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
    name: "АВУ1",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.CHIEF_PTO,
    name: "Производственный отдел",
    type: "office",
    area: 45,
  },
  {
    id: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    name: "Женский туалет",
    type: "bathroom",
    area: 10,
  },
  {
    id: ROOM_IDS_2_FLOOR.TOILET_MEN,
    name: "Мужской туалет",
    type: "bathroom",
    area: 10,
  },
];
