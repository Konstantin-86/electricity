import type { Room } from "../../../../../types";
import { sharedLamps } from "../../../lamps/lamps";

export const floor1Rooms: Room[] = [
  {
    id: "room-1-101",
    name: "Холл Коридор",
    type: "corridor",
    area: 28,
    outletGroups: [{ id: "out-101-1", count: 4, estimatedLoad: 2000 }],
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
];
