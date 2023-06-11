import { component$ } from '@builder.io/qwik';
import type { SmallPokemon } from '~/shared/interfaces';
import { Header } from '~/shared/components/header';
import { PokemonsGrid } from '~/shared/components/pokemon-grid';
import { PokemonLink } from '../pokemon-link';

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
      <PokemonLink href={lastPage} disabled={currentOffset === 0}>Last Page</PokemonLink>
      <span>Current Page: {currentPage}</span>
      <PokemonLink href={nextPage} disabled={currentOffset === 1000} >Next Page</PokemonLink>
    </Header>
    <PokemonsGrid pokemons={ pokemons } />
    </>
  )
});