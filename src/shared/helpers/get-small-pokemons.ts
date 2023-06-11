import type { BasicPokemonInfo, PokemonListResponse, SmallPokemon } from "~/shared/interfaces"

export const getSmallPokemons = async ( controller: AbortController, offset: number = 0, limit: number = 10): Promise<PokemonListResponse<SmallPokemon>> => {

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
    signal: controller?.signal
  })
  const data = await resp.json() as PokemonListResponse<BasicPokemonInfo>

  const resPokemon = data.results

  const result: PokemonListResponse<SmallPokemon> = {
    ...data,
    results: resPokemon.map(({name, url}) => {
      const idString = url.split('/').at(-2)
      const id = Number(idString) || 0
     
      return { id, name}
    })
  }

  return result
}