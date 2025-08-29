import type { Floor } from "./floor";

export interface Building {
  id: string;
  name: string;
  address: string;
  floors: Floor[];
}
