export interface PokemonListResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface BasicPokemonInfo {
  name: string;
  url: string;
}

export interface SmallPokemon {
  id: number;
  name: string;
}
