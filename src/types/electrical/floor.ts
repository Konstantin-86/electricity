import type { Panel } from "./panel";
import type { Room } from "./room";

export interface Floor {
  id: string;
  name: string;
  level: number;
  rooms: Room[];
  panels: Panel[];
}
