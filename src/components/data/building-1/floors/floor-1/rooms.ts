import type { Room } from "../../../../../types";
import { sharedLamps } from "../../../lamps/lamps";

export const floor1Rooms: Room[] = [
  {
    id: "room-1-101",
    name: "Холл Коридор",
    type: "corridor",
    area: 28,
    outletGroups: [{ id: "out-101-1", count: 4, estimatedLoad: 300 }],
    lightFixtures: [
      {
        id: "fix-101-1",
        name: "Основное освещение холла",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[0], sharedLamps[0], sharedLamps[0]],
      },
    ],
  },
  {
    id: "room-1-102",
    name: "Лестница",
    type: "conference",
    area: 45,
    outletGroups: [],
    lightFixtures: [
      {
        id: "fix-102-1",
        name: "Освещение лестницы с 1 по 3 этаж",
        fixtureType: "ceiling",
        lampIds: [
          sharedLamps[7],
          sharedLamps[7],
          sharedLamps[7],
          sharedLamps[7],
        ],
      },
    ],
  },
  {
    id: "room-1-103",
    name: "Туалет",
    type: "bathroom",
    area: 12,
    outletGroups: [],
    lightFixtures: [
      {
        id: "fix-103-1",
        name: "Туалет",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[2], sharedLamps[2]],
      },
    ],
  },
  {
    id: "room-1-104",
    name: "Умывальня",
    type: "bathroom",
    area: 18,
    outletGroups: [],
    lightFixtures: [
      {
        id: "fix-103-2",
        name: "Умывальня",
        fixtureType: "emergency",
        lampIds: [sharedLamps[6], sharedLamps[6]],
      },
    ],
  },
  {
    id: "room-1-105",
    name: "Раздевалка",
    type: "office",
    area: 18,
    outletGroups: [{ id: "out-105-1", count: 2, estimatedLoad: 500 }],
    lightFixtures: [
      {
        id: "fix-105-1",
        name: "Раздевалка",
        fixtureType: "ceiling",
        lampIds: [
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
        ],
      },
    ],
  },
  {
    id: "room-1-106",
    name: "Помещение старшего смены",
    type: "office",
    area: 12,
    outletGroups: [{ id: "out-105-1", count: 2, estimatedLoad: 500 }],
    lightFixtures: [
      {
        id: "fix-105-1",
        name: "Помещение старшего смены",
        fixtureType: "ceiling",
        lampIds: [
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
        ],
      },
    ],
  },
  {
    id: "room-1-107",
    name: "Холл розетки",
    type: "corridor",
    area: 12,
    outletGroups: [{ id: "out-107-1", count: 5, estimatedLoad: 500 }],
    lightFixtures: [],
  },
  {
    id: "room-1-108",
    name: "Проходная",
    type: "corridor",
    area: 12,
    outletGroups: [{ id: "out-108-1", count: 5, estimatedLoad: 500 }],
    lightFixtures: [
      {
        id: "fix-108-1",
        name: "Помещение старшего смены",
        fixtureType: "ceiling",
        lampIds: [
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
        ],
      },
    ],
  },
  {
    id: "room-1-109",
    name: "Розетки кладовка (прием пищи)",
    type: "other",
    area: 12,
    outletGroups: [{ id: "out-109-1", count: 5, estimatedLoad: 500 }],
    lightFixtures: [],
  },
  {
    id: "room-1-110",
    name: "Холл розетка",
    type: "other",
    area: 12,
    outletGroups: [{ id: "out-110-1", count: 2, estimatedLoad: 300 }],
    lightFixtures: [],
  },
  {
    id: "room-1-111",
    name: " Дежурное освещение",
    type: "corridor",
    area: 12,
    outletGroups: [],
    lightFixtures: [
      {
        id: "fix-111-1",
        name: "Дежурное освещение",
        fixtureType: "ceiling",
        lampIds: [
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
        ],
      },
    ],
  },
];
