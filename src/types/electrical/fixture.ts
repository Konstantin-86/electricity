import type { LampKey } from "./lamps";

export interface LightFixtureTechnicalInfo {
  model?: string;
  socketType?:
    | "E27"
    | "E14"
    | "E40"
    | "GU10"
    | "GU5.3"
    | "G4"
    | "GX53"
    | "G13"
    | "G5"
    | "B22"
    | "Built-in"
    | "B15"
    | "special";
  socketDescription?: string;
  luminousFlux?: number;
  lifespan?: number;
  safetyStandards?: string;
}

export interface LightFixture {
  id: FixtureKey;
  name: string;
  fixtureType?: "ceiling" | "wall" | "emergency";
  lampIds: LampKey[];
  technicalInfo?: LightFixtureTechnicalInfo;
}

// fixture-keys.ts
export const FIXTURE_KEYS = {
  // Офисные потолочные светильники
  OFFICE_PANEL_2x36W: "office-panel-2x36w",
  LED_PANEL_SINGLE_40W: "led-panel-single-40w",

  // Линейные светильники
  LINEAR_4x18W: "linear-4x18w",

  INDUSTRIAL_LUMINAIRE_2x58W: "industrial-luminaire-2x58w",
  WATERPROOF_LUMINAIRE_1x20W: "waterproof-luminaire-1x20w",
  LOW_TEMP_LUMINAIRE_2x36W: "low-temp-luminaire-2x36w",

  // Настенные светильники
  WALL_SCONCE_2x7W: "wall-sconce-2x7w",

  // Аварийное освещение
  EMERGENCY_EXIT_SIGN: "emergency-exit-sign",
  EMERGENCY_LUMINAIRE: "emergency-luminaire",

  // Точечные светильники
  RECESSED_SPOT_10W: "recessed-spot-10w",

  // Люминесцентные светильники
  FLUORESCENT_2x36W: "fluorescent-2x36w",

  // Промышленные светильники
  INDUSTRIAL_4x58W: "industrial-4x58w",

  // Декоративные светильники
  PENDANT_LIGHT_3x18W: "pendant-light-3x18w",
  DECORATIVE_CHANDELIER_6x40W: "decorative-chandelier-6x40w",
} as const;

export type FixtureKey = (typeof FIXTURE_KEYS)[keyof typeof FIXTURE_KEYS];
