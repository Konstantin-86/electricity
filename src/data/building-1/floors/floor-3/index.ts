import { floor3Rooms } from "./rooms";
import { floor3Panels } from "./panels";
import type { Floor } from "../../../../types";
import { electricalInstances3Floor } from "./pointsRooms";

export const floor3: Floor = {
  id: "floor-1-3", // здание 1, этаж 3
  name: "Третий этаж",
  level: 3,
  rooms: floor3Rooms,
  panels: floor3Panels,
  points: electricalInstances3Floor,
};
