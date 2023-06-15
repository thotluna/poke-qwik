import { component$ } from "@builder.io/qwik";
import type { SmallPokemon } from "~/shared/interfaces";
import { Header } from "~/shared/components/header";
import { PokemonsGrid } from "~/shared/components/pokemon-grid";
import { Button } from "~/shared/components/button";
import {
  DoubleChevronLeft,
  DoubleChevronRight,
} from "~/shared/components/icons";

interface PokemonListSsrProps {
  currentPage: number;
  lastPage: string;
  nextPage: string;
  pokemons?: SmallPokemon[];
}

export const PokemonListSsr = component$<PokemonListSsrProps>(
  ({ currentPage, lastPage, nextPage, pokemons }) => {
    return (
      <>
        <Header title="Pokemons List - SSR">
          <Button type="Link" href={lastPage}>
            <DoubleChevronLeft />
            <span class="hidden md:visible">Last Page</span>
          </Button>
          <span class="text-white">Current Page: {currentPage + 1}</span>
          <Button type="Link" href={nextPage}>
            <span class="hidden md:visible">Next Page</span>
            <DoubleChevronRight />
          </Button>
        </Header>
        <PokemonsGrid pokemons={pokemons} />
        <div class='flex md:flex-col flex-wrap items-center justify-center gap-8 m-8'>
          <Button type="Link" href={lastPage}>
              <DoubleChevronLeft />
              <span class="hidden md:visible">Last Page</span>
            </Button>
            <span class="text-white">Current Page: {currentPage + 1}</span>
            <Button type="Link" href={nextPage}>
              <span class="hidden md:visible">Next Page</span>
              <DoubleChevronRight />
            </Button>
        </div>
      </>
    );
  }
);
