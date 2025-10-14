import { floor3Rooms } from "./rooms";
import { floor3Panel4 } from "./panel4";
import { floor3Panel5 } from "./panel5";
import type { Floor } from "../../../../types";

export const floor3: Floor = {
  id: "floor-1-3",
  name: "Третий этаж",
  level: 3,
  rooms: floor3Rooms,
  panels: [
    {
      id: "panel-3-4",
      name: "ЩО-4",
      location: "холл на входе, возле лестницы",
      breakers: floor3Panel4,
    },
    {
      id: "panel-3-5",
      name: "ЩО-5",
      location: "холл на входе, возле лестницы",
      breakers: floor3Panel5,
    },
  ],
};
