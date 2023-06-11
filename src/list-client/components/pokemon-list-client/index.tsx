import { $, component$ } from "@builder.io/qwik";
import { useGetPokemonListClient } from "~/list-client/hookls/use-get-pokemon-list-client";
import { Button } from "~/shared/components/button";
import { Header } from "~/shared/components/header";
import { PokemonsGrid } from "~/shared/components/pokemon-grid";


export const PokemonsListClient = component$(() => {

  const pokemonState = useGetPokemonListClient()
  
  return(
    <>
    <Header title='Pokemons List - Client' >
      <span>Page: {pokemonState.currentPage}</span>
      <Button onClick={$(() => { pokemonState.currentPage++ })} >Next</Button>
    </Header>
    <PokemonsGrid pokemons={pokemonState.pokemons} />
    </>
  )
});