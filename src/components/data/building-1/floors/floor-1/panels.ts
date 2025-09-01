import type { Panel } from "../../../../../types";

export const floor1Panels: Panel[] = [
  {
    id: "panel-1-1",
    name: "ЩО-1-1",
    type: "lighting",
    location: "Возле лифтовой шахты",
    breakers: [
      {
        id: "breaker-1-1-1",
        name: "QF1 - Рецепция (освещение + розетки)",
        rating: "20A",
        types: { lighting: true, socket: true, special: false },
        isOn: true,
        powers: [
          { roomId: "room-1-101", outlets: 4, lights: 12 },
          { roomId: "room-1-102", lights: 5 },
        ],
      },
      {
        id: "breaker-1-1-2",
        name: "QF2 - Холл (освещение + розетки)",
        rating: "16A",
        types: { lighting: true, socket: true, special: false },
        isOn: true,
        powers: [
          { roomId: "room-1-102", outlets: 2, lights: 8 },
          { roomId: "room-1-103", lights: 3 },
        ],
      },
      {
        id: "breaker-1-1-3",
        name: "QF3 - Офис 101 (частично)",
        rating: "16A",
        types: { lighting: true, socket: true, special: false },
        isOn: false,
        powers: [
          { roomId: "room-1-103", outlets: 3, lights: 4 },
          { roomId: "room-1-105", lights: 2 },
        ],
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
        powers: [
          { roomId: "room-1-101", outlets: 4 },
          { roomId: "room-1-105", outlets: 2 },
        ],
      },
      {
        id: "breaker-1-2-2",
        name: "QF7 - Кухня (розетки + освещение)",
        rating: "25A",
        types: { lighting: true, socket: true, special: true },
        isOn: true,
        powers: [
          { roomId: "room-1-105", outlets: 5, lights: 4 },
          { roomId: "room-1-102", outlets: 2 },
        ],
      },
      {
        id: "breaker-1-2-3",
        name: "QF8 - Серверная (спец. питание)",
        rating: "32A",
        types: { lighting: false, socket: true, special: true },
        isOn: true,
        powers: [{ roomId: "room-1-106", outlets: 8, lights: 2 }],
      },
    ],
  },
  {
    id: "panel-1-3",
    name: "ЩО-1-2",
    type: "lighting",
    location: "Коридор восточного крыла",
    breakers: [
      {
        id: "breaker-1-3-1",
        name: "QF10 - Переговорные (освещение)",
        rating: "16A",
        types: { lighting: true, socket: false, special: false },
        isOn: true,
        powers: [
          { roomId: "room-1-104", lights: 6 },
          { roomId: "room-1-107", lights: 4 },
        ],
      },
      {
        id: "breaker-1-3-2",
        name: "QF11 - Офисы (розетки + свет)",
        rating: "20A",
        types: { lighting: true, socket: true, special: false },
        isOn: true,
        powers: [
          { roomId: "room-1-103", outlets: 3, lights: 1 },
          { roomId: "room-1-108", outlets: 4, lights: 5 },
          { roomId: "room-1-107", outlets: 3 },
        ],
      },
      {
        id: "breaker-1-3-3",
        name: "QF12 - Аварийное освещение",
        rating: "10A",
        types: { lighting: true, socket: false, special: true },
        isOn: true,
        powers: [
          { roomId: "room-1-102", lights: 3 },
          { roomId: "room-1-104", lights: 2 },
          { roomId: "room-1-107", lights: 1 },
        ],
      },
    ],
  },
];
