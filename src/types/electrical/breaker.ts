export interface Breaker {
  id: string;
  designation: string;
  description: string;
  isOn: boolean;
  controlledRooms: string[];
  rating: number; // Изменим на number для удобства расчетов (например, 16 вместо "16A")
  technicalInfo?: BreakerInfo;
}

export interface BreakerInfo {
  manufacturer?: string; // Производитель ("ABB", "Schneider Electric", "IEK")
  model?: string; // Модель ("S201", "iC60N")
  serialNumber?: string; // Серийный номер для учета
  characteristic?: "B" | "C" | "D"; // Характеристика срабатывания
}
