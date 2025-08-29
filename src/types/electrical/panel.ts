import type { Breaker } from "./breaker";

export type PanelType = "lighting" | "power" | "emergency" | "distribution";

export interface Panel {
  id: string;
  name: string;
  type: PanelType;
  location: string;
  breakers: Breaker[];
}
