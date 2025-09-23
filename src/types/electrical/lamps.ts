export interface Lamp {
  id: LampKey;
  wattage: number;
  type?: "led" | "fluorescent" | "halogen" | "incandescent" | "energy-saving";
  colorTemperature?: number;
  lumens?: number;
  lifespan?: number;
  manufacturer?: string;
  model?: string;
  baseType?: string;
}

// lamp-keys.ts
export const LAMP_KEYS = {
  // LED лампы
  LED_18W: "led-18w",
  LED_36W: "led-36w",
  LED_PANEL_40W: "led-panel-40w",
  LED_SPOT_7W: "led-spot-7w",
  LED_SPOT_10W: "led-spot-10w",

  // Аварийные лампы
  EMERGENCY_10W: "emergency-10w",
  EMERGENCY_15W: "emergency-15w",

  // Люминесцентные лампы
  FLUORESCENT_36W: "fluorescent-36w",
  FLUORESCENT_58W: "fluorescent-58w",
} as const;

export type LampKey = (typeof LAMP_KEYS)[keyof typeof LAMP_KEYS];
