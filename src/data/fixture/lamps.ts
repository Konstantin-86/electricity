import type { Lamp } from "../../types/electrical/fixture";

export const lampTemplates: { [key: string]: Lamp } = {
  // LED освещение
  LED_18W: {
    id: "lamp-led-18w",
    wattage: 18,
    type: "led",
    colorTemperature: 4000,
    lumens: 1800,
    lifespan: 25000,
    manufacturer: "Philips",
    model: "LEDbulb E27",
    baseType: "E27",
  },

  LED_24W: {
    id: "lamp-led-24w",
    wattage: 24,
    type: "led",
    colorTemperature: 4000,
    lumens: 2400,
    lifespan: 25000,
    manufacturer: "Osram",
    model: "SubstiTUBE T8",
    baseType: "G13",
  },

  LED_36W: {
    id: "lamp-led-36w",
    wattage: 36,
    type: "led",
    colorTemperature: 4000,
    lumens: 3600,
    lifespan: 25000,
    manufacturer: "Gauss",
    model: "Panel 600x600",
    baseType: "Built-in",
  },

  // Люминесцентные лампы
  FLUORESCENT_58W: {
    id: "lamp-fluorescent-58w",
    wattage: 58,
    type: "fluorescent",
    colorTemperature: 6500,
    lumens: 5200,
    lifespan: 8000,
    manufacturer: "Philips",
    model: "TL-D 58W",
    baseType: "G13",
  },

  FLUORESCENT_36W: {
    id: "lamp-fluorescent-36w",
    wattage: 36,
    type: "fluorescent",
    colorTemperature: 6500,
    lumens: 3350,
    lifespan: 8000,
    manufacturer: "Osram",
    model: "LUMILUX T8",
    baseType: "G13",
  },

  // Аварийное освещение
  EMERGENCY_10W: {
    id: "lamp-emergency-10w",
    wattage: 10,
    type: "led",
    colorTemperature: 6000,
    lumens: 800,
    lifespan: 20000,
    manufacturer: "Schneider Electric",
    model: "Emergency Light",
    baseType: "Built-in",
  },

  EMERGENCY_15W: {
    id: "lamp-emergency-15w",
    wattage: 15,
    type: "led",
    colorTemperature: 6000,
    lumens: 1200,
    lifespan: 20000,
    manufacturer: "ABB",
    model: "Emergency Panel",
    baseType: "Built-in",
  },

  // Галогенные лампы
  HALOGEN_50W: {
    id: "lamp-halogen-50w",
    wattage: 50,
    type: "halogen",
    colorTemperature: 3000,
    lumens: 900,
    lifespan: 2000,
    manufacturer: "Philips",
    model: "Halogena ES",
    baseType: "E14",
  },

  HALOGEN_35W: {
    id: "lamp-halogen-35w",
    wattage: 35,
    type: "halogen",
    colorTemperature: 3000,
    lumens: 600,
    lifespan: 2000,
    manufacturer: "Osram",
    model: "HALOSTAR",
    baseType: "GU10",
  },

  // LED споты
  LED_SPOT_7W: {
    id: "lamp-led-spot-7w",
    wattage: 7,
    type: "led",
    colorTemperature: 2700,
    lumens: 600,
    lifespan: 25000,
    manufacturer: "Gauss",
    model: "Spot LED",
    baseType: "GU10",
  },

  LED_SPOT_10W: {
    id: "lamp-led-spot-10w",
    wattage: 10,
    type: "led",
    colorTemperature: 2700,
    lumens: 850,
    lifespan: 25000,
    manufacturer: "Philips",
    model: "CorePro Spot",
    baseType: "GU5.3",
  },

  // LED панели
  LED_PANEL_40W: {
    id: "lamp-led-panel-40w",
    wattage: 40,
    type: "led",
    colorTemperature: 4000,
    lumens: 3600,
    lifespan: 30000,
    manufacturer: "Uniel",
    model: "LED Panel",
    baseType: "Built-in",
  },

  LED_PANEL_60W: {
    id: "lamp-led-panel-60w",
    wattage: 60,
    type: "led",
    colorTemperature: 4000,
    lumens: 5400,
    lifespan: 30000,
    manufacturer: "Camelion",
    model: "Office Panel",
    baseType: "Built-in",
  },

  // Энергосберегающие
  ENERGY_SAVING_15W: {
    id: "lamp-energy-saving-15w",
    wattage: 15,
    type: "energy-saving",
    colorTemperature: 2700,
    lumens: 1350,
    lifespan: 15000,
    manufacturer: "Philips",
    model: "Genie",
    baseType: "E27",
  },

  ENERGY_SAVING_20W: {
    id: "lamp-energy-saving-20w",
    wattage: 20,
    type: "energy-saving",
    colorTemperature: 2700,
    lumens: 1800,
    lifespan: 15000,
    manufacturer: "Osram",
    model: "Dulux",
    baseType: "E27",
  },

  // Лампы накаливания
  INCANDESCENT_60W: {
    id: "lamp-incandescent-60w",
    wattage: 60,
    type: "incandescent",
    colorTemperature: 2700,
    lumens: 700,
    lifespan: 1000,
    manufacturer: "General Electric",
    model: "Classic",
    baseType: "E27",
  },

  INCANDESCENT_100W: {
    id: "lamp-incandescent-100w",
    wattage: 100,
    type: "incandescent",
    colorTemperature: 2700,
    lumens: 1300,
    lifespan: 1000,
    manufacturer: "Philips",
    model: "Standard",
    baseType: "E27",
  },
};
