import type { Room, Lamp } from "../../../../../types";

export const sharedLamps: Lamp[] = [
  { id: "lamp-led-18w", wattage: 18, type: "led" },
  { id: "lamp-led-24w", wattage: 24, type: "led" },
  { id: "lamp-led-36w", wattage: 36, type: "led" },
  { id: "lamp-fluorescent-58w", wattage: 58, type: "fluorescent" },
  { id: "lamp-emergency-10w", wattage: 10, type: "led" },
];

export const floor1Rooms: Room[] = [
  {
    id: "room-1-101",
    name: "Рецепция",
    type: "office",
    area: 28,
    outletGroups: [
      { id: "out-101-1", count: 4, estimatedLoad: 2000 },
      { id: "out-101-2", count: 2 },
      { id: "out-101-3", count: 2, estimatedLoad: 1000 },
    ],
    lightFixtures: [
      {
        id: "fix-101-1",
        name: "Основное освещение рецепции",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[0], sharedLamps[0], sharedLamps[0]],
      },
      {
        id: "fix-101-2",
        name: "Декоративная подсветка",
        fixtureType: "wall",
        lampIds: [sharedLamps[1], sharedLamps[1], sharedLamps[1]],
      },
      {
        id: "fix-101-3",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4]],
      },
      {
        id: "fix-101-4",
        name: "Еще освещение",
        fixtureType: "wall",
        lampIds: [
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
          sharedLamps[3],
        ],
      },
    ],
  },
  /* {
    id: "room-1-102",
    name: "Холл",
    type: "corridor",
    area: 45,
    outletGroups: [
      { id: "out-102-1", count: 2, estimatedLoad: 800 },
      { id: "out-102-2", count: 2 },
    ],
    lightFixtures: [
      {
        id: "fix-102-1",
        name: "Основное освещение холла",
        fixtureType: "ceiling",
        lampIds: Array(8).fill("lamp-led-24w"),
      },
      {
        id: "fix-102-2",
        name: "Аварийное освещение холла",
        fixtureType: "emergency",
        lampIds: Array(3).fill("lamp-emergency-10w"),
      },
    ],
  },
  {
    id: "room-1-103",
    name: "Офис 101",
    type: "office",
    area: 22,
    outletGroups: [
      { id: "out-103-1", count: 3, estimatedLoad: 1500 },
      { id: "out-103-2", count: 2 },
      { id: "out-103-3", count: 1 },
    ],
    lightFixtures: [
      {
        id: "fix-103-1",
        name: "Основное освещение офиса",
        fixtureType: "ceiling",
        lampIds: Array(4).fill("lamp-led-24w"),
      },
      {
        id: "fix-103-2",
        name: "Дополнительное освещение",
        fixtureType: "ceiling",
        lampIds: Array(2).fill("lamp-led-18w"),
      },
    ],
  },
  {
    id: "room-1-104",
    name: "Переговорная A",
    type: "conference",
    area: 35,
    outletGroups: [
      { id: "out-104-1", count: 6, estimatedLoad: 3000 },
      { id: "out-104-2", count: 4 },
      { id: "out-104-3", count: 2 },
    ],
    lightFixtures: [
      {
        id: "fix-104-1",
        name: "Основное освещение переговорной",
        fixtureType: "ceiling",
        lampIds: Array(6).fill("lamp-led-36w"),
      },
      {
        id: "fix-104-2",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: Array(2).fill("lamp-emergency-10w"),
      },
    ],
  },
  {
    id: "room-1-105",
    name: "Кухня",
    type: "kitchen",
    area: 18,
    outletGroups: [
      { id: "out-105-1", count: 3, estimatedLoad: 4000 },
      { id: "out-105-2", count: 2, estimatedLoad: 2000 },
      { id: "out-105-3", count: 2, estimatedLoad: 1000 },
    ],
    lightFixtures: [
      {
        id: "fix-105-1",
        name: "Основное освещение кухни",
        fixtureType: "ceiling",
        lampIds: Array(4).fill("lamp-led-24w"),
      },
      {
        id: "fix-105-2",
        name: "Подсветка рабочей зоны",
        fixtureType: "wall",
        lampIds: Array(2).fill("lamp-led-18w"),
      },
    ],
  },
  {
    id: "room-1-106",
    name: "Серверная",
    type: "technical",
    area: 15,
    outletGroups: [{ id: "out-106-1", count: 8, estimatedLoad: 6000 }],
    lightFixtures: [
      {
        id: "fix-106-1",
        name: "Основное освещение серверной",
        fixtureType: "ceiling",
        lampIds: Array(2).fill("lamp-fluorescent-58w"),
      },
      {
        id: "fix-106-2",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: Array(2).fill("lamp-emergency-10w"),
      },
    ],
  },
  {
    id: "room-1-107",
    name: "Переговорная B",
    type: "conference",
    area: 28,
    outletGroups: [
      { id: "out-107-1", count: 4, estimatedLoad: 2000 },
      { id: "out-107-2", count: 2 },
      { id: "out-107-3", count: 2 },
    ],
    lightFixtures: [
      {
        id: "fix-107-1",
        name: "Основное освещение переговорной B",
        fixtureType: "ceiling",
        lampIds: Array(4).fill("lamp-led-36w"),
      },
      {
        id: "fix-107-2",
        name: "Дополнительное освещение",
        fixtureType: "wall",
        lampIds: Array(2).fill("lamp-led-18w"),
      },
      {
        id: "fix-107-3",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: Array(1).fill("lamp-emergency-10w"),
      },
    ],
  },
  {
    id: "room-1-108",
    name: "Офис 102",
    type: "office",
    area: 20,
    outletGroups: [
      { id: "out-108-1", count: 3, estimatedLoad: 1500 },
      { id: "out-108-2", count: 1 },
      { id: "out-108-3", count: 1 },
    ],
    lightFixtures: [
      {
        id: "fix-108-1",
        name: "Основное освещение офиса 102",
        fixtureType: "ceiling",
        lampIds: Array(4).fill("lamp-led-24w"),
      },
      {
        id: "fix-108-2",
        name: "Местное освещение",
        fixtureType: "desk",
        lampIds: Array(2).fill("lamp-led-18w"),
      },
    ],
  }, */
];
