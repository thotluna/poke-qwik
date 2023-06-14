import { component$ } from "@builder.io/qwik";
import { useGetPokemonListClient } from "~/list-client/hookls/use-get-pokemon-list-client";
import { Button } from "~/shared/components/button";
import { Header } from "~/shared/components/header";
import { DoubleChevronRight, UpIcon } from "~/shared/components/icons";
import { PokemonsGrid } from "~/shared/components/pokemon-grid";

export const PokemonsListClient = component$(() => {
  const { state, handlerNextPage, isTop, handlerTop } =
    useGetPokemonListClient();

  return (
    <>
      <Header title="Pokemons List - Client">
        <span class="text-white">Page: {state.currentPage}</span>
        <Button onClick={handlerNextPage}>
          <span class="hidden md:visible">Next Page</span>
          <DoubleChevronRight />
        </Button>
      </Header>
      <PokemonsGrid pokemons={state.pokemons} />
      <button
        onClick$={handlerTop}
        hidden={isTop.value}
        class={[
          {
            hidden: isTop.value,
          },
          "sticky  bottom-8 left-[100%] w-16 h-16 flex items-center justify-center bg-red-600 text-white rounded-full",
        ]}
      >
        <UpIcon width={32} height={32} />
      </button>
    </>
  );
});
