import type { Building } from "../../../types";
import { floors } from "./floors/index";

export const building2: Building = {
  id: "building-2",
  name: "Второе здание",
  address: "ул. Примерочная, 666",
  floors: floors,
};
