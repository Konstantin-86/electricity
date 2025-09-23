import type { FixtureKey } from "./fixture";

interface ElectricalPoint {
  id: string;
  roomId: string;
  type: "outlet" | "light";
}

export interface OutletInstance extends ElectricalPoint {
  type: "outlet";
  count: number;
  estimatedLoad: number;
}

export interface LightFixtureInstance extends ElectricalPoint {
  type: "light";
  template: FixtureKey;
}
