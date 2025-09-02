export type RoomType =
  | "office"
  | "corridor"
  | "conference"
  | "bathroom"
  | "kitchen"
  | "storage"
  | "technical"
  | "other";

// Простая лампа
export interface Lamp {
  id: string;
  wattage: number; // Мощность в Ваттах
  type?: "led" | "incandescent" | "fluorescent"; // Тип лампы (опционально)
}

// Простой светильник
export interface LightFixture {
  id: string;
  name: string;
  fixtureType?: "ceiling" | "wall" | "emergency";
  lampIds: Lamp[];
}

// Простая розеточная группа
export interface OutletGroup {
  id: string;
  name?: string; // Например: "рабочие розетки", "розетки у окна"
  count: number; // Количество розеток в группе
  estimatedLoad?: number; // Предполагаемая нагрузка (Вт) - можно добавить позже
}

// Помещение
export interface Room {
  id: string;
  name: string;
  type: RoomType;
  area: number;
  outletGroups: OutletGroup[]; // Группы розеток вместо простого числа
  lightFixtures: LightFixture[]; // Светильники вместо простого числа
}
