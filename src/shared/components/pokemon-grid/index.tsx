import { component$ } from "@builder.io/qwik";
import type { SmallPokemon } from "~/shared/interfaces";
import { Card } from "../card";

interface PokemonsGridProps {
  pokemons?: SmallPokemon[];
}

export const PokemonsGrid = component$<PokemonsGridProps>(({ pokemons }) => {
  return (
    <section
      class="relative w-full grid gap-16"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))" }}
    >
      {pokemons &&
        pokemons.length > 0 &&
        pokemons.map(({ name, id }) => {
          return (
            <article
              key={id}
              class="w-full flex flex-col items-center justify-between"
            >
              <Card id={id} name={name} />
            </article>
          );
        })}
    </section>
  );
});
