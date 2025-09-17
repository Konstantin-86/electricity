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
        description: "Зам. начальника УАВР-4 (208)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_208_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_2,
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
        description: "Водонагреватель (Неизвестно где???)",
        rating: 25,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR4_DEPUTY,
            outletGroupIds: [ELECTRICAL_POINT_IDS_2_FLOOR.OUT_208_3],
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
        description: "Начальник участка ДиПНР (207)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_DIPNR_HEAD,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_207_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_207_2,
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
        description: "Начальник участка АВР (206)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_AVR_HEAD,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_206_3,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_206_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_206_2,
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
        id: "breaker-2-2-6",
        designation: "QF6",
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
        description: "Коридор (201)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.CORRIDOR,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_3,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_4,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_5,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_6,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_7,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_201_8,
            ],
            outletGroupIds: [ELECTRICAL_POINT_IDS_2_FLOOR.OUT_201_1],
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
        description: "Начальник участка ЭВС (205)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_EVS_HEAD,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_205_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_205_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_205_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_205_2,
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
      },
      {
        id: "breaker-2-2-12",
        designation: "QF12",
        description: "Производственно-технический отдел (211)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.DEPT_PTO,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_3,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_4,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_5,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_211_6,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_3,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_4,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_211_5,
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
        id: "breaker-2-3-2",
        designation: "QF2",
        description: "Подсобное помещение Освещение программиста (214)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.UTILITY_PROGRAMMER_LIGHTING,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_214_2,
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
        description: "Техник АТХ и ГОЧС (212)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.DEPT_ATX_TECH,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_212_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_212_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_212_3,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_212_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_212_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_212_3,
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
        description: " Начальник участка МТС (210)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_MTS_HEAD,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_210_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_210_2,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_210_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_210_2,
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
        description: "Кабинет директора газторг (209)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: ROOM_IDS_2_FLOOR.OFFICE_GAZTORG_DIRECTOR,
            lightFixtureIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.FIX_209_3,
            ],
            outletGroupIds: [
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_209_1,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_209_2,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_209_3,
              ELECTRICAL_POINT_IDS_2_FLOOR.OUT_209_4,
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
