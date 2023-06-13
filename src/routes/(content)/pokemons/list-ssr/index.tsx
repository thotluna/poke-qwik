import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import { getSmallPokemons } from '~/shared/helpers/get-small-pokemons';
import type {PokemonListResponse, SmallPokemon } from '~/shared/interfaces';
import { PokemonListSsr } from '~/list-ssr/components/pokemons-list-ssr';
import { useListSsr } from '~/list-ssr/hooks/use-list-ssr';

import { LIMIT_ITEMS_FOR_PAGE } from '~/shared/constants';

export const useGetPokemons = routeLoader$<PokemonListResponse<SmallPokemon>>(async ({query, pathname, redirect}) => {

  const page = Number(query.get('page') || 0)
  
  if(isNaN(page)) redirect(301, pathname)
  if(page < 0) redirect(301, pathname)
  if(page > 1282) redirect(301, pathname)
  const controller = new AbortController()

  return await getSmallPokemons(controller, page, LIMIT_ITEMS_FOR_PAGE )
})

export default component$(() => {
  const response = useGetPokemons()
  const { currentPage, lastPage, nextPage } = useListSsr()
   
  return(
    <PokemonListSsr 
      currentPage={currentPage.value} 
      lastPage={lastPage.value} 
      nextPage={nextPage.value} 
      pokemons={response.value.results}/>
  )
});

export const head: DocumentHead = {
  title: 'PokeQwik - SSR',
  meta: [
    {
      name: 'description',
      content: 'first app with Qwik whit SSR',
    },
  ],
};