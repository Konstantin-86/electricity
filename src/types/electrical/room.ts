export type RoomType =
  | "office"
  | "corridor"
  | "conference"
  | "bathroom"
  | "kitchen"
  | "storage"
  | "technical"
  | "other";

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  area: number;
}
