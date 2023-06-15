import {
  $,
  useOnDocument,
  useResource$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { LIMIT_ITEMS_FOR_PAGE } from "~/shared/constants";
import { getSmallPokemons } from "~/shared/helpers/get-small-pokemons";
import { usePokemonListContext } from "./use-pokemon-list-context";

export const useGetPokemonListClient = () => {
  const state = usePokemonListContext();
  const isTop = useSignal(true);

  useResource$(async ({ track, cleanup }) => {
    track(() => state.currentPage);

    if (state.pageLoader >= state.currentPage) {
      state.loading = false;
      return;
    }

    state.pageLoader = state.currentPage;
    const controller = new AbortController();
    const pokemonResponse = await getSmallPokemons(
      controller,
      state.currentPage,
      LIMIT_ITEMS_FOR_PAGE
    );

    const setPokemons = new Set([
      ...state.pokemons,
      ...pokemonResponse.results,
    ]);
    state.pokemons = Array.from(setPokemons);
    console.log("Obtebido");

    cleanup(() => controller.abort());
  });

  const handlerNextPage = $(() => {
    if (state.loading === false) {
      state.loading = true;
      state.currentPage++;
      console.log("boton");
    }
  });

  const handlerTop = $(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  useOnDocument(
    "scroll",
    $(() => {
      const maxScroll = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      if (window.scrollY > 200) {
        isTop.value = false;
      } else {
        isTop.value = true;
      }

      let flatScroll = 0;

      if (
        currentScroll + 200 >= maxScroll &&
        flatScroll < currentScroll + 200
      ) {
        flatScroll = currentScroll + 200;
        console.log("scroll", maxScroll, currentScroll);

        handlerNextPage();
      }
    })
  );

  useVisibleTask$(({ track }) => {
    track(() => state.pokemons);
    if (state.loading) state.loading = false;
  });

  return { state, handlerNextPage, isTop, handlerTop };
};
