import { floor1Rooms } from "./rooms";
import { floor1Panels } from "./panels";
import type { Floor } from "../../../../types";
import { electricalInstances } from "./pointsRooms";

export const floor1: Floor = {
  id: "floor-1",
  name: "Первый этаж",
  level: 1,
  rooms: floor1Rooms,
  panels: floor1Panels,
  points: electricalInstances,
};
