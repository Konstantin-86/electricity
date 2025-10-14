import { floor2Rooms } from "./rooms";
import type { Floor } from "../../../../types";
import { floor2Panel3 } from "./panel3";
import { floor2Panel2 } from "./panel2";

export const floor2: Floor = {
  id: "floor-1-2",
  name: "Второй этаж",
  level: 2,
  rooms: floor2Rooms,
  panels: [
    {
      id: "panel-2-2",
      name: "ЩО-2",
      location: "холл на входе, возле лестницы",
      breakers: floor2Panel2,
    },
    {
      id: "panel-2-3",
      name: "ЩО-3",
      location: "холл на входе, возле лестницы",
      breakers: floor2Panel3,
    },
  ],
};
