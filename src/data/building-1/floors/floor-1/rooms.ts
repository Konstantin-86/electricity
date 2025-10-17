import type { Room } from "../../../../types";
import { FIXTURE_KEYS } from "../../../../types/electrical/fixture";

export const ROOM_IDS_1_FLOOR = {
  HALL_CORRIDOR: "room-1-101", // Холл Коридор  (101)
  STAIRS: "room-1-102", // Лестница  (102)
  TOILET: "room-1-103", // Туалет  (103)
  WASHROOM: "room-1-104", // Умывальня  (104)
  DRESSING_ROOM: "room-1-105", // Раздевалка  (105)
  SENIOR_ROOM: "room-1-106", // Помещение старшего смены (106)
  CHECKPOINT: "room-1-108", // Проходная (108)
  /*  STORAGE_SOCKETS: "room-1-109", // Кладовка (109) */
  VIP_DINING: "room-1-112", // Столовая VIP (112)
  FLOUR_WORKSHOP: "room-1-113", // Мучной цех (113)
  VEGETABLE_WORKSHOP: "room-1-114", // Овощной цех (114)
  HOT_WORKSHOP: "room-1-115", // Горячий цех (115)
  STAFF_ROOM: "room-1-116", // Комната для персонала (116)
  MEAT_WORKSHOP: "room-1-117", // Мясной цех (117)
  SHOWER: "room-1-118", // Душевая (118)
  DRY_PRODUCTS_STORAGE: "room-1-119", // Кладовая сухих продуктов (119)
  DINING_TOILET: "room-1-120", // Туалет столовая (120)
  REFRIGERATION: "room-1-121", // Холодильное отделение (121)
  HEAD_OFFICE: "room-1-122", // Кабинет заведующей (122)
  CLEANING_STORAGE: "room-1-123", // Кладовая уборочного инвентаря (123)
  DINING_CORRIDOR: "room-1-124", // Коридор столовая (124)
  DINING: "room-1-125", // Обеденный зал  (125)
  /* DINING_ROOM: "room-1-126", */ // Столовая зал  (126)
  BASEMENT: "room-1-127", // Подвал  (127)
} as const;

export const floor1Rooms: Room[] = [
  {
    id: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    name: "Холл Коридор",
    type: "corridor",
    area: 28,
    lighting: {
      count: 4,
      fixtureType: FIXTURE_KEYS.LINEAR_4x18W,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.STAIRS,
    name: "Лестница",
    type: "conference",
    area: 45,
    lighting: {
      count: 6,
      fixtureType: FIXTURE_KEYS.WALL_SCONCE_2x7W,
    },
    outlets: {
      count: 3,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.TOILET,
    name: "Туалет",
    type: "bathroom",
    area: 12,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.WATERPROOF_LUMINAIRE_1x20W,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.WASHROOM,
    name: "Умывальня",
    type: "bathroom",
    area: 18,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.WATERPROOF_LUMINAIRE_1x20W,
    },
    outlets: {
      count: 3,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
    name: "Раздевалка",
    type: "office",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 4,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
    name: "Помещение старшего смены",
    type: "office",
    area: 12,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.OFFICE_PANEL_2x36W,
    },
    outlets: {
      count: 4,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.CHECKPOINT,
    name: "Проходная",
    type: "corridor",
    area: 12,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.LINEAR_4x18W,
    },
    outlets: {
      count: 3,
    },
  },
  /*  {
    id: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
    name: "Розетки кладовка (прием пищи)",
    type: "other",
    area: 12,
    lighting: {
      count: 1,
      fixtureType: FIXTURE_KEYS.RECESSED_SPOT_10W,
    },
    outlets: {
      count: 6,
    },
  }, */
  {
    id: ROOM_IDS_1_FLOOR.VIP_DINING,
    name: "Столовая VIP",
    type: "kitchen",
    area: 35,
    lighting: {
      count: 4,
      fixtureType: FIXTURE_KEYS.PENDANT_LIGHT_3x18W,
    },
    outlets: {
      count: 8,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.FLOUR_WORKSHOP,
    name: "Мучной цех",
    type: "technical",
    area: 25,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.INDUSTRIAL_LUMINAIRE_2x58W,
    },
    outlets: {
      count: 6,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.VEGETABLE_WORKSHOP,
    name: "Овощной цех",
    type: "technical",
    area: 22,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.INDUSTRIAL_LUMINAIRE_2x58W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.HOT_WORKSHOP,
    name: "Горячий цех",
    type: "technical",
    area: 30,
    lighting: {
      count: 4,
      fixtureType: FIXTURE_KEYS.INDUSTRIAL_4x58W,
    },
    outlets: {
      count: 8,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.STAFF_ROOM,
    name: "Комната для персонала",
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
    id: ROOM_IDS_1_FLOOR.MEAT_WORKSHOP,
    name: "Мясной цех",
    type: "technical",
    area: 20,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.LOW_TEMP_LUMINAIRE_2x36W,
    },
    outlets: {
      count: 5,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.SHOWER,
    name: "Душевая",
    type: "bathroom",
    area: 10,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.WATERPROOF_LUMINAIRE_1x20W,
    },
    outlets: {
      count: 3,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.DRY_PRODUCTS_STORAGE,
    name: "Кладовая сухих продуктов",
    type: "storage",
    area: 18,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.FLUORESCENT_2x36W,
    },
    outlets: {
      count: 3,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.DINING_TOILET,
    name: "Туалет столовая",
    type: "bathroom",
    area: 8,
    lighting: {
      count: 1,
      fixtureType: FIXTURE_KEYS.WATERPROOF_LUMINAIRE_1x20W,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.REFRIGERATION,
    name: "Холодильное отделение",
    type: "storage",
    area: 20,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.LOW_TEMP_LUMINAIRE_2x36W,
    },
    outlets: {
      count: 4,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.HEAD_OFFICE,
    name: "Кабинет заведующей",
    type: "office",
    area: 16,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
    },
    outlets: {
      count: 6,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.CLEANING_STORAGE,
    name: "Кладовая уборочного инвентаря",
    type: "storage",
    area: 6,
    lighting: {
      count: 1,
      fixtureType: FIXTURE_KEYS.RECESSED_SPOT_10W,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.DINING_CORRIDOR,
    name: "Коридор столовая",
    type: "corridor",
    area: 15,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.LINEAR_4x18W,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.BASEMENT,
    name: "Подвал",
    type: "corridor",
    area: 15,
    lighting: {
      count: 2,
      fixtureType: FIXTURE_KEYS.EMERGENCY_LUMINAIRE,
    },
    outlets: {
      count: 2,
    },
  },
  {
    id: ROOM_IDS_1_FLOOR.DINING,
    name: "Обеденный зал",
    type: "kitchen",
    area: 15,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.PENDANT_LIGHT_3x18W,
    },
    outlets: {
      count: 5,
    },
  },
  /*   {
    id: ROOM_IDS_1_FLOOR.DINING_ROOM,
    name: "Столовая зал",
    type: "kitchen",
    area: 15,
    lighting: {
      count: 3,
      fixtureType: FIXTURE_KEYS.DECORATIVE_CHANDELIER_6x40W,
    },
    outlets: {
      count: 6,
    },
  }, */
];
