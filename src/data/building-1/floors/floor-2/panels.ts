import type { Panel } from "../../../../types";
import { techInfoTemplates } from "../../../breakers/breakerTechnicalInfo";
import { ROOM_IDS_2_FLOOR } from "./roomID";
import { ELECTRICAL_POINT_IDS_2_FLOOR } from "./roomID";

export const floor2Panels: Panel[] = [
  {
    id: "panel-2-2", // 2 этаж 2 ЩО
    name: "ЩО-2",
    type: "lighting",
    location: "в коридоре",
    cableType: "ВВГ 5*25 (36м) ",
    poweredFrom: "ЩРС № 7",
    breakers: [
      {
        id: "breaker-2-2-1",
        designation: "QF1",
        description: "Зам. начальника УАВР-4 (201)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_201_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_201_2,
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
        id: "breaker-2-2-2",
        designation: "QF2",
        description: "Водонагреватель Зам. начальника (201)",
        rating: 25,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
            outletGroupIds: [ELECTRICAL_POINT_IDS_2_FLOOR.OUT_201_3],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.SCHNEIDER_IC60N,
          lastMaintenanceDate: "2024-06-10",
          serialNumber: "SE-IC60N-002",
        },
      },
      {
        id: "breaker-2-2-3",
        designation: "QF3",
        description: "Инженер АВУ1 (217)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1_ENGINEER,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_217_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_217_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_217_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_217_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.IEK_BA47_29,
          warrantyUntil: "2026-01-15",
          comments: "Автомат для кухонного оборудования",
        },
      },
      {
        id: "breaker-2-2-4",
        designation: "QF4",
        description: "Участок АВУ1 (215)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_215_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_215_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_215_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_215_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.IEK_BA47_29,
          warrantyUntil: "2026-01-15",
          comments: "Автомат для кухонного оборудования",
        },
      },
      {
        id: "breaker-2-2-5",
        designation: "QF5",
        description: "УООП (начальник) (202)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_202_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_202_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_202_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_202_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.IEK_BA47_29,
          warrantyUntil: "2026-01-15",
          comments: "Автомат для кухонного оборудования",
        },
      },
      {
        id: "breaker-2-2-6",
        designation: "QF6",
        description: "Бухгалтерия по учету МПЗ (204)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU1,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_204_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_204_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.IEK_BA47_29,
          warrantyUntil: "2026-01-15",
          comments: "Автомат для кухонного оборудования",
        },
      },
      {
        id: "breaker-2-2-7",
        designation: "QF7",
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
        id: "breaker-2-2-8",
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
        id: "breaker-2-2-9",
        designation: "QF9",
        description: "Коридор (209)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_3,
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
        id: "breaker-2-2-10",
        designation: "QF10",
        description: "УООП (216)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_UOOP,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_216_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_216_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_216_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_216_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.SCHNEIDER_IC60N,
          lastMaintenanceDate: "2024-06-10",
          serialNumber: "SE-IC60N-002",
        },
      },
      /*  {
        id: "breaker-2-2-11",
        designation: "QF11",
        description: "Начальник участка АТХ (204)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_204_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_204_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_204_3,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.SCHNEIDER_IC60N,
          lastMaintenanceDate: "2024-06-10",
          serialNumber: "SE-IC60N-002",
        },
      }, */
      {
        id: "breaker-2-2-12",
        designation: "QF12",
        description: "Автотранспортный участок (203)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_ATX_HEAD,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_203_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_203_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_203_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_203_2,
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.SCHNEIDER_IC60N,
          lastMaintenanceDate: "2024-06-10",
          serialNumber: "SE-IC60N-002",
        },
      },
    ],
  },
  {
    id: "panel-2-3", // 2 этаж 3 ЩО
    name: "ЩО-3",
    type: "lighting",
    location: "в коридоре",
    cableType: "ВВГ 5*25 (65м) ",
    poweredFrom: "ЩРС № 7",
    breakers: [
      {
        id: "breaker-2-3-1", // 2 этаж, 3 ЩО, 1 автомат
        designation: "QF1",
        description: "Начальник ПТО, коридор ПТО (214)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.CHIEF_PTO,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_3,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_4,
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
        id: "breaker-2-3-2",
        designation: "QF2",
        description: "Вентиляция (208)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_VENTILYATSIYA,
            lightFixtureIds: [ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_1],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-2-3-3",
        designation: "QF3",
        description: "Резерв",
        rating: 25,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-2-3-4",
        designation: "QF4",
        description: "Резерв",
        rating: 25,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-2-3-5",
        designation: "QF5",
        description: "Техник АТХ, техник АВР и Программист (207, 208)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_3,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_3,
            ],
          },
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_PROGRAMMIST,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_3,
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
        id: "breaker-2-3-6",
        designation: "QF6",
        description: "АВУ3 (206)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVU3,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_3,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_203_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_203_2,
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
        id: "breaker-2-3-7",
        designation: "QF7",
        description: "Водонагреватель мужской туалет (216)",
        rating: 25,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.TOILET_MEN,

            outletGroupIds: [ELECTRICAL_POINT_IDS_2_FLOOR.OUT_216_2],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-2-3-8",
        designation: "QF8",
        description: "Водонагреватель женский туалет (217)",
        rating: 25,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.TOILET_WOMEN,

            outletGroupIds: [ELECTRICAL_POINT_IDS_2_FLOOR.OUT_217_2],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
      {
        id: "breaker-2-3-9",
        designation: "QF9",
        description: "Освещение Лестница столовая (203)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.STAIRS_PANTRY,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_203_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_203_2,
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
        id: "breaker-2-3-10",
        designation: "QF10",
        description: "Освещение туалетов (216, 217)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.TOILET_MEN,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_216_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_216_2,
            ],
          },
          {
            roomId: ROOM_IDS_2_FLOOR.TOILET_WOMEN,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_217_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_217_2,
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
        id: "breaker-2-3-11",
        designation: "QF11",
        description: "Пто инженеры (214_1)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.PTO_ENGENEERS,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_1_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_1_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_214_1_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_214_1_2,
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
        id: "breaker-2-3-12",
        designation: "QF12",
        description: "Резерв",
        rating: 25,
        type: "mixed",
        isOn: false,
        technicalInfo: {
          ...techInfoTemplates.ABB_SOCKET_16A,
          serialNumber: "ABB-S203-001",
          comments: "Основной автомат рецепции",
        },
      },
    ],
  },
];
