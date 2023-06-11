import { createContextId } from "@builder.io/qwik";

export interface PokemonGameState{
  pokemonId: number
  isBackView: boolean
  isVisible: boolean
}

export const PokemonGameStateInitial = {
  pokemonId: 1,
  isBackView: false,
  isVisible: true
}

export const PokemonGameContext = createContextId<PokemonGameState>('pokemon-game-context')