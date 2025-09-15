import type { Panel } from "../../../../types";
import { techInfoTemplates } from "../../../breakers/breakerTechnicalInfo";
import { ROOM_IDS_2_FLOOR } from "./roomID";
import { ELECTRICAL_POINT_IDS_2_FLOOR } from "./roomID";

export const floor2Panels: Panel[] = [
  {
    id: "panel-2-1",
    name: "ЩО-2",
    type: "lighting",
    location: "в коридоре",
    cableType: "ВВГ 5*25 (36м) ",
    poweredFrom: "ЩРС № 7",
    breakers: [
      {
        id: "breaker-1-1-1",
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
        id: "breaker-1-1-2",
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
        id: "breaker-1-1-3",
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
        id: "breaker-1-1-4",
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
        id: "breaker-1-1-5",
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
        id: "breaker-1-1-6",
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
        id: "breaker-1-1-7",
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
        id: "breaker-1-1-10",
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
        id: "breaker-1-1-11",
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
        id: "breaker-1-1-11",
        designation: "QF11",
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
];
