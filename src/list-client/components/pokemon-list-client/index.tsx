import { component$ } from "@builder.io/qwik";
import { useGetPokemonListClient } from "~/list-client/hookls/use-get-pokemon-list-client";
import { Button } from "~/shared/components/button";
import { Header } from "~/shared/components/header";
import { DoubleChevronRight } from "~/shared/components/icons";
import { PokemonsGrid } from "~/shared/components/pokemon-grid";


export const PokemonsListClient = component$(() => {

  const {state, handlerNextPage} = useGetPokemonListClient()
  
  return(
    <>
    <Header title='Pokemons List - Client' >
      <span class='text-white'>Page: {state.currentPage}</span>
      <Button onClick={handlerNextPage} >
        <span class='hidden md:visible'>Next Page</span>
        <DoubleChevronRight />
      </Button>
    </Header>
    <PokemonsGrid pokemons={state.pokemons} />
    </>
  )
});