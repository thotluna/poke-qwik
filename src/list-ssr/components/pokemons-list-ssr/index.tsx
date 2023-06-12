import { component$ } from '@builder.io/qwik';
import type { SmallPokemon } from '~/shared/interfaces';
import { Header } from '~/shared/components/header';
import { PokemonsGrid } from '~/shared/components/pokemon-grid';
import { Button } from '~/shared/components/button';
import { DoubleChevronLeft, DoubleChevronRight } from '~/shared/components/icons';

interface PokemonListSsrProps{
  currentOffset: number
  currentPage:  number 
  lastPage: string
  nextPage: string,
  pokemons?: SmallPokemon[]
}

export const PokemonListSsr = component$<PokemonListSsrProps>(({currentOffset, currentPage, lastPage, nextPage, pokemons}) => {
  return(
    <>
    <Header title='Pokemons List - SSR' >
      <Button type='Link' href={lastPage} disabled={currentOffset === 0}>
        <DoubleChevronLeft />
        <span class='hidden md:visible' >Last Page</span>
      </Button>
      <span class='text-white'>Current Page: {currentPage}</span>
      <Button type='Link' href={nextPage} disabled={currentOffset === 1000}>
        <span class="hidden md:visible">Next Page</span>
        <DoubleChevronRight />
      </Button>
    </Header>
    <PokemonsGrid pokemons={ pokemons } />
    </>
  )
});