import type { Panel } from "../../../../../types";

export const floor1Panels: Panel[] = [
  {
    id: "panel-1-1",
    name: "ЩО-1",
    type: "lighting",
    location: "Возле лифтовой шахты",
    breakers: [
      {
        id: "breaker-1-1-1",
        name: "QF1 - Рецепция (розетки)",
        rating: "16A",
        types: { lighting: true, socket: true, special: false },
        isOn: true,
        powers: [
          { roomId: "room-1-101", outlets: 3, lights: 10 },
          { roomId: "room-1-102", lights: 8 },
        ],
      },
      {
        id: "breaker-1-1-2",
        name: "QF2 - Холл (освещение)",
        rating: "10A",
        types: { lighting: true, socket: false, special: false },
        isOn: true,
        powers: [{ roomId: "room-1-102", lights: 4 }],
      },
    ],
  },
  {
    id: "panel-1-2",
    name: "ЩР-1-1",
    type: "power",
    location: "В серверной",
    breakers: [
      {
        id: "breaker-1-2-1",
        name: "QF6 - Рецепция (доп. розетки)",
        rating: "16A",
        types: { lighting: false, socket: true, special: false },
        isOn: true,
        powers: [{ roomId: "room-1-101", outlets: 3 }],
      },
    ],
  },
];
