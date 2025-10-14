import type { FixtureKey } from "./fixture";

export type RoomType =
  | "office"
  | "corridor"
  | "conference"
  | "bathroom"
  | "kitchen"
  | "storage"
  | "technical"
  | "other";

export interface RoomLighting {
  count: number;
  fixtureType: FixtureKey;
}

export interface RoomOutlets {
  count: number;
}

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  area: number;
  lighting?: RoomLighting;
  outlets?: RoomOutlets;
}
