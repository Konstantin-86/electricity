import type { Panel } from "../../../../types";

export const floor2Panels: Panel[] = [
  {
    id: "panel-2-1",
    name: "ЩО-2-1",
    type: "lighting",
    location: "Коридор второго этажа",
    cableType: "ВВГнг-LS 3x6",
    poweredFrom: "Главный распределительный щит",
    breakers: [
      {
        id: "breaker-2-1-1",
        designation: "QF1",
        description: "Отдел разработки (основное освещение + розетки)",
        rating: 55,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-2-201",
            lightFixtureIds: ["fix-201-1", "fix-201-4"],
            outletGroupIds: ["out-201-1", "out-201-2"],
          },
        ],
      },
      {
        id: "breaker-2-1-2",
        designation: "QF2",
        description: "Переговорная комната (освещение + розетки)",
        rating: 20,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-2-202",
            lightFixtureIds: ["fix-202-1", "fix-202-2"],
            outletGroupIds: ["out-202-1", "out-202-2"],
          },
        ],
      },
      {
        id: "breaker-2-1-3",
        designation: "QF3",
        description: "Зона отдыха (освещение + розетки)",
        rating: 20,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-2-203",
            lightFixtureIds: ["fix-203-1", "fix-203-2", "fix-203-4"],
            outletGroupIds: ["out-203-1", "out-203-2"],
          },
        ],
      },
      {
        id: "breaker-2-1-4",
        designation: "QF4",
        description: "Кабинет руководителя (освещение + розетки)",
        rating: 20,
        type: "mixed",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-2-204",
            lightFixtureIds: ["fix-204-1", "fix-204-4"],
            outletGroupIds: ["out-204-1", "out-204-2"],
          },
        ],
      },
      {
        id: "breaker-2-1-5",
        designation: "QF5",
        description: "Техническое помещение (питание оборудования)",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-2-205",
            outletGroupIds: ["out-205-1"],
          },
        ],
      },
      {
        id: "breaker-2-1-6",
        designation: "QF6",
        description: "Аварийное освещение (все помещения)",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-2-201",
            lightFixtureIds: ["fix-201-3"],
          },
          {
            roomId: "room-2-202",
            lightFixtureIds: ["fix-202-3"],
          },
          {
            roomId: "room-2-203",
            lightFixtureIds: ["fix-203-3"],
          },
          {
            roomId: "room-2-204",
            lightFixtureIds: ["fix-204-3"],
          },
          {
            roomId: "room-2-205",
            lightFixtureIds: ["fix-205-2"],
          },
        ],
      },
      {
        id: "breaker-2-1-7",
        designation: "QF7",
        description: "Дополнительные розетки",
        rating: 16,
        type: "socket",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-2-201",
            outletGroupIds: ["out-201-3", "out-201-4"],
          },
          {
            roomId: "room-2-202",
            outletGroupIds: ["out-202-3"],
          },
          {
            roomId: "room-2-203",
            outletGroupIds: ["out-203-3"],
          },
          {
            roomId: "room-2-204",
            outletGroupIds: ["out-204-3", "out-204-4"],
          },
          {
            roomId: "room-2-205",
            outletGroupIds: ["out-205-2"],
          },
        ],
      },
      {
        id: "breaker-2-1-8",
        designation: "QF8",
        description: "Дополнительное освещение",
        rating: 16,
        type: "lighting",
        isOn: true,
        controlledLoads: [
          {
            roomId: "room-2-201",
            lightFixtureIds: ["fix-201-2"],
          },
          {
            roomId: "room-2-204",
            lightFixtureIds: ["fix-204-2"],
          },
          {
            roomId: "room-2-205",
            lightFixtureIds: ["fix-205-1"],
          },
        ],
      },
    ],
  },
];
