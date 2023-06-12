import { $, useComputed$, useVisibleTask$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import type { SmallPokemon } from "~/shared/interfaces"
import { usePokemonGameContext } from "./use-pokemon-game-context"


export const usePokemonGame = () => {
  const state = usePokemonGameContext()
  const location = useLocation()

  const toggleVisible = $(() =>{    
    state.isBackView = !state.isBackView
  })

  const toggleFromBack = $(() => {
    state.isVisible = !state.isVisible
  })

  const handlerChange = $((value: number) => {
    if(state.pokemonId + value <=0 || state.pokemonId + value > 1281) return
    state.pokemonId += value
  })
  

  useVisibleTask$(async ({track}) => {
    track(() => state.pokemonId)
    const baseUrl = location.url
    
    
    const res = await fetch(`${baseUrl.origin}/api/pokemon/${state.pokemonId}`)
    const pokemon = await res.json() as SmallPokemon
   
    state.name = pokemon.name.toLocaleUpperCase()
  })

  return {
    pokemonId: useComputed$(() => state.pokemonId),
    name: useComputed$(() => state.name),
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