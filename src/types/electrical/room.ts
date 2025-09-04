export type RoomType =
  | "office"
  | "corridor"
  | "conference"
  | "bathroom"
  | "kitchen"
  | "storage"
  | "technical"
  | "other";

export interface LightFixtureTechnicalInfo {
  model?: string;

  socketType?:
    | "E27"
    | "E14"
    | "E40" // Эдисоновские цоколи
    | "GU10"
    | "GU5.3"
    | "G4" // Штырьковые цоколи
    | "GX53"
    | "G13"
    | "G5" // Линейные и другие
    | "B22"
    | "B15" // Байонетные
    | "special"; // Специальный
  socketQuantity?: number; // Количество цоколей
  socketDescription?: string; // Описание цоколя (если special)

  //Световой поток
  luminousFlux?: number;

  // Срок службы
  lifespan?: number; // Часы

  //IP
  safetyStandards?: string;
}

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
  technicalInfo?: LightFixtureTechnicalInfo;
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
