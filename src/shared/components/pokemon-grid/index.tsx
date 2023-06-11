import { component$ } from "@builder.io/qwik";
import { ImagePokemon } from "~/shared/components/image-pokemon";
import type { SmallPokemon } from "~/shared/interfaces";

interface PokemonsGridProps{
  pokemons?: SmallPokemon[]
}

export const PokemonsGrid = component$<PokemonsGridProps>(({pokemons}) => {
  return (
    <section class='w-full grid gap-8' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))" }}>
      {pokemons && pokemons.length > 0 && pokemons.map(( {name, id}) => {
          return(
            <article key={id} class='w-full flex flex-col items-center justify-between' >
              <ImagePokemon pokemonId={id} />
              <h2 class='text-2xl capitalize'>{name}</h2>
            </article>
          )
        })
      }

    </section>
  )
});