import { fixtureTemplates } from "../../../fixture/fixtureTemplates";
import { ROOM_IDS_3_FLOOR, ELECTRICAL_POINT_IDS_3_FLOOR } from "./roomID";
import type {
  LightFixtureInstance,
  OutletInstance,
} from "../../../../types/electrical/points";
import { FIXTURE_KEYS } from "../../../../types";

export const electricalInstances3Floor: (
  | OutletInstance
  | LightFixtureInstance
)[] = [
  // ========== РОЗЕТКИ ==========

  // Экономист (302)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_302_1,
    roomId: ROOM_IDS_3_FLOOR.ECONOMIST,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_302_2,
    roomId: ROOM_IDS_3_FLOOR.ECONOMIST,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_302_3,
    roomId: ROOM_IDS_3_FLOOR.ECONOMIST,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },

  // Охрана труда (303)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_303_1,
    roomId: ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
    type: "outlet",
    count: 3,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_303_2,
    roomId: ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },

  // Бухгалтерия (304)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_304_1,
    roomId: ROOM_IDS_3_FLOOR.ACCOUNTING,
    type: "outlet",
    count: 4,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_304_2,
    roomId: ROOM_IDS_3_FLOOR.ACCOUNTING,
    type: "outlet",
    count: 3,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_304_3,
    roomId: ROOM_IDS_3_FLOOR.ACCOUNTING,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_304_4,
    roomId: ROOM_IDS_3_FLOOR.ACCOUNTING,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },

  // Учет МПЗ (305)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_305_1,
    roomId: ROOM_IDS_3_FLOOR.INVENTORY_ACCOUNTING,
    type: "outlet",
    count: 3,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_305_2,
    roomId: ROOM_IDS_3_FLOOR.INVENTORY_ACCOUNTING,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_305_3,
    roomId: ROOM_IDS_3_FLOOR.INVENTORY_ACCOUNTING,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  // Главный инженер (306)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_306_1,
    roomId: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_306_2,
    roomId: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_306_3,
    roomId: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },

  // Селекторная (310)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_310_1,
    roomId: ROOM_IDS_3_FLOOR.MEETING_ROOM,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_310_2,
    roomId: ROOM_IDS_3_FLOOR.MEETING_ROOM,
    type: "outlet",
    count: 1,
    estimatedLoad: 400,
  },
  // Ксерокс холл (311)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_311_1,
    roomId: ROOM_IDS_3_FLOOR.XEROX_HALL,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_311_2,
    roomId: ROOM_IDS_3_FLOOR.XEROX_HALL,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  // Программист (312)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_312_1,
    roomId: ROOM_IDS_3_FLOOR.PROGRAMMER,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_312_2,
    roomId: ROOM_IDS_3_FLOOR.PROGRAMMER,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },

  // Отдел кадров (313)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_313_1,
    roomId: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_313_2,
    roomId: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  // Директор (314)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_314_1,
    roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_314_2,
    roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_314_3,
    roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_314_4,
    roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
    type: "outlet",
    count: 1,
    estimatedLoad: 1000,
  },

  // Мужской туалет (315)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_315_1,
    roomId: ROOM_IDS_3_FLOOR.TOILET_MEN,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_315_2,
    roomId: ROOM_IDS_3_FLOOR.TOILET_MEN,
    type: "outlet",
    count: 1,
    estimatedLoad: 1000,
  },
  // Женский туалет (316)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_316_1,
    roomId: ROOM_IDS_3_FLOOR.TOILET_WOMEN,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.OUT_316_2,
    roomId: ROOM_IDS_3_FLOOR.TOILET_WOMEN,
    type: "outlet",
    count: 1,
    estimatedLoad: 1000,
  },

  // ========== СВЕТИЛЬНИКИ ==========

  // Коридор (301)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_1,
    roomId: ROOM_IDS_3_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_2,
    roomId: ROOM_IDS_3_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_3,
    roomId: ROOM_IDS_3_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_4,
    roomId: ROOM_IDS_3_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_5,
    roomId: ROOM_IDS_3_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_6,
    roomId: ROOM_IDS_3_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
  },

  // Экономист (302)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_302_1,
    roomId: ROOM_IDS_3_FLOOR.ECONOMIST,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_302_2,
    roomId: ROOM_IDS_3_FLOOR.ECONOMIST,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Охрана труда (303)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_303_1,
    roomId: ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_303_2,
    roomId: ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Бухгалтерия (304)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_304_1,
    roomId: ROOM_IDS_3_FLOOR.ACCOUNTING,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_304_2,
    roomId: ROOM_IDS_3_FLOOR.ACCOUNTING,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_304_3,
    roomId: ROOM_IDS_3_FLOOR.ACCOUNTING,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Учет МПЗ (305)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_305_1,
    roomId: ROOM_IDS_3_FLOOR.INVENTORY_ACCOUNTING,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_305_2,
    roomId: ROOM_IDS_3_FLOOR.INVENTORY_ACCOUNTING,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Главный инженер (306)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_306_1,
    roomId: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_306_2,
    roomId: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Приемная (307)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_307_1,
    roomId: ROOM_IDS_3_FLOOR.RECEPTION,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_307_2,
    roomId: ROOM_IDS_3_FLOOR.RECEPTION,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Главный бухгалтер (308)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_308_1,
    roomId: ROOM_IDS_3_FLOOR.CHIEF_ACCOUNTANT,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_308_2,
    roomId: ROOM_IDS_3_FLOOR.CHIEF_ACCOUNTANT,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Комната отдыха (309)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_309_1,
    roomId: ROOM_IDS_3_FLOOR.REST_ROOM,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_309_2,
    roomId: ROOM_IDS_3_FLOOR.REST_ROOM,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },

  // Селекторная (310)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_310_1,
    roomId: ROOM_IDS_3_FLOOR.MEETING_ROOM,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_310_2,
    roomId: ROOM_IDS_3_FLOOR.MEETING_ROOM,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_310_3,
    roomId: ROOM_IDS_3_FLOOR.MEETING_ROOM,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Ксерокс холл (311)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_311_1,
    roomId: ROOM_IDS_3_FLOOR.XEROX_HALL,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_311_2,
    roomId: ROOM_IDS_3_FLOOR.XEROX_HALL,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },

  // Программист (312)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_312_1,
    roomId: ROOM_IDS_3_FLOOR.PROGRAMMER,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_312_2,
    roomId: ROOM_IDS_3_FLOOR.PROGRAMMER,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Отдел кадров (313)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_313_1,
    roomId: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_313_2,
    roomId: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_313_3,
    roomId: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Директор (314)
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_314_1,
    roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_314_2,
    roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_3_FLOOR.FIX_314_3,
    roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
];
