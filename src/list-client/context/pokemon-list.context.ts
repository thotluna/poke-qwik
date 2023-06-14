import { createContextId } from "@builder.io/qwik";
import type{ SmallPokemon } from "~/shared/interfaces";


export interface PokemonListState{
    currentPage : number,
    pageLoader: number,
    pokemons: SmallPokemon[],
    loading: boolean
}

export const PokemonListStateInitial: PokemonListState = {
  currentPage : 0,
  pageLoader:-1,
  pokemons: [],
   loading: false
}

export const PokemonListContext = createContextId<PokemonListState>('porkemon-list-context')