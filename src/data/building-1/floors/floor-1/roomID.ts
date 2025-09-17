export const ROOM_IDS_1_FLOOR = {
  HALL_CORRIDOR: "room-1-101",
  STAIRS: "room-1-102",
  TOILET: "room-1-103",
  WASHROOM: "room-1-104",
  DRESSING_ROOM: "room-1-105",
  SENIOR_ROOM: "room-1-106",
  CHECKPOINT: "room-1-108", // Проходная  (108)
  STORAGE_SOCKETS: "room-1-109", // Кладовка (109)
  EMERGENCY_LIGHTING: "room-1-111",
} as const;

export const ELECTRICAL_POINT_IDS_1_FLOOR = {
  // Розетки
  OUT_101_1: "out-101-1",
  OUT_101_2: "out-101-2",
  OUT_101_3: "out-101-3",
  OUT_101_4: "out-101-4",
  OUT_105_1: "out-105-1",
  OUT_106_1: "out-106-1",
  OUT_108_1: "out-108-1",
  OUT_109_1: "out-109-1",

  // Холл Коридор  (101)
  FIX_101_1: "fix-101-1",
  FIX_101_2: "fix-101-2",
  FIX_101_3: "fix-101-3",

  // Лестница  (102)
  FIX_102_1: "fix-102-1",
  FIX_102_2: "fix-102-2",
  FIX_102_3: "fix-102-3",
  FIX_102_4: "fix-102-4",

  // Туалет  (103)
  FIX_103_1: "fix-103-1",
  FIX_103_2: "fix-103-2",

  // Умывальня  (104)
  FIX_104_1: "fix-104-1",
  FIX_104_2: "fix-104-2",
  FIX_104_3: "fix-104-3",

  // Светильники комнаты 105 (Раздевалка)
  FIX_105_1: "fix-105-1",

  // Помещение старшего смены (106)
  FIX_106_1: "fix-106-1",

  // Проходная  (108)
  FIX_108_1: "fix-108-1",
  FIX_108_2: "fix-108-2",

  // кладовка (109 )
  FIX_109_1: "fix-109-1",

  //Дежурное освещение   (111)
  FIX_111_1: "fix-111-1",
  FIX_111_2: "fix-111-2",
} as const;

export type ElectricalPointId =
  (typeof ELECTRICAL_POINT_IDS_1_FLOOR)[keyof typeof ELECTRICAL_POINT_IDS_1_FLOOR];

export type RoomId = (typeof ROOM_IDS_1_FLOOR)[keyof typeof ROOM_IDS_1_FLOOR];
