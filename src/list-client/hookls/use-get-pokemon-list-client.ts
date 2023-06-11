import { $, useTask$ } from "@builder.io/qwik"
import { getSmallPokemons } from "~/shared/helpers/get-small-pokemons"
import { useInfiniteScroll } from "./use-infinite-scroll"
import { usePokemonListContext } from "./use-pokemon-list-context"


export const useGetPokemonListClient = () => {
  const pokemonState = usePokemonListContext()

  useTask$(async({track, cleanup}) => {
    track(() => pokemonState.currentPage)
    const controller = new AbortController()
    const pokemonResponse = await getSmallPokemons(controller, pokemonState.currentPage * 10, 30)
    pokemonState.pokemons = [...pokemonState.pokemons, ...pokemonResponse.results]
    pokemonState.loading = false
    cleanup(() => controller.abort())
  })


  useInfiniteScroll({
    isLoading: pokemonState.loading, 
    callback: $(() => {pokemonState.currentPage++})
  })

  return pokemonState
}