import type { Room, Lamp } from "../../../../../types";

export const sharedLamps: Lamp[] = [
  { id: "lamp-led-18w", wattage: 18, type: "led" },
  { id: "lamp-led-24w", wattage: 24, type: "led" },
  { id: "lamp-led-36w", wattage: 36, type: "led" },
  { id: "lamp-fluorescent-58w", wattage: 58, type: "fluorescent" },
  { id: "lamp-emergency-10w", wattage: 10, type: "led" },
  { id: "lamp-halogen-50w", wattage: 50, type: "incandescent" },
  { id: "lamp-led-spot-7w", wattage: 7, type: "led" },
  { id: "lamp-led-panel-40w", wattage: 40, type: "led" },
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
      { id: "out-101-4", count: 1, estimatedLoad: 500 },
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
        name: "Подсветка стойки",
        fixtureType: "wall",
        lampIds: [sharedLamps[3], sharedLamps[3]],
      },
    ],
  },
  {
    id: "room-1-102",
    name: "Конференц-зал",
    type: "conference",
    area: 45,
    outletGroups: [
      { id: "out-102-1", count: 8, estimatedLoad: 4000 },
      { id: "out-102-2", count: 4, estimatedLoad: 2000 },
      { id: "out-102-3", count: 2, estimatedLoad: 1500 },
      { id: "out-102-4", count: 1, estimatedLoad: 3000 },
    ],
    lightFixtures: [
      {
        id: "fix-102-1",
        name: "Основное освещение зала",
        fixtureType: "ceiling",
        lampIds: [
          sharedLamps[7],
          sharedLamps[7],
          sharedLamps[7],
          sharedLamps[7],
        ],
      },
      {
        id: "fix-102-2",
        name: "Освещение презентационной зоны",
        fixtureType: "track",
        lampIds: [sharedLamps[5], sharedLamps[5], sharedLamps[5]],
      },
      {
        id: "fix-102-3",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4], sharedLamps[4]],
      },
      {
        id: "fix-102-4",
        name: "Декоративная подсветка стен",
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
    id: "room-1-103",
    name: "Кухня-столовая",
    type: "kitchen",
    area: 32,
    outletGroups: [
      { id: "out-103-1", count: 6, estimatedLoad: 8000 },
      { id: "out-103-2", count: 3, estimatedLoad: 4500 },
      { id: "out-103-3", count: 2 },
      { id: "out-103-4", count: 1, estimatedLoad: 2200 },
    ],
    lightFixtures: [
      {
        id: "fix-103-1",
        name: "Основное освещение кухни",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[2], sharedLamps[2], sharedLamps[2]],
      },
      {
        id: "fix-103-2",
        name: "Подсветка рабочей зоны",
        fixtureType: "under-cabinet",
        lampIds: [
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
          sharedLamps[6],
        ],
      },
      {
        id: "fix-103-3",
        name: "Освещение обеденной зоны",
        fixtureType: "pendant",
        lampIds: [sharedLamps[5], sharedLamps[5], sharedLamps[5]],
      },
      {
        id: "fix-103-4",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4]],
      },
    ],
  },
  {
    id: "room-1-104",
    name: "Серверная",
    type: "technical",
    area: 18,
    outletGroups: [
      { id: "out-104-1", count: 12, estimatedLoad: 12000 },
      { id: "out-104-2", count: 4, estimatedLoad: 6000 },
      { id: "out-104-3", count: 2 },
    ],
    lightFixtures: [
      {
        id: "fix-104-1",
        name: "Основное освещение",
        fixtureType: "ceiling",
        lampIds: [sharedLamps[0], sharedLamps[0]],
      },
      {
        id: "fix-104-2",
        name: "Аварийное освещение",
        fixtureType: "emergency",
        lampIds: [sharedLamps[4]],
      },
      {
        id: "fix-104-3",
        name: "Подсветка стоек",
        fixtureType: "wall",
        lampIds: [sharedLamps[6], sharedLamps[6]],
      },
    ],
  },
];
