import type { Panel } from "../../../../types";
import { techInfoTemplates } from "../../../breakers/breakerTechnicalInfo";

export const floor1Panels: Panel[] = [
  {
    id: "panel-1-1",
    name: "ЩО-1-1",
    type: "lighting",
    location: "холл на входе, возле туалета",
    cableType: "ВВГнг-LS 3x6",
    poweredFrom: "ЩРС № 7",
    breakers: [
      {
        id: "breaker-1-1-1",
        designation: "QF1",
        description: "Холл Коридор (освещение + розетки)",
        rating: 25,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            lightFixtureIds: ["fix-101-1"],
            outletGroupIds: ["out-101-1"],
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
        description: "Освещение лестницы",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-1"],
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
        description: "Туалет и Умывальня",
        rating: 20,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-104",
            lightFixtureIds: ["fix-103-1", "fix-103-2"],
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
        description: "Раздевалка, Помещение старшего смены",
        rating: 20,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-105",
            lightFixtureIds: ["fix-105-1"],
            outletGroupIds: ["out-105-1"],
          },
          {
            roomId: "room-1-106",
            lightFixtureIds: ["fix-106-1"],
            outletGroupIds: ["out-106-1"],
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
        description: "Холл розетки",
        rating: 20,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-107",
            outletGroupIds: ["out-107-1"],
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
        description: "Проходная, Розетка еда",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-109",
            lightFixtureIds: ["fix-108-1", "fix-109-1"],
            outletGroupIds: ["out-108-1", "out-109-1"],
          },
        ],
        technicalInfo: techInfoTemplates.ABB_SOCKET_16A,
      },
      {
        id: "breaker-1-1-10",
        designation: "QF10",
        description: "Холл розетки",
        rating: 25,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-110",
            outletGroupIds: ["out-110-1"],
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
            roomId: "room-1-111",
            lightFixtureIds: ["fix-111-1"],
          },
        ],
        technicalInfo: techInfoTemplates.ABB_LIGHTING_16A,
      },
    ],
  },
];
