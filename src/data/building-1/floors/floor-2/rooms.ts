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
    id: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    name: "Начальник участка АТХ",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_EVS_HEAD,
    name: "Начальник участка ЭВС",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVR_HEAD,
    name: "Начальник участка АВР",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_DIPNR_HEAD,
    name: "Начальник участка ДиПНР",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
    name: "Зам. начальника УАВР-4",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
    name: "Кабинет директора газторг",
    type: "office",
    area: 25,
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_MTS_HEAD,
    name: "Начальник участка МТС",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_2_FLOOR.DEPT_PTO,
    name: "Производственно-технический отдел",
    type: "office",
    area: 30,
  },
  {
    id: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    name: "Техник АТХ и ГОЧС",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_2_FLOOR.UTILITY_PROGRAMMER_LIGHTING,
    name: "Освещение программиста",
    type: "other",
    area: 10,
  },
  {
    id: ROOM_IDS_2_FLOOR.TOILET_MEN,
    name: "Мужской туалет",
    type: "bathroom",
    area: 10,
  },
  {
    id: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    name: "Женский туалет",
    type: "bathroom",
    area: 10,
  },
];
