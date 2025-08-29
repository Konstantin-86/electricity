import { floor1Rooms } from "./rooms";
import { floor2Panels } from "./panels";
import type { Floor } from "../../../../../types";

export const floor2: Floor = {
  id: "floor-1",
  name: "Первый этаж",
  level: 1,
  rooms: floor1Rooms,
  panels: floor2Panels,
};
