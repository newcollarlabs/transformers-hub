export type Faction = 'Autobot' | 'Decepticon';
export type Category = 'Elite Core' | 'Combiners' | 'Multi-Changers' | 'Bonded Units' | 'Titans' | 'Seekers' | 'Maximals' | 'Predacons';

export interface TransformerBot {
  id: string;
  name: string;
  faction: Faction;
  category: Category;
  identifier: string; // From Column D: Uniqueness and personality trait
  description: string[]; // Many paragraphs for kids
  imageUrl: string;
  stats: {
    power: number;
    speed: number;
    bravery: number;
  };
  narrative: string[]; // For the narrator feature
}

export interface UserProfile {
  kidName: string;
  age: number;
  onboarded: boolean;
}

export interface LoreDetail {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  imageUrl: string;
  accentColor: string;
}
