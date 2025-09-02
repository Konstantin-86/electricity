/* export interface BreakerPower {
  roomId: string;
  outlets?: number;
  lights?: number;
}

export interface BreakerTypes {
  lighting: boolean;
  socket: boolean;
  special: boolean;
}

export interface LightingDetails {
  totalLights: number;
  controlledLights: number;
  controlsAll: boolean;
  description: string;
}

export interface SocketDetails {
  controlledSockets: number;
  totalSockets: number;
  controlsAll: boolean;
  description: string;
}

export interface AdditionalInfo {
  installationDate: string;
  lastMaintenance: string;
  comments: string;
  manufacturer: string;
}

export interface IBreaker {
  id: string;
  name: string;
  rating: string;
  types: BreakerTypes;
  isOn: boolean;
  powers: BreakerPower[];
  lightingDetails?: LightingDetails;
  socketDetails?: SocketDetails;
  additionalInfo?: AdditionalInfo;
} */

export interface IBreaker {
  id: string;
  name: string;
  rating: number; // Изменим на number для удобства расчетов (например, 16 вместо "16A")
  type: "lighting" | "socket" | "mixed"; // Упростим тип
  isOn: boolean;

  // Связи с нагрузками (вместо rooms)
  controlledLoads: {
    roomId: string;
    lightFixtureIds?: string[]; // Какие светильники управляет
    outletGroupIds?: string[]; // Какие группы розеток управляет
  }[];

  // Дополнительная информация (опционально)
  installationDate?: string;
  comments?: string;
  manufacturer?: string;
}
