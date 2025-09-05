import type { Room } from "../../../../types";
import { fixtureTemplates } from "../../../fixture/fixture";

export const floor2Rooms: Room[] = [
  {
    id: "room-1-101",
    name: "Холл Коридор",
    type: "corridor",
    area: 28,
    outletGroups: [{ id: "out-101-1", count: 4, estimatedLoad: 300 }],
    lightFixtures: [
      fixtureTemplates.LINEAR_4x18W,
      fixtureTemplates.EMERGENCY_EXIT_SIGN,
    ],
  },
  {
    id: "room-1-102",
    name: "Лестница",
    type: "conference",
    area: 45,
    outletGroups: [],
    lightFixtures: [
      fixtureTemplates.WALL_SCONCE_2x7W,
      fixtureTemplates.WALL_SCONCE_2x7W,
      fixtureTemplates.EMERGENCY_EXIT_SIGN,
      fixtureTemplates.EMERGENCY_LUMINAIRE,
    ],
  },
  {
    id: "room-1-103",
    name: "Туалет",
    type: "bathroom",
    area: 12,
    outletGroups: [],
    lightFixtures: [
      fixtureTemplates.LED_PANEL_SINGLE_40W,
      fixtureTemplates.RECESSED_SPOT_10W,
    ],
  },
  {
    id: "room-1-104",
    name: "Умывальня",
    type: "bathroom",
    area: 18,
    outletGroups: [],
    lightFixtures: [
      fixtureTemplates.LED_PANEL_SINGLE_40W,
      fixtureTemplates.RECESSED_SPOT_10W,
      fixtureTemplates.RECESSED_SPOT_10W,
    ],
  },
  {
    id: "room-1-105",
    name: "Раздевалка",
    type: "office",
    area: 18,
    outletGroups: [{ id: "out-105-1", count: 2, estimatedLoad: 500 }],
    lightFixtures: [fixtureTemplates.OFFICE_PANEL_2x36W],
  },
  {
    id: "room-1-106",
    name: "Помещение старшего смены",
    type: "office",
    area: 12,
    outletGroups: [{ id: "out-106-1", count: 2, estimatedLoad: 500 }],
    lightFixtures: [fixtureTemplates.OFFICE_PANEL_2x36W],
  },
  {
    id: "room-1-107",
    name: "Холл розетки",
    type: "corridor",
    area: 12,
    outletGroups: [{ id: "out-107-1", count: 5, estimatedLoad: 500 }],
    lightFixtures: [
      fixtureTemplates.RECESSED_SPOT_10W,
      fixtureTemplates.RECESSED_SPOT_10W,
    ],
  },
  {
    id: "room-1-108",
    name: "Проходная",
    type: "corridor",
    area: 12,
    outletGroups: [{ id: "out-108-1", count: 5, estimatedLoad: 500 }],
    lightFixtures: [
      fixtureTemplates.OFFICE_PANEL_2x36W,
      fixtureTemplates.EMERGENCY_EXIT_SIGN,
    ],
  },
  {
    id: "room-1-109",
    name: "Розетки кладовка (прием пищи)",
    type: "other",
    area: 12,
    outletGroups: [{ id: "out-109-1", count: 5, estimatedLoad: 500 }],
    lightFixtures: [fixtureTemplates.RECESSED_SPOT_10W],
  },
  {
    id: "room-1-110",
    name: "Холл розетка",
    type: "other",
    area: 12,
    outletGroups: [{ id: "out-110-1", count: 2, estimatedLoad: 300 }],
    lightFixtures: [
      fixtureTemplates.RECESSED_SPOT_10W,
      fixtureTemplates.RECESSED_SPOT_10W,
    ],
  },
  {
    id: "room-1-111",
    name: "Дежурное освещение",
    type: "corridor",
    area: 12,
    outletGroups: [],
    lightFixtures: [
      fixtureTemplates.EMERGENCY_LUMINAIRE,
      fixtureTemplates.EMERGENCY_LUMINAIRE,
    ],
  },
];
