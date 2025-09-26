import { ROOM_IDS_2_FLOOR, ELECTRICAL_POINT_IDS_2_FLOOR } from "./roomID";
import type {
  LightFixtureInstance,
  OutletInstance,
} from "../../../../types/electrical/points";
import { FIXTURE_KEYS } from "../../../../types";

export const electricalInstances2Floor: (
  | OutletInstance
  | LightFixtureInstance
)[] = [
  // ========== РОЗЕТКИ ==========

  // Бухгалтерия по учету МПЗ (204)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_BUH_MPZ,
    type: "outlet",
    count: 4,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_BUH_MPZ,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  // АВУ3 (206)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_206_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU3,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_206_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU3,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },

  // Техник АТХ, техник АВР (207)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_1,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_2,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  // Программист (208)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_PROGRAMMIST,
    type: "outlet",
    count: 1,
    estimatedLoad: 400,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_PROGRAMMIST,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_3,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_PROGRAMMIST,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },

  // Архив (211)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ARKHIV,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ARKHIV,
    type: "outlet",
    count: 4,
    estimatedLoad: 200,
  },

  // АВУ2 (205)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_205_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU2,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_205_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU2,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },

  // УООП (питание) (202)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_202_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP_CHIEF,
    type: "outlet",
    count: 5,
    estimatedLoad: 1000,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_202_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP_CHIEF,
    type: "outlet",
    count: 3,
    estimatedLoad: 600,
  },

  // TOILET_WOMEN (212)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_212_1,
    roomId: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    type: "outlet",
    count: 4,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_212_2,
    roomId: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  // Пто инженеры (214_1)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_214_1_1,
    roomId: ROOM_IDS_2_FLOOR.PTO_ENGENEERS,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_214_1_2,
    roomId: ROOM_IDS_2_FLOOR.PTO_ENGENEERS,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },

  //  Участок АВУ1 (215)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_215_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_215_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },

  // УООП (216)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_216_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP,
    type: "outlet",
    count: 1,
    estimatedLoad: 600,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_216_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP,
    type: "outlet",
    count: 1,
    estimatedLoad: 600,
  },
  // Инженер АВУ1 (217) //
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_217_1,
    roomId: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    type: "outlet",
    count: 1,
    estimatedLoad: 600,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_217_2,
    roomId: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    type: "outlet",
    count: 1,
    estimatedLoad: 600,
  },

  // ========== СВЕТИЛЬНИКИ ==========

  // Коридор (209)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_1,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_2,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_3,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_4,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_5,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_6,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
  },

  // Лестница столовая (222)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_222_1,
    roomId: ROOM_IDS_2_FLOOR.STAIRS_PANTRY,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_222_2,
    roomId: ROOM_IDS_2_FLOOR.STAIRS_PANTRY,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Бухгалтерия по учету МПЗ (204)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_204_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_BUH_MPZ,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_204_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_BUH_MPZ,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // АВУ2 (205)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_205_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU2,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_205_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU2,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // АВУ3 (206)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU3,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU3,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_3,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU3,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },

  // Техник АТХ, техник АВР (207)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_1,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_2,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Программист (208)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_PROGRAMMIST,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_PROGRAMMIST,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // УООП (питание) (202)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_202_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP_CHIEF,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_202_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP_CHIEF,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Мужской туалет (211)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_1,
    roomId: ROOM_IDS_2_FLOOR.TOILET_MEN,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_2,
    roomId: ROOM_IDS_2_FLOOR.TOILET_MEN,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Женский туалет (212)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_212_1,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_212_2,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // УООП (216)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_216_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_216_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Инженер АВУ1 (217)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_217_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1_ENGINEER,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_217_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1_ENGINEER,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Начальник ПТО, коридор ПТО (214)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_1,
    roomId: ROOM_IDS_2_FLOOR.CHIEF_PTO,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_2,
    roomId: ROOM_IDS_2_FLOOR.CHIEF_PTO,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_3,
    roomId: ROOM_IDS_2_FLOOR.CHIEF_PTO,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_4,
    roomId: ROOM_IDS_2_FLOOR.CHIEF_PTO,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },
  // Пто инженеры (214_1)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_1_1,
    roomId: ROOM_IDS_2_FLOOR.PTO_ENGENEERS,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_1_2,
    roomId: ROOM_IDS_2_FLOOR.PTO_ENGENEERS,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },
  //  Участок АВУ1 (215)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_215_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_215_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },
];
