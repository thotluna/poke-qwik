import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { ImagePokemon } from '~/shared/components/image-pokemon';

import { Header } from '~/shared/components/header';
import { usePokemonGameContext } from '~/game/hooks';

export const useGetId = routeLoader$(({params, redirect}) => {
  const id: number = Number(params.id)
  if(!id || isNaN(id) || id <=0 || id >1000) redirect(301, '/')
  return id
})

export default component$(() => {

  const state = usePokemonGameContext()
  
  return (
    <section class='w-full flex justify-center items-center'> 
      <article class='flex flex-col items-center' >
        <Header title='Pokemon Game'>
          <div class='flex flex-col'>
            <span class='text-2xl'>Simple Search</span>
            <span class='text-9xl'>{state.pokemonId}</span>
          </div>
        </Header>
        <ImagePokemon 
          pokemonId={state.pokemonId} 
          isBackImage={state.isBackView}
          isVisible={state.isVisible}/>
      </article>
    </section>
  )
});