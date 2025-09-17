import { fixtureTemplates } from "../../../fixture/fixture";
import { ROOM_IDS_1_FLOOR, ELECTRICAL_POINT_IDS_1_FLOOR } from "./roomID";
import type {
  LightFixtureInstance,
  OutletInstance,
} from "../../../../types/electrical/points";

export const electricalInstances: (OutletInstance | LightFixtureInstance)[] = [
  // ========== РОЗЕТКИ ==========

  // Холл Коридор  (101)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_1,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_2,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "outlet",
    count: 1,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_3,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_4,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },

  // Раздевалка  (105)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_105_1,
    roomId: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },
  // Помещение старшего смены (106)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_106_1,
    roomId: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },
  // Проходная  (108)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_108_1,
    roomId: ROOM_IDS_1_FLOOR.CHECKPOINT,
    type: "outlet",
    count: 5,
    estimatedLoad: 500,
  },
  // Кладовка (109)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_109_1,
    roomId: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
    type: "outlet",
    count: 5,
    estimatedLoad: 500,
  },

  // ========== СВЕТИЛЬНИКИ ==========
  // Холл Коридор  (101)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_1,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "light",
    template: fixtureTemplates.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_2,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "light",
    template: fixtureTemplates.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_3,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "light",
    template: fixtureTemplates.EMERGENCY_EXIT_SIGN,
  },

  // Лестница  (102)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_1,
    roomId: ROOM_IDS_1_FLOOR.STAIRS,
    type: "light",
    template: fixtureTemplates.WALL_SCONCE_2x7W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_2,
    roomId: ROOM_IDS_1_FLOOR.STAIRS,
    type: "light",
    template: fixtureTemplates.WALL_SCONCE_2x7W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_3,
    roomId: ROOM_IDS_1_FLOOR.STAIRS,
    type: "light",
    template: fixtureTemplates.EMERGENCY_EXIT_SIGN,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_4,
    roomId: ROOM_IDS_1_FLOOR.STAIRS,
    type: "light",
    template: fixtureTemplates.EMERGENCY_LUMINAIRE,
  },

  // Туалет  (103)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_103_1,
    roomId: ROOM_IDS_1_FLOOR.TOILET,
    type: "light",
    template: fixtureTemplates.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_103_2,
    roomId: ROOM_IDS_1_FLOOR.TOILET,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Умывальня  (104)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_104_1,
    roomId: ROOM_IDS_1_FLOOR.WASHROOM,
    type: "light",
    template: fixtureTemplates.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_104_2,
    roomId: ROOM_IDS_1_FLOOR.WASHROOM,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Раздевалка  (105)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_105_1,
    roomId: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },

  // Помещение старшего смены (106)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_106_1,
    roomId: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },

  // Проходная  (108)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_108_1,
    roomId: ROOM_IDS_1_FLOOR.CHECKPOINT,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_108_2,
    roomId: ROOM_IDS_1_FLOOR.CHECKPOINT,
    type: "light",
    template: fixtureTemplates.EMERGENCY_EXIT_SIGN,
  },

  // Кладовка (109)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_109_1,
    roomId: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // //Дежурное освещение (111)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_111_1,
    roomId: ROOM_IDS_1_FLOOR.EMERGENCY_LIGHTING,
    type: "light",
    template: fixtureTemplates.EMERGENCY_LUMINAIRE,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_111_2,
    roomId: ROOM_IDS_1_FLOOR.EMERGENCY_LIGHTING,
    type: "light",
    template: fixtureTemplates.EMERGENCY_LUMINAIRE,
  },
];
