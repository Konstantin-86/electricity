import type { Panel } from "../../../../../types";

export const floor1Panels: Panel[] = [
  {
    id: "panel-1-1",
    name: "ЩО-1-1",
    type: "lighting",
    location: "Возле лифтовой шахты",
    cableType: "ВВГнг-LS 3x6",
    poweredFrom: "Главный распределительный щит",
    breakers: [
      {
        id: "breaker-1-1-1",
        name: "QF1 - Рецепция (освещение + розетки)",
        rating: 20,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            lightFixtureIds: ["fix-101-1", "fix-101-2"],
            outletGroupIds: ["out-101-1"],
          },
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-1"],
          },
          {
            roomId: "room-1-101",
            lightFixtureIds: ["fix-101-4"],
          },
        ],
      },
      {
        id: "breaker-1-1-2",
        name: "QF2 - Холл (освещение + розетки)",
        rating: 16,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-102",
            outletGroupIds: ["out-102-1"],
            lightFixtureIds: ["fix-102-1"],
          },
          {
            roomId: "room-1-101",
            lightFixtureIds: ["fix-101-3"],
          },
          {
            roomId: "room-1-103",
            lightFixtureIds: ["fix-103-1"],
          },
        ],
      },
      {
        id: "breaker-1-1-3",
        name: "QF3 - Офис 101 (частично)",
        rating: 16,
        type: "mixed",
        isOn: false,
        controlledLoads: [
          {
            roomId: "room-1-103",
            outletGroupIds: ["out-103-1"],
            lightFixtureIds: ["fix-103-2"],
          },
          {
            roomId: "room-1-105",
            lightFixtureIds: ["fix-105-2"],
          },
        ],
      },
    ],
  },
  {
    id: "panel-1-2",
    name: "ЩР-1-1",
    type: "power",
    location: "В серверной",
    cableType: "ВВГнг-LS 3x6",
    poweredFrom: "Главный распределительный щит",
    breakers: [
      {
        id: "breaker-1-2-1",
        name: "QF6 - Рецепция (доп. розетки)",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            outletGroupIds: ["out-101-2", "out-101-3"],
          },
          {
            roomId: "room-1-105",
            outletGroupIds: ["out-105-3"],
          },
        ],
      },
      {
        id: "breaker-1-2-2",
        name: "QF7 - Кухня (розетки + освещение)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-105",
            outletGroupIds: ["out-105-1", "out-105-2"],
            lightFixtureIds: ["fix-105-1"],
          },
          {
            roomId: "room-1-102",
            outletGroupIds: ["out-102-2"],
          },
        ],
      },
      {
        id: "breaker-1-2-3",
        name: "QF8 - Серверная (спец. питание)",
        rating: 32,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-106",
            outletGroupIds: ["out-106-1"],
            lightFixtureIds: ["fix-106-1"],
          },
        ],
      },
    ],
  },
  {
    id: "panel-1-3",
    name: "ЩО-1-2",
    type: "lighting",
    location: "Коридор восточного крыла",
    cableType: "ВВГнг-LS 3x6",
    poweredFrom: "Главный распределительный щит",
    breakers: [
      {
        id: "breaker-1-3-1",
        name: "QF10 - Переговорные (освещение)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-104",
            lightFixtureIds: ["fix-104-1"],
          },
          {
            roomId: "room-1-107",
            lightFixtureIds: ["fix-107-1"],
          },
        ],
      },
      {
        id: "breaker-1-3-2",
        name: "QF11 - Офисы (розетки + свет)",
        rating: 20,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-103",
            outletGroupIds: ["out-103-2", "out-103-3"],
            lightFixtureIds: ["fix-103-2"],
          },
          {
            roomId: "room-1-108",
            outletGroupIds: ["out-108-1", "out-108-2", "out-108-3"],
            lightFixtureIds: ["fix-108-1", "fix-108-2"],
          },
          {
            roomId: "room-1-107",
            outletGroupIds: ["out-107-2", "out-107-3"],
          },
        ],
      },
      {
        id: "breaker-1-3-3",
        name: "QF12 - Аварийное освещение",
        rating: 10,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-2"],
          },
          {
            roomId: "room-1-104",
            lightFixtureIds: ["fix-104-2"],
          },
          {
            roomId: "room-1-107",
            lightFixtureIds: ["fix-107-3"],
          },
        ],
      },
    ],
  },
];
