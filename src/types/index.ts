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

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  quantity: number;
  unitPrice: number;
  emoji: string;
  retailers: string[];
}

export type ProductCategory =
  | 'Plants'
  | 'Pots & Planters'
  | 'Soil & Ground Finish'
  | 'Lighting'
  | 'Furniture'
  | 'Privacy & Structure'
  | 'Decor'
  | 'Tools & Care';

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
