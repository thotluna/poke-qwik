import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import { getSmallPokemons } from '~/shared/helpers/get-small-pokemons';
import type {PokemonListResponse, SmallPokemon } from '~/shared/interfaces';
import { PokemonListSsr } from '~/list-ssr/components/pokemons-list-ssr';
import { useListSsr } from '~/list-ssr/hooks/use-list-ssr';

export const useGetPokemons = routeLoader$<PokemonListResponse<SmallPokemon>>(async ({query, pathname, redirect}) => {

  const offset = Number(query.get('offset') || 0)
  
  if(isNaN(offset)) redirect(301, pathname)
  if(offset < 0) redirect(301, pathname)
  if(offset > 1000) redirect(301, pathname)
  const controller = new AbortController()
  const resp = await getSmallPokemons(controller, offset )
  return resp

})

export default component$(() => {
  const response = useGetPokemons()
  const { currentOffset, currentPage, lastPage, nextPage } = useListSsr()
   
  return(
    <PokemonListSsr 
      currentOffset={currentOffset.value} 
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