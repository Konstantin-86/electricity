import { floor2Rooms } from "./rooms";
import { floor2Panels } from "./panels";
import type { Floor } from "../../../../types";

export const floor2: Floor = {
  id: "floor-2",
  name: "Второй этаж",
  level: 2,
  rooms: floor2Rooms,
  panels: floor2Panels,
};
