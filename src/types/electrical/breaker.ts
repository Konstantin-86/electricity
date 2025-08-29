export interface BreakerPower {
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

export interface Breaker {
  id: string;
  name: string;
  rating: string;
  types: BreakerTypes;
  isOn: boolean;
  powers: BreakerPower[];
  lightingDetails?: LightingDetails;
  socketDetails?: SocketDetails;
  additionalInfo?: AdditionalInfo;
}
