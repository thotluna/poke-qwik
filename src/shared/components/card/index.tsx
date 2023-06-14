import { component$ } from "@builder.io/qwik";
import { ImagePokemon } from "../image-pokemon";

interface CardProps {
  id: number;
  name: string;
}

export const Card = component$<CardProps>(({ id, name }) => {
  return (
    <div class="flex flex-col bg-gradient-to-tr from-amber-500 via-red-500 to-orange-500 text-white rounded-md p-1">
      <div class="relative bg-black rounded-md">
        <span class="absolute top-0 right-0 text-right text-xl font-bold p-2">
          {id}
        </span>
        <ImagePokemon pokemonId={id} />
      </div>
      <span class="w-full text-center text-2xl font-bold capitalize  p-4 ">
        {name}
      </span>
    </div>
  );
});
