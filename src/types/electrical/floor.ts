import type { Room } from "./room";
import type { Panel } from "./panel";

export interface Floor {
  id: string;
  name: string;
  level: number;
  rooms: Room[];
  panels: Panel[];
}


