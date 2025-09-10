import { fixtureTemplates } from "../../../fixture/fixture";
import { ROOM_IDS_1_FLOOR, ELECTRICAL_POINT_IDS_1_FLOOR } from "./roomID";
import type {
  LightFixtureInstance,
  OutletInstance,
} from "../../../../types/electrical/points";

export const electricalInstances: (OutletInstance | LightFixtureInstance)[] = [
  // ========== РОЗЕТКИ ==========
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_1,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "outlet",
    count: 4,
    estimatedLoad: 300,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_105_1,
    roomId: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_106_1,
    roomId: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
    type: "outlet",
    count: 2,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_107_1,
    roomId: ROOM_IDS_1_FLOOR.HALL_SOCKETS,
    type: "outlet",
    count: 5,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_108_1,
    roomId: ROOM_IDS_1_FLOOR.CHECKPOINT,
    type: "outlet",
    count: 5,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_109_1,
    roomId: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
    type: "outlet",
    count: 5,
    estimatedLoad: 500,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_110_1,
    roomId: ROOM_IDS_1_FLOOR.HALL_SOCKET,
    type: "outlet",
    count: 2,
    estimatedLoad: 300,
  },

  // ========== СВЕТИЛЬНИКИ ==========
  // Комната 101 - Холл Коридор
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

  // Комната 102 - Лестница
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

  // Комната 103 - Туалет
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

  // Комната 104 - Умывальня
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
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_104_3,
    roomId: ROOM_IDS_1_FLOOR.WASHROOM,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Комната 105 - Раздевалка
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_105_1,
    roomId: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },

  // Комната 106 - Помещение старшего смены
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_106_1,
    roomId: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
    type: "light",
    template: fixtureTemplates.OFFICE_PANEL_2x36W,
  },

  // Комната 107 - Холл розетки
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_107_1,
    roomId: ROOM_IDS_1_FLOOR.HALL_SOCKETS,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_107_2,
    roomId: ROOM_IDS_1_FLOOR.HALL_SOCKETS,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Комната 108 - Проходная
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

  // Комната 109 - Розетки кладовка
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_109_1,
    roomId: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Комната 110 - Холл розетка
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_110_1,
    roomId: ROOM_IDS_1_FLOOR.HALL_SOCKET,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_110_2,
    roomId: ROOM_IDS_1_FLOOR.HALL_SOCKET,
    type: "light",
    template: fixtureTemplates.RECESSED_SPOT_10W,
  },

  // Комната 111 - Дежурное освещение
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
