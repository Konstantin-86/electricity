import type { Building } from "../../../types";
import { floors } from "./floors/index";

export const building2: Building = {
  id: "building-2",
  name: "Офисное здание А",
  address: "ул. Примерная, 123",
  floors: floors,
};
