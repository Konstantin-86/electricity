import type { Panel } from "../../../../types";
import { techInfoTemplates } from "../../../breakers/breakerTechnicalInfo";
import { ROOM_IDS_1_FLOOR } from "./roomID";
import { ELECTRICAL_POINT_IDS_1_FLOOR } from "./roomID";

export const floor1Panels: Panel[] = [
  {
    id: "panel-1-1", // 1 этаж 1 ЩО
    name: "ЩО-1",
    type: "lighting",
    location: "холл на входе, возле туалета",
    cableType: "ВВГнг-LS 3x6",
    poweredFrom: "ЩРС № 7",
    breakers: [
      {
        id: "breaker-1-1-1", // 1 этаж, 1 ЩО, 1 автомат
        designation: "QF1",
        description: "Холл Коридор Освещение (101)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_2,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_101_3,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-2",
        designation: "QF2",
        description: "Освещение лестницы (102)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.STAIRS,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_2,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_3,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_102_4,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.SCHNEIDER_IC60N,
          lastMaintenanceDate: "2024-06-10",
          serialNumber: "SE-IC60N-002",
        },
      },
      {
        id: "breaker-1-1-3",
        designation: "QF3",
        description: "Резерв",
        rating: 25,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.IEK_BA47_29,
          warrantyUntil: "2026-01-15",
          comments: "Автомат для кухонного оборудования",
        },
      },
      {
        id: "breaker-1-1-4",
        designation: "QF4",
        description: "Туалет и Умывальня (103, 104)",
        rating: 20,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.WASHROOM,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_104_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_104_2,
            ],
          },
          {
            roomId: ROOM_IDS_1_FLOOR.TOILET,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_103_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_103_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_HEAVY_DUTY_32A,
          serialNumber: "ABB-S204-004",
          maintenanceComments:
            "Требует регулярной проверки из-за критичной нагрузки",
        },
      },
      {
        id: "breaker-1-1-5",
        designation: "QF5",
        description: "Раздевалка, Помещение старшего смены (105, 106)",
        rating: 20,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
            lightFixtureIds: [ELECTRICAL_POINT_IDS_1_FLOOR.FIX_105_1],
            outletGroupIds: [ELECTRICAL_POINT_IDS_1_FLOOR.OUT_105_1],
          },
          {
            roomId: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
            lightFixtureIds: [ELECTRICAL_POINT_IDS_1_FLOOR.FIX_106_1],
            outletGroupIds: [ELECTRICAL_POINT_IDS_1_FLOOR.OUT_106_1],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.SCHNEIDER_EMERGENCY,
          comments: "Аварийное освещение - не отключать!",
        },
      },
      {
        id: "breaker-1-1-6",
        designation: "QF6",
        description: "Холл Коридор Розетки (101) ",
        rating: 20,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_2,
              ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_3,
            ],
          },
        ],
        technicalInfo: techInfoTemplates.IEK_BA47_29,
      },
      {
        id: "breaker-1-1-7",
        designation: "QF7",
        description: "Пожарная сигнализация",
        rating: 20,
        type: "lighting",
        isOn: true,
        controlledLoads: [],
        technicalInfo: techInfoTemplates.SCHNEIDER_EMERGENCY,
      },
      {
        id: "breaker-1-1-8",
        designation: "QF8",
        description: "Резерв",
        rating: 25,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.IEK_BA47_29,
          warrantyUntil: "2026-01-15",
          comments: "Автомат для кухонного оборудования",
        },
      },
      {
        id: "breaker-1-1-9",
        designation: "QF9",
        description: "Проходная, Розетка еда ",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.CHECKPOINT,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_108_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_108_2,
            ],
            outletGroupIds: [ELECTRICAL_POINT_IDS_1_FLOOR.OUT_108_1],
          },
          {
            roomId: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
            lightFixtureIds: [ELECTRICAL_POINT_IDS_1_FLOOR.FIX_109_1],
            outletGroupIds: [ELECTRICAL_POINT_IDS_1_FLOOR.OUT_109_1],
          },
        ],
        technicalInfo: techInfoTemplates.ABB_SOCKET_16A,
      },
      {
        id: "breaker-1-1-10",
        designation: "QF10",
        description: "Холл розетки (201) ", // TODO: [REFACTOR] !!Уточнить
        rating: 25,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
            outletGroupIds: [ELECTRICAL_POINT_IDS_1_FLOOR.OUT_101_4],
          },
        ],
        technicalInfo: techInfoTemplates.ABB_SOCKET_16A,
      },
      {
        id: "breaker-1-1-11",
        designation: "QF11",
        description: "Дежурное освещение",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.EMERGENCY_LIGHTING,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_111_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_111_2,
            ],
          },
        ],
        technicalInfo: techInfoTemplates.ABB_LIGHTING_16A,
      },
    ],
  },
  {
    id: "panel-1-1(kitchen)", // 1 этаж 1 ЩО
    name: "ЩО-1 (столовая)",
    type: "lighting",
    location: "коридор столовой",
    cableType: "ВВГ 4x10 (15м)",
    poweredFrom: "ЩС № 1",
    breakers: [
      {
        id: "breaker-1-1-1(kitchen)", // 1 этаж, 1 ЩО, 1 автомат
        designation: "QF1",
        description: "Водонагреватель (туалет) (120) ",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.DINING_TOILET,
            outletGroupIds: [ELECTRICAL_POINT_IDS_1_FLOOR.OUT_120_1],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-2(kitchen)",
        designation: "QF2",
        description: "Подвал (127)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.BASEMENT,
            lightFixtureIds: [ELECTRICAL_POINT_IDS_1_FLOOR.FIX_127_1],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-3(kitchen)",
        designation: "QF3",
        description: "Подвал",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.BASEMENT,
            lightFixtureIds: [ELECTRICAL_POINT_IDS_1_FLOOR.FIX_127_2],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-4(kitchen)",
        designation: "QF4",
        description: "Подвал Резерв",
        rating: 16,
        type: "socket",
        isOn: true,
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-5(kitchen)",
        designation: "QF5",
        description: "Кабинет заведующей (122)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.HEAD_OFFICE,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_122_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_122_2,
            ],
            outletGroupIds: [ELECTRICAL_POINT_IDS_1_FLOOR.OUT_122_1],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-6(kitchen)",
        designation: "QF6",
        description: "Туалет, душевая и коридор (120, 118, 124)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.DINING_TOILET,
            lightFixtureIds: [ELECTRICAL_POINT_IDS_1_FLOOR.FIX_120_1],
          },
          {
            roomId: ROOM_IDS_1_FLOOR.SHOWER,
            lightFixtureIds: [ELECTRICAL_POINT_IDS_1_FLOOR.FIX_118_1],
          },
          {
            roomId: ROOM_IDS_1_FLOOR.DINING_CORRIDOR,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_124_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_124_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-7(kitchen)",
        designation: "QF7",
        description: "Обеденный зал (125)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.DINING,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_125_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_125_2,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_125_3,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_125_4,
            ],
            outletGroupIds: [ELECTRICAL_POINT_IDS_1_FLOOR.OUT_125_1],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-8(kitchen)",
        designation: "QF8",
        description: "Столовая VIP (112)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.VIP_DINING,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_112_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_112_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.OUT_112_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.OUT_112_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-1-1-9(kitchen)",
        designation: "QF9",
        description: "Столовая зал (216)", // TODO: [REFACTOR] !!Уточнить (обеденный зал, столовая зал что это)
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_1_FLOOR.VIP_DINING,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_126_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.FIX_126_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_1_FLOOR.OUT_112_1,
              ELECTRICAL_POINT_IDS_1_FLOOR.OUT_112_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
    ],
  },
];
