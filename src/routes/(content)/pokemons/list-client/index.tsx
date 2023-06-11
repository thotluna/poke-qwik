import {component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonsListClient } from '~/list-client/components/pokemon-list-client';

export default component$(() => {
  
  return(
    <PokemonsListClient />
  )
});

export const head: DocumentHead = {
  title: 'PokeQwik - Client',
  meta: [
    {
      name: 'description',
      content: 'first app with Qwik whit Client render',
    },
  ],
};