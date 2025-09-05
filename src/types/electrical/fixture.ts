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
    | "Built-in"
    | "B15" // Байонетные
    | "special"; // Специальный
  socketDescription?: string; // Описание цоколя (если special)
  //Световой поток
  luminousFlux?: number;
  // Срок службы
  lifespan?: number; // Часы
  //IP
  safetyStandards?: string;
}

export interface Lamp {
  id: string;
  wattage: number;
  type?: "led" | "fluorescent" | "halogen" | "incandescent" | "energy-saving";
  colorTemperature?: number; // Цветовая температура в Кельвинах
  lumens?: number; // Световой поток в люменах
  lifespan?: number; // Срок службы в часах
  manufacturer?: string; // Производитель
  model?: string; // Модель
  baseType?: string; // Тип цоколя (E27, E14, GU10, etc.)
}

export interface LightFixture {
  id: string;
  name: string;
  fixtureType?: "ceiling" | "wall" | "emergency";
  lampIds: Lamp[];
  technicalInfo?: LightFixtureTechnicalInfo;
}
