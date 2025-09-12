import { fixtureTemplates } from "../../../fixture/fixture";
import { ROOM_IDS_2_FLOOR, ELECTRICAL_POINT_IDS_2_FLOOR } from "./roomID";
import type {
  LightFixtureInstance,
  OutletInstance,
} from "../../../../types/electrical/points";

export const electricalInstances2Floor: (
  | OutletInstance
  | LightFixtureInstance
)[] = [
  // ========== РОЗЕТКИ ==========

  // Коридор (201)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_201_1,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "outlet",
    count: 3,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_201_2,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_201_3,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "outlet",
    count: 1,
    estimatedLoad: 500,
  },

  // Начальник участка АТХ (204)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    type: "outlet",
    count: 4,
    estimatedLoad: 800,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_3,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    type: "outlet",
    count: 1,
    estimatedLoad: 1500,
  },
  // Начальник участка АВР (206)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR_HEAD,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },

  // Начальник участка ДиПНР (207)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_DIPNR_HEAD,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_DIPNR_HEAD,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  // Зам. начальника УАВР-4 (208)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_3,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
    type: "outlet",
    count: 1,
    estimatedLoad: 1000,
  },

  // ПТО (211)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_1,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "outlet",
    count: 6,
    estimatedLoad: 1200,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_2,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "outlet",
    count: 4,
    estimatedLoad: 800,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_3,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "outlet",
    count: 3,
    estimatedLoad: 600,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_4,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "outlet",
    count: 2,
    estimatedLoad: 2000,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_5,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "outlet",
    count: 1,
    estimatedLoad: 1000,
  },

  // Начальник участка ЭВС (205)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_205_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_EVS_HEAD,
    type: "outlet",
    count: 3,
    estimatedLoad: 600,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_205_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_EVS_HEAD,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },

  // Кабинет директора газторг (209)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_209_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
    type: "outlet",
    count: 5,
    estimatedLoad: 1000,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_209_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
    type: "outlet",
    count: 3,
    estimatedLoad: 600,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_209_3,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
    type: "outlet",
    count: 2,
    estimatedLoad: 2000,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_209_4,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
    type: "outlet",
    count: 1,
    estimatedLoad: 1500,
  },

  // Техник АТХ и ГОЧС (212)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_212_1,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "outlet",
    count: 4,
    estimatedLoad: 800,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_212_2,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "outlet",
    count: 2,
    estimatedLoad: 400,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.OUT_212_3,
    roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
    type: "outlet",
    count: 1,
    estimatedLoad: 1000,
  },

  // ========== СВЕТИЛЬНИКИ ==========

  // Коридор (201)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_1,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: fixtureTemplates.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_2,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: fixtureTemplates.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_3,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: fixtureTemplates.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_4,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: fixtureTemplates.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_5,
    roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
    type: "light",
    template: fixtureTemplates.EMERGENCY_EXIT_SIGN,
  },

  // Лестница (202)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_202_1,
    roomId: ROOM_IDS_2_FLOOR.STAIRS,
    type: "light",
    template: fixtureTemplates.WALL_SCONCE_2x7W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_202_2,
    roomId: ROOM_IDS_2_FLOOR.STAIRS,
    type: "light",
    template: fixtureTemplates.WALL_SCONCE_2x7W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_202_3,
    roomId: ROOM_IDS_2_FLOOR.STAIRS,
    type: "light",
    template: fixtureTemplates.EMERGENCY_LUMINAIRE,
  },

  // Лестница столовая (203)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_203_1,
    roomId: ROOM_IDS_2_FLOOR.STAIRS_PANTRY,
    type: "light",
    template: fixtureTemplates.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_203_2,
    roomId: ROOM_IDS_2_FLOOR.STAIRS_PANTRY,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Начальник участка АТХ (204)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_204_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_204_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },
  // Начальник участка АВР (206)

  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_3,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
    type: "light",
    template: fixtureTemplates.LED_PANEL_SINGLE_40W,
  },

  // Начальник участка ДиПНР (207)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_DIPNR_HEAD,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_DIPNR_HEAD,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },
  // Зам. начальника УАВР-4 (208)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // ПТО (211)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_1,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_2,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_3,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_4,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_5,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_6,
    roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
    type: "light",
    template: fixtureTemplates.EMERGENCY_EXIT_SIGN,
  },

  // Туалет (215)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_215_1,
    roomId: ROOM_IDS_2_FLOOR.TOILET,
    type: "light",
    template: fixtureTemplates.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_215_2,
    roomId: ROOM_IDS_2_FLOOR.TOILET,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Мужской туалет (216)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_216_1,
    roomId: ROOM_IDS_2_FLOOR.TOILET_MEN,
    type: "light",
    template: fixtureTemplates.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_216_2,
    roomId: ROOM_IDS_2_FLOOR.TOILET_MEN,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Женский туалет (217)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_217_1,
    roomId: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    type: "light",
    template: fixtureTemplates.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_217_2,
    roomId: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Кабинет директора газторг (209)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_3,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
    type: "light",
    template: fixtureTemplates.PENDANT_LIGHT_3x18W,
  },

  // Начальник участка ЭВС (205)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_205_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_EVS_HEAD,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_205_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_EVS_HEAD,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Начальник участка АВР (206)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_1,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR_HEAD,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_2,
    roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR_HEAD,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Подсобное помещение (213)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_213_1,
    roomId: ROOM_IDS_2_FLOOR.UTILITY_STORAGE,
    type: "light",
    template: fixtureTemplates.LED_PANEL_SINGLE_40W,
  },

  // Освещение программиста (214)
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_1,
    roomId: ROOM_IDS_2_FLOOR.UTILITY_PROGRAMMER_LIGHTING,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_2,
    roomId: ROOM_IDS_2_FLOOR.UTILITY_PROGRAMMER_LIGHTING,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },
];
