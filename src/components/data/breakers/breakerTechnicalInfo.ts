// breakerTechnicalInfo.ts
import type { IBreaker } from "../../../types/index";

// Экспортируем готовые объекты technicalInfo
export const techInfoTemplates: { [key: string]: IBreaker["technicalInfo"] } = {
  // ABB Освещение
  ABB_LIGHTING_16A: {
    manufacturer: "ABB",
    model: "S203",
    characteristic: "C",
    breakingCapacity: 10,
    polesCount: 1,
    ratedVoltage: 230,
    installationDate: "2024-01-15",
    status: "active",
  },

  // ABB Розетки
  ABB_SOCKET_16A: {
    manufacturer: "ABB",
    model: "S203",
    characteristic: "C",
    breakingCapacity: 10,
    polesCount: 2, // Для розеток чаще 2 полюса
    ratedVoltage: 230,
    installationDate: "2024-01-15",
    status: "active",
  },

  // Schneider Electric
  SCHNEIDER_IC60N: {
    manufacturer: "Schneider Electric",
    model: "iC60N",
    characteristic: "C",
    breakingCapacity: 6,
    polesCount: 2,
    ratedVoltage: 230,
    installationDate: "2024-01-15",
    status: "active",
  },

  // IEK (для резерва или менее критичных нагрузок)
  IEK_BA47_29: {
    manufacturer: "IEK",
    model: "ВА47-29",
    characteristic: "C",
    breakingCapacity: 4.5,
    polesCount: 2,
    ratedVoltage: 230,
    installationDate: "2024-01-15",
    status: "active",
  },

  // ABB для мощных нагрузок
  ABB_HEAVY_DUTY_32A: {
    manufacturer: "ABB",
    model: "S204",
    characteristic: "D",
    breakingCapacity: 15,
    polesCount: 2,
    ratedVoltage: 230,
    installationDate: "2024-02-20",
    status: "active",
  },

  // Schneider для аварийного освещения
  SCHNEIDER_EMERGENCY: {
    manufacturer: "Schneider Electric",
    model: "Acti9",
    characteristic: "B",
    breakingCapacity: 6,
    polesCount: 1,
    ratedVoltage: 230,
    installationDate: "2024-01-15",
    status: "active",
  },
};
