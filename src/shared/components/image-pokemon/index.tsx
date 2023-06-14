import {
  component$,
  useComputed$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Loading } from "../loading";

export interface ImagePokemonProps {
  pokemonId: number;
  isBackImage?: boolean;
  isVisible?: boolean;
}

export const ImagePokemon = component$<ImagePokemonProps>(
  ({ pokemonId, isBackImage = false, isVisible = true }) => {
    const isLoad = useSignal(false);

    const url = useComputed$(() => {
      return isBackImage
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    });

    useTask$(({ track }) => {
      track(() => pokemonId);
      isLoad.value = false;
    });

    return (
      <>
        <picture class=" w-48 h-48 flex items-center justify-center">
          {!isLoad.value && <Loading />}
          <img
            width={208}
            height={0}
            src={url.value}
            alt="Pokemon Sprite"
            onLoad$={() => (isLoad.value = true)}
            class={[
              {
                hidden: !isLoad.value,
                "brightness-0": !isVisible,
              },
              "w-48 transition-all duration-700",
            ]}
          />
        </picture>
      </>
    );
  }
);
