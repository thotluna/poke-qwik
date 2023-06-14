import { createContextId } from "@builder.io/qwik";

export interface PokemonGameState {
  pokemonId: number;
  name?: string;
  isBackView: boolean;
  isVisible: boolean;
}

export const PokemonGameStateInitial = {
  pokemonId: 1,
  name: "",
  isBackView: false,
  isVisible: true,
};

export const PokemonGameContext = createContextId<PokemonGameState>(
  "pokemon-game-context"
);
