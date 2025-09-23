import { LAMP_KEYS } from "../../types";
import {
  FIXTURE_KEYS,
  type FixtureKey,
  type LightFixture,
} from "../../types/electrical/fixture";

export const fixtureTemplates: { [key in FixtureKey]?: LightFixture } = {
  [FIXTURE_KEYS.OFFICE_PANEL_2x36W]: {
    id: "industrial-4x58w",
    name: "Потолочная LED панель 600x600",
    fixtureType: "ceiling",
    lampIds: [LAMP_KEYS.LED_36W, "fluorescent-36w"],
    technicalInfo: {
      model: "OfficeLight Pro",
      socketType: "Built-in",
      luminousFlux: 7200,
      lifespan: 30000,
      safetyStandards: "IP20, IK08",
    },
  },

  [FIXTURE_KEYS.LED_PANEL_SINGLE_40W]: {
    id: FIXTURE_KEYS.LED_PANEL_SINGLE_40W,
    name: "LED панель 300x300",
    fixtureType: "ceiling",
    lampIds: [LAMP_KEYS.LED_PANEL_40W],
    technicalInfo: {
      model: "UniPanel Slim",
      socketType: "Built-in",
      luminousFlux: 3600,
      lifespan: 30000,
      safetyStandards: "IP20",
    },
  },

  [FIXTURE_KEYS.LINEAR_4x18W]: {
    id: FIXTURE_KEYS.LINEAR_4x18W,
    name: "Линейный светильник 1200mm",
    fixtureType: "ceiling",
    lampIds: [
      LAMP_KEYS.LED_18W,
      LAMP_KEYS.LED_18W,
      LAMP_KEYS.LED_18W,
      LAMP_KEYS.LED_18W,
    ],
    technicalInfo: {
      model: "Linia 1200",
      socketType: "G13",
      luminousFlux: 7200,
      lifespan: 25000,
      safetyStandards: "IP40",
    },
  },

  [FIXTURE_KEYS.WALL_SCONCE_2x7W]: {
    id: FIXTURE_KEYS.WALL_SCONCE_2x7W,
    name: "Настенный бра с спотами",
    fixtureType: "wall",
    lampIds: [LAMP_KEYS.LED_SPOT_7W, LAMP_KEYS.LED_SPOT_7W],
    technicalInfo: {
      model: "DecorWall GU10",
      socketType: "GU10",
      luminousFlux: 1200,
      lifespan: 25000,
      safetyStandards: "IP44",
    },
  },

  [FIXTURE_KEYS.EMERGENCY_EXIT_SIGN]: {
    id: FIXTURE_KEYS.EMERGENCY_EXIT_SIGN,
    name: "Аварийный указатель выхода",
    fixtureType: "emergency",
    lampIds: [LAMP_KEYS.EMERGENCY_10W],
    technicalInfo: {
      model: "ExitSign Pro",
      socketType: "Built-in",
      luminousFlux: 800,
      lifespan: 20000,
      safetyStandards: "IP54, IK07",
    },
  },

  [FIXTURE_KEYS.EMERGENCY_LUMINAIRE]: {
    id: FIXTURE_KEYS.EMERGENCY_LUMINAIRE,
    name: "Аварийный светильник",
    fixtureType: "emergency",
    lampIds: [LAMP_KEYS.EMERGENCY_15W],
    technicalInfo: {
      model: "EmergencyLite 15W",
      socketType: "Built-in",
      luminousFlux: 1200,
      lifespan: 20000,
      safetyStandards: "IP65, IK08",
    },
  },

  [FIXTURE_KEYS.RECESSED_SPOT_10W]: {
    id: FIXTURE_KEYS.RECESSED_SPOT_10W,
    name: "Встраиваемый спот",
    fixtureType: "ceiling",
    lampIds: [LAMP_KEYS.LED_SPOT_10W],
    technicalInfo: {
      model: "SpotMaster MR16",
      socketType: "GU5.3",
      luminousFlux: 850,
      lifespan: 25000,
      safetyStandards: "IP20",
    },
  },

  [FIXTURE_KEYS.FLUORESCENT_2x36W]: {
    id: FIXTURE_KEYS.FLUORESCENT_2x36W,
    name: "Люминесцентный светильник 1200mm",
    fixtureType: "ceiling",
    lampIds: [LAMP_KEYS.FLUORESCENT_36W, LAMP_KEYS.FLUORESCENT_36W],
    technicalInfo: {
      model: "LumiTube T8",
      socketType: "G13",
      luminousFlux: 6700,
      lifespan: 8000,
      safetyStandards: "IP20",
    },
  },

  [FIXTURE_KEYS.INDUSTRIAL_4x58W]: {
    id: FIXTURE_KEYS.INDUSTRIAL_4x58W,
    name: "Промышленный светильник",
    fixtureType: "ceiling",
    lampIds: [
      LAMP_KEYS.FLUORESCENT_58W,
      LAMP_KEYS.FLUORESCENT_58W,
      LAMP_KEYS.FLUORESCENT_58W,
      LAMP_KEYS.FLUORESCENT_58W,
    ],
    technicalInfo: {
      model: "IndustrialMax T5",
      socketType: "G5",
      luminousFlux: 20800,
      lifespan: 8000,
      safetyStandards: "IP65, IK10",
    },
  },

  [FIXTURE_KEYS.PENDANT_LIGHT_3x18W]: {
    id: FIXTURE_KEYS.PENDANT_LIGHT_3x18W,
    name: "Подвесной светильник",
    fixtureType: "ceiling",
    lampIds: [LAMP_KEYS.LED_18W, LAMP_KEYS.LED_18W, LAMP_KEYS.LED_18W],
    technicalInfo: {
      model: "PendantStyle E27",
      socketType: "E27",
      luminousFlux: 5400,
      lifespan: 25000,
      safetyStandards: "IP20",
    },
  },

  [FIXTURE_KEYS.DECORATIVE_CHANDELIER_6x40W]: {
    id: FIXTURE_KEYS.DECORATIVE_CHANDELIER_6x40W,
    name: "Декоративная люстра",
    fixtureType: "ceiling",
    lampIds: [
      LAMP_KEYS.LED_PANEL_40W,
      LAMP_KEYS.LED_PANEL_40W,
      LAMP_KEYS.LED_PANEL_40W,
      LAMP_KEYS.LED_PANEL_40W,
      LAMP_KEYS.LED_PANEL_40W,
      LAMP_KEYS.LED_PANEL_40W,
    ],
    technicalInfo: {
      model: "Crystal Chandelier",
      socketType: "E27",
      luminousFlux: 21600,
      lifespan: 25000,
      safetyStandards: "IP20",
    },
  },
};
