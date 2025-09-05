import type { LightFixture } from "../../types/electrical/fixture";
import { lampTemplates } from "./lamps";

export const fixtureTemplates: { [key: string]: LightFixture } = {
  // Офисные потолочные светильники
  OFFICE_PANEL_2x36W: {
    id: "fixture-office-panel-2x36w",
    name: "Потолочная LED панель 600x600",
    fixtureType: "ceiling",
    lampIds: [lampTemplates.LED_18W, lampTemplates.LED_36W],
    technicalInfo: {
      model: "OfficeLight Pro",
      socketType: "Built-in",
      luminousFlux: 7200,
      lifespan: 30000,
      safetyStandards: "IP20, IK08",
    },
  },

  LED_PANEL_SINGLE_40W: {
    id: "fixture-led-panel-single-40w",
    name: "LED панель 300x300",
    fixtureType: "ceiling",
    lampIds: [lampTemplates.LED_PANEL_40W],
    technicalInfo: {
      model: "UniPanel Slim",
      socketType: "Built-in",
      luminousFlux: 3600,
      lifespan: 30000,
      safetyStandards: "IP20",
    },
  },

  // Линейные светильники
  LINEAR_4x18W: {
    id: "fixture-linear-4x18w",
    name: "Линейный светильник 1200mm",
    fixtureType: "ceiling",
    lampIds: [
      lampTemplates.LED_18W,
      lampTemplates.LED_18W,
      lampTemplates.LED_18W,
      lampTemplates.LED_18W,
    ],
    technicalInfo: {
      model: "Linia 1200",
      socketType: "G13",
      luminousFlux: 7200,
      lifespan: 25000,
      safetyStandards: "IP40",
    },
  },

  // Настенные светильники
  WALL_SCONCE_2x7W: {
    id: "fixture-wall-sconce-2x7w",
    name: "Настенный бра с спотами",
    fixtureType: "wall",
    lampIds: [lampTemplates.LED_SPOT_7W, lampTemplates.LED_SPOT_7W],
    technicalInfo: {
      model: "DecorWall GU10",
      socketType: "GU10",
      luminousFlux: 1200,
      lifespan: 25000,
      safetyStandards: "IP44",
    },
  },

  // Аварийное освещение
  EMERGENCY_EXIT_SIGN: {
    id: "fixture-emergency-exit-sign",
    name: "Аварийный указатель выхода",
    fixtureType: "emergency",
    lampIds: [lampTemplates.EMERGENCY_10W],
    technicalInfo: {
      model: "ExitSign Pro",
      socketType: "Built-in",
      luminousFlux: 800,
      lifespan: 20000,
      safetyStandards: "IP54, IK07",
    },
  },

  EMERGENCY_LUMINAIRE: {
    id: "fixture-emergency-luminaire",
    name: "Аварийный светильник",
    fixtureType: "emergency",
    lampIds: [lampTemplates.EMERGENCY_15W],
    technicalInfo: {
      model: "EmergencyLite 15W",
      socketType: "Built-in",
      luminousFlux: 1200,
      lifespan: 20000,
      safetyStandards: "IP65, IK08",
    },
  },

  // Точечные светильники
  RECESSED_SPOT_10W: {
    id: "fixture-recessed-spot-10w",
    name: "Встраиваемый спот",
    fixtureType: "ceiling",
    lampIds: [lampTemplates.LED_SPOT_10W],
    technicalInfo: {
      model: "SpotMaster MR16",
      socketType: "GU5.3",
      luminousFlux: 850,
      lifespan: 25000,
      safetyStandards: "IP20",
    },
  },

  // Люминесцентные светильники
  FLUORESCENT_2x36W: {
    id: "fixture-fluorescent-2x36w",
    name: "Люминесцентный светильник 1200mm",
    fixtureType: "ceiling",
    lampIds: [lampTemplates.FLUORESCENT_36W, lampTemplates.FLUORESCENT_36W],
    technicalInfo: {
      model: "LumiTube T8",
      socketType: "G13",
      luminousFlux: 6700,
      lifespan: 8000,
      safetyStandards: "IP20",
    },
  },

  // Промышленные светильники
  INDUSTRIAL_4x58W: {
    id: "fixture-industrial-4x58w",
    name: "Промышленный светильник",
    fixtureType: "ceiling",
    lampIds: [
      lampTemplates.FLUORESCENT_58W,
      lampTemplates.FLUORESCENT_58W,
      lampTemplates.FLUORESCENT_58W,
      lampTemplates.FLUORESCENT_58W,
    ],
    technicalInfo: {
      model: "IndustrialMax T5",
      socketType: "G5",
      luminousFlux: 20800,
      lifespan: 8000,
      safetyStandards: "IP65, IK10",
    },
  },

  // Декоративные светильники
  PENDANT_LIGHT_3x18W: {
    id: "fixture-pendant-light-3x18w",
    name: "Подвесной светильник",
    fixtureType: "ceiling",
    lampIds: [
      lampTemplates.LED_18W,
      lampTemplates.LED_18W,
      lampTemplates.LED_18W,
    ],
    technicalInfo: {
      model: "PendantStyle E27",
      socketType: "E27",
      luminousFlux: 5400,
      lifespan: 25000,
      safetyStandards: "IP20",
    },
  },
};
