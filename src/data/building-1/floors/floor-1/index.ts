import { floor1Rooms } from "./rooms";
import type { Floor } from "../../../../types";
import { floor1Panel1 } from "./panel1";
import { floor1PanelKitchen } from "./panel1Kitchen";

export const floor1: Floor = {
  id: "floor-1-1", // здание 1, этаж 1
  name: "Первый этаж",
  level: 1,
  rooms: floor1Rooms,
  panels: [
    {
      id: "panel-1-1",
      name: "ЩО-1",
      location: "холл на входе, возле лестницы",
      breakers: floor1Panel1,
    },
    {
      id: "panel-3-5",
      name: "ЩО-1-Кухня",
      location: "Кухня корридор",
      breakers: floor1PanelKitchen,
    },
  ],
};
