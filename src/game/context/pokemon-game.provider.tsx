import { component$, Slot, useContextProvider, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { type PokemonGameState, PokemonGameStateInitial, PokemonGameContext } from "./pokemon-game.context";


const KEY_GAME_LOCAL_STORAGE = 'pokemon-game'

export const PokemonGameProvider = component$(() => {
  const pokemonGameState = useStore<PokemonGameState>(PokemonGameStateInitial)

  useVisibleTask$(() => {

    console.log('first', pokemonGameState);
    

    if(localStorage.getItem(KEY_GAME_LOCAL_STORAGE)){
      const {
        pokemonId = 10,
        isVisible = true,
        isBackView = false
      } = JSON.parse(localStorage.getItem(KEY_GAME_LOCAL_STORAGE)!) as PokemonGameState

      pokemonGameState.pokemonId = pokemonId
      pokemonGameState.isVisible = isVisible
      pokemonGameState.isBackView = isBackView
    }

  })

  useVisibleTask$(({track}) => {
    track(() => [pokemonGameState.pokemonId, pokemonGameState.isVisible, pokemonGameState.isBackView])
    console.log('second', pokemonGameState);
    localStorage.setItem(KEY_GAME_LOCAL_STORAGE, JSON.stringify(pokemonGameState))
  })

  useContextProvider(PokemonGameContext, pokemonGameState)
 
  return <Slot />
});