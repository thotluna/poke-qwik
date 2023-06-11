import { $, useComputed$ } from "@builder.io/qwik"
import { usePokemonGameContext } from "./use-pokemon-game-context"


export const usePokemonGame = () => {
  const state = usePokemonGameContext()

  const toggleVisible = $(() =>{    
    state.isBackView = !state.isBackView
  })

  const toggleFromBack = $(() => {
    state.isVisible = !state.isVisible
  })

  const handlerChange = $((value: number) => {
    state.pokemonId += value
  })

  return {
    pokemonId: useComputed$(() => state.pokemonId),
    isBackView: useComputed$(() => state.isBackView),
    isVisible: useComputed$(() => state.isVisible),
    
    titleShowMeButton: useComputed$(() => state.isBackView ? "From View" : "Back View"),
    titleViewButton: useComputed$(() => state.isVisible ? "Hidden Me" : "Show Me"),
    
    toggleVisible: toggleVisible,
    toggleFromBack: toggleFromBack,
    
    nextPokemons: $(() => handlerChange(+1)),
    lastPokemons: $(() => handlerChange(-1))
  }
}