export interface IBreaker {
  id: string;
  designation: string;
  description: string;
  rating: number; // Изменим на number для удобства расчетов (например, 16 вместо "16A")
  type: "lighting" | "socket" | "mixed"; // Упростим тип
  isOn: boolean;
  // Связи с нагрузками (вместо rooms)
  controlledLoads?: {
    roomId?: string;
    lightFixtureIds?: string[]; // Какие светильники управляет
    outletGroupIds?: string[]; // Какие группы розеток управляет
  }[];

  technicalInfo?: IBreakerTechnicalInfo;
}

export interface IBreakerTechnicalInfo {
  // Основная информация
  manufacturer?: string; // Производитель ("ABB", "Schneider Electric", "IEK")
  model?: string; // Модель ("S201", "iC60N")
  serialNumber?: string; // Серийный номер для учета

  // Технические характеристики
  characteristic?: "B" | "C" | "D"; // Характеристика срабатывания
  breakingCapacity?: number; // Отключающая способность в кА (6, 10, 15)
  polesCount?: number; // Количество полюсов (1, 2, 3, 4)
  ratedVoltage?: number; // Номинальное напряжение (В)

  // Даты
  installationDate?: string;
  lastMaintenanceDate?: string;
  nextMaintenanceDate?: string;
  warrantyUntil?: string;

  // Статус и обслуживание
  status?: "active" | "inactive" | "maintenance" | "faulty";
  maintenanceComments?: string;

  // Дополнительно
  comments?: string;
  documentationLink?: string;
}
