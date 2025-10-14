import type { Room } from "../../../../types";
import { FIXTURE_KEYS } from "../../../../types/electrical/fixture";

export const ROOM_IDS_3_FLOOR = {
  CORRIDOR: "room-3-301", // Коридор
  ECONOMIST: "room-3-302", // Экономист
  OCCUPATIONAL_SAFETY: "room-3-303", // Охрана труда
  ACCOUNTING: "room-3-304", // Бухгалтерия
  CHIEF_ENGINEER: "room-3-306", // Главный инженер
  RECEPTION: "room-3-307", // Приемная
  PAYROLL: "room-3-308", // Бухгалтерия (расчет)
  MEETING_ROOM: "room-3-310", // Селекторная
  PROGRAMMER: "room-3-312", // Инженер Программист
  HR_DEPARTMENT: "room-3-313", // Специалист по кадрам
  DIRECTOR: "room-3-314", // Начальник
  TOILET_MEN: "room-3-315", // Мужской туалет
  TOILET_WOMEN: "room-3-316", // Женский туалет
  WORK_ECONOMIST: "room-3-317", // Экономист по труду
  MASS_WORK_SPECIALIST: "room-3-318", // Специалист по организационно массовой работе
  ACCOUNTING_CONTROL_GROUP_LEAD: "room-3-319", // Руководитель учетно-контрольной группы
} as const;

export const floor3Rooms: Room[] = [
  {
    id: ROOM_IDS_3_FLOOR.CORRIDOR,
    name: "Коридор",
    type: "corridor",
    area: 53,
    lighting: {
      count: 6,
      fixtureType: FIXTURE_KEYS.LINEAR_4x18W,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.ECONOMIST,
    name: "Экономист",
    type: "office",
    area: 10.5,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
    name: "Охрана труда",
    type: "office",
    area: 35,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.ACCOUNTING,
    name: "Бухгалтерия",
    type: "office",
    area: 47,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 11,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
    name: "Главный инженер",
    type: "office",
    area: 28,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 6,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.RECEPTION,
    name: "Приемная",
    type: "office",
    area: 17,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.PAYROLL,
    name: "Бухгалтерия (расчет)",
    type: "office",
    area: 11,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 4,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.MEETING_ROOM,
    name: "Селекторная",
    type: "conference",
    area: 11,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 3,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.PROGRAMMER,
    name: "Инженер Программист",
    type: "office",
    area: 20,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 4,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    name: "Специалист по кадрам",
    type: "office",
    area: 11,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 4,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.DIRECTOR,
    name: "Начальник",
    type: "office",
    area: 44,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 7,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.TOILET_MEN,
    name: "Мужской туалет",
    type: "bathroom",
    area: 7,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.TOILET_WOMEN,
    name: "Женский туалет",
    type: "bathroom",
    area: 7,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.WORK_ECONOMIST,
    name: "Экономист по труду",
    type: "office",
    area: 11,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 1,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.MASS_WORK_SPECIALIST,
    name: "Специалист по организационно массовой работе",
    type: "office",
    area: 9,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_3_FLOOR.ACCOUNTING_CONTROL_GROUP_LEAD,
    name: "Руководитель учетно-контрольной группы",
    type: "office",
    area: 23,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.INDUSTRIAL_4x58W,
    },
    outlets: {
      count: 1,
    },
  },
];
