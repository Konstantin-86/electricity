import type { Room } from "../../../../types";
import { FIXTURE_KEYS } from "../../../../types/electrical/fixture";

export const ROOM_IDS_2_FLOOR = {
  // Коридоры и зоны общего пользования
  CORRIDOR: "room-2-209", // Коридор
  STAIRS_PANTRY: "room-2-222", // Лестница столовая

  // Офисы руководителей (OFFICE_)
  OFFICE_AVR4_DEPUTY: "room-2-201", // Зам. начальника УАВР-4
  OFFICE_UOOP_CHIEF: "room-2-202", // УООП (начальник)
  OFFICE_ATX_HEAD: "room-2-203", // Автотранспортный участок
  OFFICE_BUH_MPZ: "room-2-204", // Бухгалтерия по учету МПЗ
  OFFICE_AVU2: "room-2-205", // АВУ2
  OFFICE_AVU3: "room-2-206", // АВУ3
  DEPT_ATX_TECH: "room-2-207", // Техник АТХ, техник АВР
  OFFICE_PROGRAMMIST: "room-2-208", // Программист
  VENTILYATSIYA: "room-2-208-1", // Вентиляция

  OFFICE_ARKHIV: "room-2-221", // Архив
  OFFICE_AVU1_HEAD: "room-2-219", // Начальник участка АВУ1
  OFFICE_AVU1_ENGINEER: "room-2-217", // Инженер АВУ1
  OFFICE_UOOP: "room-2-216", // УООП
  OFFICE_AVU1: "room-2-215", // Участок АВУ1
  CHIEF_PTO: "room-2-214", // Начальник ПТО, коридор ПТО (214)

  TOILET_WOMEN: "room-2-212", // Женский туалет
  TOILET_MEN: "room-2-211", // Мужской туалет
} as const;

export const floor2Rooms: Room[] = [
  {
    id: ROOM_IDS_2_FLOOR.CORRIDOR,
    name: "Коридор",
    type: "corridor",
    area: 35,
    lighting: {
      count: 4,
      fixtureType: FIXTURE_KEYS.LINEAR_4x18W,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.STAIRS_PANTRY,
    name: "Лестница столовая",
    type: "other",
    area: 10,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.WALL_SCONCE_2x7W,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
    name: "Зам. начальника УАВР-4",
    type: "office",
    area: 15,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 4,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_UOOP_CHIEF,
    name: "УООП (начальник)",
    type: "office",
    area: 25,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 6,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    name: "Автотранспортный участок",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_BUH_MPZ,
    name: "Бухгалтерия по учету МПЗ",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU2,
    name: "АВУ2",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU3,
    name: "АВУ3",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    name: "Техник АТХ, техник АВР",
    type: "office",
    area: 15,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 4,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_PROGRAMMIST,
    name: "Программист",
    type: "office",
    area: 15,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 6,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.VENTILYATSIYA,
    name: "Вентиляция",
    type: "office",
    area: 15,
    lighting: {
      count: 1,
      fixtureType: FIXTURE_KEYS.INDUSTRIAL_LUMINAIRE_2x58W,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_ARKHIV,
    name: "Архив",
    type: "office",
    area: 15,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 3,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU1_HEAD,
    name: "Начальник участка АВУ1",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU1_ENGINEER,
    name: "Инженер АВУ1",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_UOOP,
    name: "УООП",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
    name: "АВУ1",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.CHIEF_PTO,
    name: "Производственный отдел",
    type: "office",
    area: 45,
    lighting: {
      count: 4,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 10,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    name: "Женский туалет",
    type: "bathroom",
    area: 10,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.WATERPROOF_LUMINAIRE_1x20W,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_2_FLOOR.TOILET_MEN,
    name: "Мужской туалет",
    type: "bathroom",
    area: 10,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.WATERPROOF_LUMINAIRE_1x20W,
    },
    outlets: {
      count: 2,
    },
  },
];