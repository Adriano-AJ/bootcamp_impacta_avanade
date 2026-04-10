export type PokemonType = "normal" | "fire" | "water" | "grass" | "electric" | "ice" | "fighting" | "poison" | "ground" | "flying" | "psychic" | "bug" | "rock" | "ghost" | "dragon" | "dark" | "steel" | "fairy";

export interface Pokemon {
  name: string;
  url: string;
  img: string;
  type: PokemonType;
}

