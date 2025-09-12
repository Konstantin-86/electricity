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
            ],
          },
        ],
        technicalInfo: {
          ...techInfoTemplates.IEK_BA47_29,
          warrantyUntil: "2026-01-15",
          comments: "Автомат для кухонного оборудования",
        },
      },
    ],
  },
];
