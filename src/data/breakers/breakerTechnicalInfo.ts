import type { BreakerInfo } from "../../types";

export const breakersTemplate: { [key: string]: BreakerInfo } = {
  ABB_LIGHTING_16A: {
    manufacturer: "ABB",
    model: "S203",
    characteristic: "C",
  },

  ABB_SOCKET_16A: {
    manufacturer: "ABB",
    model: "S203",
    characteristic: "C",
  },

  SCHNEIDER_IC60N: {
    manufacturer: "Schneider Electric",
    model: "iC60N",
    characteristic: "C",
  },

  IEK_BA47_29: {
    manufacturer: "IEK",
    model: "ВА47-29",
    characteristic: "C",
  },

  // ABB для мощных нагрузок
  ABB_HEAVY_DUTY_32A: {
    manufacturer: "ABB",
    model: "S204",
    characteristic: "D",
  },

  // Schneider для аварийного освещения
  SCHNEIDER_EMERGENCY: {
    manufacturer: "Schneider Electric",
    model: "Acti9",
    characteristic: "B",
  },
};
