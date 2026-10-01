export type CarPartId =
  | 'front-splitter'
  | 'eye-socket-headlights'
  | 'hood-nostril-vents'
  | 'monocage-windshield'
  | 'glazed-roof-panels'
  | 'double-skin-doors'
  | 'wing-mirrors'
  | 'louvered-engine-cover'
  | 'flying-buttresses'
  | 'active-rear-wing'
  | 'exhaust-diffuser'
  | 'front-fenders';

export interface CarPartInfo {
  id: CarPartId;
  name: string;
  category: 'Aero' | 'Powertrain' | 'Chassis' | 'Exterior';
  description: string;
  engineeringSpec: string;
  materials: string;
  downforceImpact: string;
  blueprintCoords: { x: number; y: number };
}

export type PaintColor = {
  id: string;
  name: string;
  primary: string;
  highlight: string;
  shadow: string;
  accentStroke: string;
  metallic: boolean;
};

export type WingMode = 'retracted' | 'downforce' | 'airbrake';

export interface CarConfig {
  bodyColor: string;
  bodyHighlight: string;
  bodyShadow: string;
  accentStroke: string;
  paintFinish: 'gloss' | 'metallic' | 'matte';
  carbonPack: 'full-carbon' | 'body-match' | 'matte-carbon';
  roofTint: 'clear' | 'smoke' | 'electrochromic';
  headlightsOn: boolean;
  brakeLightsOn: boolean;
  wingMode: WingMode;
  showPanelLines: boolean;
  showAeroflow: boolean;
  showDimensions: boolean;
  showInternalGhost: boolean;
}

export interface TelemetryState {
  speedKmh: number;
  rpm: number;
  gear: number;
  throttle: number;
  brake: number;
  downforceKg: number;
  dragCoefficient: number;
}
