import type { Panel } from "../../../../types";
import { techInfoTemplates } from "../../../breakers/breakerTechnicalInfo";
import { ROOM_IDS_3_FLOOR } from "./roomID";
import { ELECTRICAL_POINT_IDS_3_FLOOR } from "./roomID";

export const floor3Panels: Panel[] = [
  {
    id: "panel-3-4", // 3 этаж 4 ЩО
    name: "ЩО-4",
    type: "lighting",
    location: "холл на входе, возле лестницы",
    cableType: "ВВГ 5x25 40м",
    poweredFrom: "ЩРС № 7",
    breakers: [
      {
        id: "breaker-3-4-1", // 3 этаж, 4 ЩО, 1 автомат
        designation: "QF1",
        description: "Приемная (307)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.RECEPTION,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_307_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_307_2,
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
        id: "breaker-3-4-2",
        designation: "QF2",
        description: "Главный инженер освещение (306)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_306_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_306_2,
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
        id: "breaker-3-4-3",
        designation: "QF3",
        description: "Главный инженер розетки (306)",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.CHIEF_ENGINEER,
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_306_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_306_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_306_3,
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
        id: "breaker-3-4-4",
        designation: "QF4",
        description: "Резерв",
        rating: 16,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-3-4-5",
        designation: "QF5",
        description: "Учет МПЗ (305)",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.INVENTORY_ACCOUNTING,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_305_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_305_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_305_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_305_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_305_3,
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
        id: "breaker-3-4-6",
        designation: "QF6",
        description: "Бухгалтерия (304)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.ACCOUNTING,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_304_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_304_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_304_3,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_304_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_304_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_304_3,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_304_4,
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
        id: "breaker-3-4-7",
        designation: "QF7",
        description: "Резерв",
        rating: 16,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-3-4-8",
        designation: "QF8",
        description: "Охрана труда (303)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.OCCUPATIONAL_SAFETY,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_303_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_303_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_303_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_303_2,
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
        id: "breaker-3-4-9",
        designation: "QF9",
        description: "Экономист (302)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.ECONOMIST,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_302_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_302_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_302_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_302_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_302_3,
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
        id: "breaker-3-4-10",
        designation: "QF10",
        description: "Резерв",
        rating: 16,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-3-4-11",
        designation: "QF11",
        description: "Резерв",
        rating: 16,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-3-4-12",
        designation: "QF12",
        description: "Коридор (301)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.CORRIDOR,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_3,
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
  {
    id: "panel-3-5", // 3 этаж 5 ЩО
    name: "ЩО-5",
    type: "lighting",
    location: "холл на входе, возле лестницы",
    cableType: "ВВГ 5x25 75м",
    poweredFrom: "ЩРС № 7",
    breakers: [
      {
        id: "breaker-3-5-1", // 3 этаж, 4 ЩО, 1 автомат
        designation: "QF1",
        description: "Директор розетки (314)",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_314_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_314_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_314_3,
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
        id: "breaker-3-5-2",
        designation: "QF2",
        description: "Директор водонагреватель (314)",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
            outletGroupIds: [ELECTRICAL_POINT_IDS_3_FLOOR.OUT_314_4],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-3-5-3",
        designation: "QF3",
        description: "Директор освещение (314)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.DIRECTOR,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_314_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_314_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_314_3,
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
        id: "breaker-3-5-4",
        designation: "QF4",
        description: "Отдел кадров (313)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.HR_DEPARTMENT,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_313_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_313_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_313_3,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_313_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_313_2,
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
        id: "breaker-3-5-5",
        designation: "QF5",
        description: "Программист (312)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.PROGRAMMER,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_312_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_312_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_312_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_312_2,
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
        id: "breaker-3-5-6",
        designation: "QF6",
        description: "Ксерокс холл (311)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.XEROX_HALL,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_311_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_311_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_311_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_311_2,
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
        id: "breaker-3-5-7",
        designation: "QF7",
        description: "Водонагреватель мужской туалет (315)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.TOILET_MEN,
            outletGroupIds: [ELECTRICAL_POINT_IDS_3_FLOOR.OUT_315_2],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-3-5-8",
        designation: "QF8",
        description: "Водонагреватель женский туалет (316)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.TOILET_WOMEN,
            outletGroupIds: [ELECTRICAL_POINT_IDS_3_FLOOR.OUT_316_2],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-3-5-9",
        designation: "QF9",
        description: "Коридор (301)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.CORRIDOR,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_4,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_5,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_301_6,
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
        id: "breaker-3-5-10",
        designation: "QF10",
        description: "Селекторная (310)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.MEETING_ROOM,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_310_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_310_2,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_310_3,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_310_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_310_2,
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
        id: "breaker-3-5-11",
        designation: "QF11",
        description: "Туалеты (315, 316)", // TODO: [REFACTOR] Уточнить один автомат за два помещения? или нет
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.TOILET_MEN,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_315_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_315_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_315_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_315_2,
            ],
          },
          {
            roomId: ROOM_IDS_3_FLOOR.TOILET_WOMEN,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_316_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_316_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_316_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.OUT_316_2,
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
        id: "breaker-3-5-12",
        designation: "QF12",
        description: "Главный бухгалтер и Комната отдыха (308, 309)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_3_FLOOR.CHIEF_ACCOUNTANT,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_308_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_308_2,
            ],
          },
          {
            roomId: ROOM_IDS_3_FLOOR.REST_ROOM,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_309_1,
              ELECTRICAL_POINT_IDS_3_FLOOR.FIX_309_2,
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
