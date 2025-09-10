import type { Room } from "./room";
import type { Panel } from "./panel";
import type { LightFixtureInstance, OutletInstance } from "./points";

export interface Floor {
  id: string;
  name: string;
  level: number;
  rooms: Room[];
  panels: Panel[];
  points: (OutletInstance | LightFixtureInstance)[];
}
