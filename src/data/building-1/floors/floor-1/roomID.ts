export const ROOM_IDS_1_FLOOR = {
  HALL_CORRIDOR: "room-1-101",
  STAIRS: "room-1-102",
  TOILET: "room-1-103",
  WASHROOM: "room-1-104",
  DRESSING_ROOM: "room-1-105",
  SENIOR_ROOM: "room-1-106",
  HALL_SOCKETS: "room-1-107",
  CHECKPOINT: "room-1-108",
  STORAGE_SOCKETS: "room-1-109",
  HALL_SOCKET: "room-1-110",
  EMERGENCY_LIGHTING: "room-1-111",
} as const;

export const ELECTRICAL_POINT_IDS_1_FLOOR = {
  // Розетки
  OUT_101_1: "out-101-1",
  OUT_105_1: "out-105-1",
  OUT_106_1: "out-106-1",
  OUT_107_1: "out-107-1",
  OUT_108_1: "out-108-1",
  OUT_109_1: "out-109-1",
  OUT_110_1: "out-110-1",

  // Светильники комнаты 101 (Холл Коридор)
  FIX_101_1: "fix-101-1",
  FIX_101_2: "fix-101-2",
  FIX_101_3: "fix-101-3",

  // Светильники комнаты 102 (Лестница)
  FIX_102_1: "fix-102-1",
  FIX_102_2: "fix-102-2",
  FIX_102_3: "fix-102-3",
  FIX_102_4: "fix-102-4",

  // Светильники комнаты 103 (Туалет)
  FIX_103_1: "fix-103-1",
  FIX_103_2: "fix-103-2",

  // Светильники комнаты 104 (Умывальня)
  FIX_104_1: "fix-104-1",
  FIX_104_2: "fix-104-2",
  FIX_104_3: "fix-104-3",

  // Светильники комнаты 105 (Раздевалка)
  FIX_105_1: "fix-105-1",

  // Светильники комнаты 106 (Помещение старшего смены)
  FIX_106_1: "fix-106-1",

  // Светильники комнаты 107 (Холл розетки)
  FIX_107_1: "fix-107-1",
  FIX_107_2: "fix-107-2",

  // Светильники комнаты 108 (Проходная)
  FIX_108_1: "fix-108-1",
  FIX_108_2: "fix-108-2",

  // Светильники комнаты 109 (Розетки кладовка)
  FIX_109_1: "fix-109-1",

  // Светильники комнаты 110 (Холл розетка)
  FIX_110_1: "fix-110-1",
  FIX_110_2: "fix-110-2",

  // Светильники комнаты 111 (Дежурное освещение)
  FIX_111_1: "fix-111-1",
  FIX_111_2: "fix-111-2",
} as const;

export type ElectricalPointId =
  (typeof ELECTRICAL_POINT_IDS_1_FLOOR)[keyof typeof ELECTRICAL_POINT_IDS_1_FLOOR];

export type RoomId = (typeof ROOM_IDS_1_FLOOR)[keyof typeof ROOM_IDS_1_FLOOR];
