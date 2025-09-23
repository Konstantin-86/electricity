import { ROOM_IDS_1_FLOOR, ELECTRICAL_POINT_IDS_1_FLOOR } from "./roomID";
import type {
  LightFixtureInstance,
  OutletInstance,
} from "../../../../types/electrical/points";
import { FIXTURE_KEYS } from "../../../../types";

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

  // ========== НОВЫЕ РОЗЕТКИ ==========

  // Столовая VIP (112)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_112_1,
    roomId: ROOM_IDS_1_FLOOR.VIP_DINING,
    type: "outlet",
    count: 8,
    estimatedLoad: 2000,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_112_2,
    roomId: ROOM_IDS_1_FLOOR.VIP_DINING,
    type: "outlet",
    count: 4,
    estimatedLoad: 3000,
  },

  // Мучной цех (113)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_113_1,
    roomId: ROOM_IDS_1_FLOOR.FLOUR_WORKSHOP,
    type: "outlet",
    count: 6,
    estimatedLoad: 4000,
  },

  // Овощной цех (114)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_114_1,
    roomId: ROOM_IDS_1_FLOOR.VEGETABLE_WORKSHOP,
    type: "outlet",
    count: 5,
    estimatedLoad: 3500,
  },

  // Горячий цех (115)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_115_1,
    roomId: ROOM_IDS_1_FLOOR.HOT_WORKSHOP,
    type: "outlet",
    count: 8,
    estimatedLoad: 6000,
  },

  // Комната для персонала (116)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_116_1,
    roomId: ROOM_IDS_1_FLOOR.STAFF_ROOM,
    type: "outlet",
    count: 4,
    estimatedLoad: 1000,
  },

  // Мясной цех (117)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_117_1,
    roomId: ROOM_IDS_1_FLOOR.MEAT_WORKSHOP,
    type: "outlet",
    count: 6,
    estimatedLoad: 4500,
  },

  // Душевая (118)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_118_1,
    roomId: ROOM_IDS_1_FLOOR.SHOWER,
    type: "outlet",
    count: 2,
    estimatedLoad: 3000,
  },

  // Кладовая сухих продуктов (119)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_119_1,
    roomId: ROOM_IDS_1_FLOOR.DRY_PRODUCTS_STORAGE,
    type: "outlet",
    count: 3,
    estimatedLoad: 1500,
  },

  // Туалет столовая (120)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_120_1,
    roomId: ROOM_IDS_1_FLOOR.DINING_TOILET,
    type: "outlet",
    count: 1,
    estimatedLoad: 500,
  },

  // Холодильное отделение (121)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_121_1,
    roomId: ROOM_IDS_1_FLOOR.REFRIGERATION,
    type: "outlet",
    count: 6,
    estimatedLoad: 8000,
  },

  // Кабинет заведующей (122)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_122_1,
    roomId: ROOM_IDS_1_FLOOR.HEAD_OFFICE,
    type: "outlet",
    count: 6,
    estimatedLoad: 1500,
  },

  // Кладовая уборочного инвентаря (123)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_123_1,
    roomId: ROOM_IDS_1_FLOOR.CLEANING_STORAGE,
    type: "outlet",
    count: 2,
    estimatedLoad: 1000,
  },

  // Коридор столовая (124)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.OUT_124_1,
    roomId: ROOM_IDS_1_FLOOR.DINING_CORRIDOR,
    type: "outlet",
    count: 3,
    estimatedLoad: 900,
  },

  // ========== СВЕТИЛЬНИКИ ==========
  // Холл Коридор  (101)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_1,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W, // ← Используем ключ вместо объекта
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_2,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_3,
    roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
  },

  // Лестница  (102)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_1,
    roomId: ROOM_IDS_1_FLOOR.STAIRS,
    type: "light",
    template: FIXTURE_KEYS.WALL_SCONCE_2x7W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_2,
    roomId: ROOM_IDS_1_FLOOR.STAIRS,
    type: "light",
    template: FIXTURE_KEYS.WALL_SCONCE_2x7W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_3,
    roomId: ROOM_IDS_1_FLOOR.STAIRS,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_4,
    roomId: ROOM_IDS_1_FLOOR.STAIRS,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_LUMINAIRE,
  },

  // Туалет  (103)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_103_1,
    roomId: ROOM_IDS_1_FLOOR.TOILET,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_103_2,
    roomId: ROOM_IDS_1_FLOOR.TOILET,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Умывальня  (104)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_104_1,
    roomId: ROOM_IDS_1_FLOOR.WASHROOM,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_104_2,
    roomId: ROOM_IDS_1_FLOOR.WASHROOM,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Раздевалка  (105)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_105_1,
    roomId: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Помещение старшего смены (106)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_106_1,
    roomId: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Проходная  (108)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_108_1,
    roomId: ROOM_IDS_1_FLOOR.CHECKPOINT,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_108_2,
    roomId: ROOM_IDS_1_FLOOR.CHECKPOINT,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
  },

  // Кладовка (109)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_109_1,
    roomId: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Дежурное освещение (111)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_111_1,
    roomId: ROOM_IDS_1_FLOOR.EMERGENCY_LIGHTING,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_LUMINAIRE,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_111_2,
    roomId: ROOM_IDS_1_FLOOR.EMERGENCY_LIGHTING,
    type: "light",
    template: FIXTURE_KEYS.EMERGENCY_LUMINAIRE,
  },

  // Столовая VIP (112)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_112_1,
    roomId: ROOM_IDS_1_FLOOR.VIP_DINING,
    type: "light",
    template: FIXTURE_KEYS.DECORATIVE_CHANDELIER_6x40W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_112_2,
    roomId: ROOM_IDS_1_FLOOR.VIP_DINING,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },

  // Мучной цех (113) - нужно добавить недостающие ключи в FIXTURE_KEYS
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_113_1,
    roomId: ROOM_IDS_1_FLOOR.FLOUR_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W, // Используем существующий или добавляем новый
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_113_2,
    roomId: ROOM_IDS_1_FLOOR.FLOUR_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W,
  },

  // Овощной цех (114)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_114_1,
    roomId: ROOM_IDS_1_FLOOR.VEGETABLE_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_114_2,
    roomId: ROOM_IDS_1_FLOOR.VEGETABLE_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W,
  },

  // Горячий цех (115)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_115_1,
    roomId: ROOM_IDS_1_FLOOR.HOT_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_115_2,
    roomId: ROOM_IDS_1_FLOOR.HOT_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_115_3,
    roomId: ROOM_IDS_1_FLOOR.HOT_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W,
  },

  // Комната для персонала (116)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_116_1,
    roomId: ROOM_IDS_1_FLOOR.STAFF_ROOM,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Мясной цех (117)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_117_1,
    roomId: ROOM_IDS_1_FLOOR.MEAT_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_117_2,
    roomId: ROOM_IDS_1_FLOOR.MEAT_WORKSHOP,
    type: "light",
    template: FIXTURE_KEYS.INDUSTRIAL_4x58W,
  },

  // Душевая (118) - нужно добавить ключ для водонепроницаемого светильника
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_118_1,
    roomId: ROOM_IDS_1_FLOOR.SHOWER,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W, // Временно, пока не добавим WATERPROOF
  },

  // Кладовая сухих продуктов (119)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_119_1,
    roomId: ROOM_IDS_1_FLOOR.DRY_PRODUCTS_STORAGE,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Туалет столовая (120)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_120_1,
    roomId: ROOM_IDS_1_FLOOR.DINING_TOILET,
    type: "light",
    template: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
  },

  // Холодильное отделение (121) - нужно добавить ключ для низкотемпературного светильника
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_121_1,
    roomId: ROOM_IDS_1_FLOOR.REFRIGERATION,
    type: "light",
    template: FIXTURE_KEYS.FLUORESCENT_2x36W, // Временно
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_121_2,
    roomId: ROOM_IDS_1_FLOOR.REFRIGERATION,
    type: "light",
    template: FIXTURE_KEYS.FLUORESCENT_2x36W,
  },

  // Кабинет заведующей (122)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_122_1,
    roomId: ROOM_IDS_1_FLOOR.HEAD_OFFICE,
    type: "light",
    template: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
  },

  // Кладовая уборочного инвентаря (123)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_123_1,
    roomId: ROOM_IDS_1_FLOOR.CLEANING_STORAGE,
    type: "light",
    template: FIXTURE_KEYS.RECESSED_SPOT_10W,
  },

  // Коридор столовая (124)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_124_1,
    roomId: ROOM_IDS_1_FLOOR.DINING_CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_124_2,
    roomId: ROOM_IDS_1_FLOOR.DINING_CORRIDOR,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },

  // Столовая (125)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_125_1,
    roomId: ROOM_IDS_1_FLOOR.DINING,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_125_2,
    roomId: ROOM_IDS_1_FLOOR.DINING,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_125_3,
    roomId: ROOM_IDS_1_FLOOR.DINING,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_125_4,
    roomId: ROOM_IDS_1_FLOOR.DINING,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },

  // Столовая зал (126)
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_126_1,
    roomId: ROOM_IDS_1_FLOOR.DINING_ROOM,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
  {
    id: ELECTRICAL_POINT_IDS_1_FLOOR.FIX_126_2,
    roomId: ROOM_IDS_1_FLOOR.DINING_ROOM,
    type: "light",
    template: FIXTURE_KEYS.LINEAR_4x18W,
  },
];
