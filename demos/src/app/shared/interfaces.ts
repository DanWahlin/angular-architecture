import { Theme, SidebarPosition } from "./enums";

export interface Customer {
    id: number | null;
    name: string;
    city: string;
    age: number;
}

export interface Product {
    id: number | null;
    name: string;
    price: number;
}

// Created using https://www.jsontots.com
// based on data from https://swapi.co
export interface SwapiResult<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

export interface CharactersPlanets {
  characters: Character[];
  planets: Planet[];
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Settings {
  theme: Theme,
  sidebarVisible: boolean;
  sidebarPosition: SidebarPosition;
}

export interface UpdateCharacterStatus {
  status: boolean;
  character: Character;
}