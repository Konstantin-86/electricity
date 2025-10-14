import type { Breaker } from "./breaker";

export interface Panel {
  id: string;
  name: string;
  location: string;
  breakers: Breaker[];
}
