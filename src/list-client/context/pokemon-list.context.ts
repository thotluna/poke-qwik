import { createContextId } from "@builder.io/qwik";
import type{ SmallPokemon } from "~/shared/interfaces";


export interface PokemonListState{
    currentPage : 0,
    pokemons: SmallPokemon[],
    loading: false
}

export const PokemonListStateInitial: PokemonListState = {
  currentPage : 0,
    pokemons: [],
    loading: false
}

export const PokemonListContext = createContextId<PokemonListState>('porkemon-list-context')