import { component$, Slot, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { PokemonListContext, type PokemonListState, PokemonListStateInitial } from "./pokemon-list.context";


const KEY_LIST_LOCAL_STORAGE = "pokemon-list"

export const PokemonListProvider = component$ (() => {
  const pokemonListState = useStore<PokemonListState>(PokemonListStateInitial)

  useVisibleTask$(() => {
    if(localStorage.getItem(KEY_LIST_LOCAL_STORAGE)){
      const {
        currentPage = 0,
        loading = false,
        pokemons = []
      } = JSON.parse(localStorage.getItem(KEY_LIST_LOCAL_STORAGE)!) as PokemonListState

      pokemonListState.currentPage = currentPage
      pokemonListState.loading = loading
      pokemonListState.pokemons = pokemons
    }

  })

  useVisibleTask$(({track}) => {
    track(() => [pokemonListState.pokemons, pokemonListState.currentPage])
    
    localStorage.setItem(KEY_LIST_LOCAL_STORAGE, JSON.stringify(pokemonListState))

  })
  
  useContextProvider(PokemonListContext, pokemonListState)
  return  <Slot />
});