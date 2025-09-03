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
        designation: "QF1",
        description: "Рецепция (освещение + розетки)",
        rating: 20,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            lightFixtureIds: ["fix-101-1", "fix-101-2", "fix-101-4"],
            outletGroupIds: ["out-101-1", "out-101-2"],
          },
        ],
      },
      {
        id: "breaker-1-1-2",
        designation: "QF2",
        description: "Конференц-зал (основное освещение + розетки)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-1", "fix-102-4"],
            outletGroupIds: ["out-102-1", "out-102-2"],
          },
        ],
      },
      {
        id: "breaker-1-1-3",
        designation: "QF3",
        description: "Кухня-столовая (освещение + розетки)",
        rating: 25,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-103",
            lightFixtureIds: ["fix-103-1", "fix-103-2", "fix-103-3"],
            outletGroupIds: ["out-103-1", "out-103-2"],
          },
        ],
      },
      {
        id: "breaker-1-1-4",
        designation: "QF4",
        description: "Серверная (питание оборудования)",
        rating: 32,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-104",
            outletGroupIds: ["out-104-1", "out-104-2"],
          },
        ],
      },
      {
        id: "breaker-1-1-5",
        designation: "QF5",
        description: "Аварийное освещение (все помещения)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            lightFixtureIds: ["fix-101-3"],
          },
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-3"],
          },
          {
            roomId: "room-1-103",
            lightFixtureIds: ["fix-103-4"],
          },
          {
            roomId: "room-1-104",
            lightFixtureIds: ["fix-104-2"],
          },
        ],
      },
      {
        id: "breaker-1-1-6",
        designation: "QF6",
        description: "Дополнительные розетки",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-101",
            outletGroupIds: ["out-101-3", "out-101-4"],
          },
          {
            roomId: "room-1-102",
            outletGroupIds: ["out-102-3", "out-102-4"],
          },
          {
            roomId: "room-1-103",
            outletGroupIds: ["out-103-3", "out-103-4"],
          },
          {
            roomId: "room-1-104",
            outletGroupIds: ["out-104-3"],
          },
        ],
      },
      {
        id: "breaker-1-1-7",
        designation: "QF7",
        description: "Дополнительное освещение",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-1-102",
            lightFixtureIds: ["fix-102-2"],
          },
          {
            roomId: "room-1-104",
            lightFixtureIds: ["fix-104-1", "fix-104-3"],
          },
        ],
      },
    ],
  },
];
