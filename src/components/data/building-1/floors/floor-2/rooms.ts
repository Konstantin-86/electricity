import type { Room } from "../../../../../types";
import { sharedLamps } from "../../../lamps/lamps";

export const floor2Rooms: Room[] = [
  {
    id: "room-2-201",
    name: "Отдел разработки",
    type: "office",
    area: 65,
    outletGroups: [
      { id: "out-201-1", count: 8, estimatedLoad: 6000 },
      { id: "out-201-2", count: 6, estimatedLoad: 4500 },
      { id: "out-201-3", count: 4 },
      { id: "out-201-4", count: 2, estimatedLoad: 3000 },
    ],
    lightFixtures: [
      {
        id: "fix-201-1",
        name: "Основное освещение открытого пространства",
        fixtureType: "ceiling",
        lampIds: [
          sharedLamps[7],
          sharedLamps[7],
          sharedLamps[7],
          sharedLamps[7],
          sharedLamps[7],
          sharedLamps[7],
        ],
      },
      {
        id: "fix-201-2",
        name: "Освещение переговорных зон",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[2], sharedLamps[2], sharedLamps[2]],
      },
      {
        id: "fix-201-3",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4], sharedLamps[4], sharedLamps[4]],
      },
      {
        id: "fix-201-4",
        name: "Декоративная подсветка",
        fixtureType: "wall",
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
    id: "room-2-202",
    name: "Переговорная комната",
    type: "conference",
    area: 22,
    outletGroups: [
      { id: "out-202-1", count: 6, estimatedLoad: 3500 },
      { id: "out-202-2", count: 2, estimatedLoad: 1500 },
      { id: "out-202-3", count: 1, estimatedLoad: 2000 },
    ],
    lightFixtures: [
      {
        id: "fix-202-1",
        name: "Основное освещение",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[7], sharedLamps[7], sharedLamps[7]],
      },
      {
        id: "fix-202-2",
        name: "Освещение презентационной доски",
        fixtureType: "wall",
        lampIds: [sharedLamps[1], sharedLamps[1]],
      },
      {
        id: "fix-202-3",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4]],
      },
    ],
  },
  {
    id: "room-2-203",
    name: "Зона отдыха",
    type: "conference",
    area: 28,
    outletGroups: [
      { id: "out-203-1", count: 4, estimatedLoad: 2500 },
      { id: "out-203-2", count: 3, estimatedLoad: 1800 },
      { id: "out-203-3", count: 2 },
    ],
    lightFixtures: [
      {
        id: "fix-203-1",
        name: "Основное освещение",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[2], sharedLamps[2], sharedLamps[2]],
      },
      {
        id: "fix-203-2",
        name: "Декоративная подсветка",
        fixtureType: "wall",
        lampIds: [
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
        ],
      },
      {
        id: "fix-203-3",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4]],
      },
      {
        id: "fix-203-4",
        name: "Точечное освещение кресел",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[0], sharedLamps[0]],
      },
    ],
  },
  {
    id: "room-2-204",
    name: "Кабинет руководителя",
    type: "office",
    area: 25,
    outletGroups: [
      { id: "out-204-1", count: 6, estimatedLoad: 4000 },
      { id: "out-204-2", count: 3, estimatedLoad: 2500 },
      { id: "out-204-3", count: 2 },
      { id: "out-204-4", count: 1, estimatedLoad: 1800 },
    ],
    lightFixtures: [
      {
        id: "fix-204-1",
        name: "Основное освещение кабинета",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[7], sharedLamps[7], sharedLamps[7]],
      },
      {
        id: "fix-204-2",
        name: "Освещение рабочего стола",
        fixtureType: "wall",
        lampIds: [sharedLamps[1], sharedLamps[1]],
      },
      {
        id: "fix-204-3",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4]],
      },
      {
        id: "fix-204-4",
        name: "Декоративная подсветка книжных полок",
        fixtureType: "wall",
        lampIds: [sharedLamps[6], sharedLamps[6]],
      },
    ],
  },
  {
    id: "room-2-205",
    name: "Техническое помещение",
    type: "technical",
    area: 15,
    outletGroups: [
      { id: "out-205-1", count: 4, estimatedLoad: 3000 },
      { id: "out-205-2", count: 2 },
    ],
    lightFixtures: [
      {
        id: "fix-205-1",
        name: "Основное освещение",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[0], sharedLamps[0]],
      },
      {
        id: "fix-205-2",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4]],
      },
    ],
  },
];
