export type SpaceType =
  | 'Back garden'
  | 'Front garden'
  | 'Patio'
  | 'Courtyard'
  | 'Balcony'
  | 'Side return';

export type MaintenanceLevel = 'Low' | 'Moderate' | 'High';

export type Sunlight = 'Full sun' | 'Part shade' | 'Mostly shade';

export type MainGoal =
  | 'Relaxing'
  | 'Outdoor Dining'
  | 'Low Maintenance'
  | 'Curb Appeal'
  | 'Pet Friendly'
  | 'Wildlife Friendly'
  | 'Privacy';

export type GardenStyleId =
  | 'cottage'
  | 'modern-courtyard'
  | 'wildlife'
  | 'mediterranean'
  | 'low-maintenance'
  | 'naturalistic'
  | 'korean-zen'
  | 'family-friendly';

export type DifficultyLevel = 'Easy' | 'Moderate' | 'Difficult' | 'Low' | 'High';

export type ProductCategory =
  | 'Plants'
  | 'Pots & Planters'
  | 'Soil & Ground Finish'
  | 'Lighting'
  | 'Furniture'
  | 'Privacy & Structure'
  | 'Decor & Habitat'
  | 'Tools & Care'
  | 'Paving & Edging';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  quantity: number;
  unitPrice: number;
  emoji: string;
  retailers: string[];
  placementZone: string;
  placementNote: string;
}

export interface PlacementZone {
  id: string;
  label: string;
  position: string;
  purpose: string;
  productIds: string[];
}

export interface DesignRationale {
  productFit: string;
  spatialArrangement: string;
  maintenanceExplanation: string;
  installationExplanation: string;
  spatialExperience: string;
}

export interface StyleConfig {
  id: GardenStyleId;
  name: string;
  title: string;
  concept: string;
  layoutLogic: string;
  plantingStrategy: string;
  materialPalette: string;
  pathType: string;
  focalElement: string;
  planImage: string;
  isoImage: string;
  products: Product[];
  placementZones: PlacementZone[];
  installationDifficulty: DifficultyLevel;
  maintenanceDifficulty: DifficultyLevel;
  spatialExperience: string;
  designRationale: DesignRationale;
  aiInsight: string;
  summary: string;
}

export interface PostcodeInfo {
  region: string;
  climate: string;
  plantSuitability: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface AppState {
  postcodeArea: string;
  spaceType: SpaceType;
  gardenStyleId: GardenStyleId;
  maintenanceLevel: MaintenanceLevel;
  sunlight: Sunlight;
  budget: number;
  mainGoal: MainGoal;
}
