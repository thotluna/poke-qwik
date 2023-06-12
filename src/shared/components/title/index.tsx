import { component$, Slot } from '@builder.io/qwik';

export const Title = component$(() => {
  return <h1 class='text-5xl text-amber-500 text-center w-full md:text-7xl'><Slot /></h1>
});