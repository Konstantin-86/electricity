import type { Room } from "../../../../types";
import { ROOM_IDS_1_FLOOR } from "./roomID";

export const floor1Rooms: Room[] = [
  {
    id: ROOM_IDS_1_FLOOR.HALL_CORRIDOR,
    name: "Холл Коридор",
    type: "corridor",
    area: 28,
  },
  {
    id: ROOM_IDS_1_FLOOR.STAIRS,
    name: "Лестница",
    type: "conference",
    area: 45,
  },
  {
    id: ROOM_IDS_1_FLOOR.TOILET,
    name: "Туалет",
    type: "bathroom",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.WASHROOM,
    name: "Умывальня",
    type: "bathroom",
    area: 18,
  },
  {
    id: ROOM_IDS_1_FLOOR.DRESSING_ROOM,
    name: "Раздевалка",
    type: "office",
    area: 18,
  },
  {
    id: ROOM_IDS_1_FLOOR.SENIOR_ROOM,
    name: "Помещение старшего смены",
    type: "office",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.CHECKPOINT,
    name: "Проходная",
    type: "corridor",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.STORAGE_SOCKETS,
    name: "Розетки кладовка (прием пищи)",
    type: "other",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.EMERGENCY_LIGHTING,
    name: "Дежурное освещение",
    type: "corridor",
    area: 12,
  },
  {
    id: ROOM_IDS_1_FLOOR.VIP_DINING,
    name: "Столовая VIP",
    type: "kitchen",
    area: 35,
  },
  {
    id: ROOM_IDS_1_FLOOR.FLOUR_WORKSHOP,
    name: "Мучной цех",
    type: "technical",
    area: 25,
  },
  {
    id: ROOM_IDS_1_FLOOR.VEGETABLE_WORKSHOP,
    name: "Овощной цех",
    type: "technical",
    area: 22,
  },
  {
    id: ROOM_IDS_1_FLOOR.HOT_WORKSHOP,
    name: "Горячий цех",
    type: "technical",
    area: 30,
  },
  {
    id: ROOM_IDS_1_FLOOR.STAFF_ROOM,
    name: "Комната для персонала",
    type: "office",
    area: 15,
  },
  {
    id: ROOM_IDS_1_FLOOR.MEAT_WORKSHOP,
    name: "Мясной цех",
    type: "technical",
    area: 20,
  },
  {
    id: ROOM_IDS_1_FLOOR.SHOWER,
    name: "Душевая",
    type: "bathroom",
    area: 10,
  },
  {
    id: ROOM_IDS_1_FLOOR.DRY_PRODUCTS_STORAGE,
    name: "Кладовая сухих продуктов",
    type: "storage",
    area: 18,
  },
  {
    id: ROOM_IDS_1_FLOOR.DINING_TOILET,
    name: "Туалет столовая",
    type: "bathroom",
    area: 8,
  },
  {
    id: ROOM_IDS_1_FLOOR.REFRIGERATION,
    name: "Холодильное отделение",
    type: "storage",
    area: 20,
  },
  {
    id: ROOM_IDS_1_FLOOR.HEAD_OFFICE,
    name: "Кабинет заведующей",
    type: "office",
    area: 16,
  },
  {
    id: ROOM_IDS_1_FLOOR.CLEANING_STORAGE,
    name: "Кладовая уборочного инвентаря",
    type: "storage",
    area: 6,
  },
  {
    id: ROOM_IDS_1_FLOOR.DINING_CORRIDOR,
    name: "Коридор столовая",
    type: "corridor",
    area: 15,
  },
  {
    id: ROOM_IDS_1_FLOOR.BASEMENT,
    name: "Подвал",
    type: "corridor",
    area: 15,
  },
  {
    id: ROOM_IDS_1_FLOOR.DINING,
    name: "Обеденный зал",
    type: "kitchen",
    area: 15,
  },
];
