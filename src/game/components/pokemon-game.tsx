import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/shared/components/button";
import { Header } from "~/shared/components/header";
import {
  DoubleChevronLeft,
  DoubleChevronRight,
  HiddenIcon,
  RefreshICon,
  ShowIcon,
} from "~/shared/components/icons";
import { ImagePokemon } from "~/shared/components/image-pokemon";

interface PokemonGameProps {
  pokemonId: number;
  name?: string;
  isVisible: boolean;
  isBackView: boolean;
  titleViewButton: string;
  titleShowMeButton: string;
  toggleFromBack: () => void;
  toggleVisible: () => void;
  lastPokemons: () => void;
  nextPokemons: () => void;
}

export const PokemonGame = component$<PokemonGameProps>(
  ({
    pokemonId,
    name,
    isVisible,
    isBackView,
    titleViewButton,
    titleShowMeButton,
    toggleFromBack,
    toggleVisible,
    lastPokemons,
    nextPokemons,
  }) => {
    return (
      <section class="flex h-full justify-center items-center text-white">
        <article class="flex h-full flex-col items-center justify-between">
          <Header title="POKEMON CHARACTER" />

          <div class="flex flex-col item justify-between flex-1">
            <span class="text-2xl text-center">{name}</span>
            <span class="text-7xl text-center ">{pokemonId}</span>
            <Link href={`/game/pokemon/${pokemonId}`}>
              <ImagePokemon
                pokemonId={pokemonId}
                isBackImage={isBackView}
                isVisible={isVisible}
              />
            </Link>
          </div>

          <footer class="w-full flex flex-row flex-wrap items-center justify-center px-8 py-2 gap-4">
            <div class="flex items-center gap-2">
              <Button onClick={toggleFromBack}>
                <span class="hidden lg:block">{titleViewButton}</span>
                {isVisible && <HiddenIcon />}
                {!isVisible && <ShowIcon />}
              </Button>
              <Button onClick={toggleVisible}>
                <span class="hidden lg:block">{titleShowMeButton}</span>
                <RefreshICon />
              </Button>
            </div>
            <div class="flex items-center gap-2">
              <Button
                type="Button-Outline"
                onClick={lastPokemons}
                disabled={pokemonId <= 1}
              >
                <DoubleChevronLeft />
                <span class="hidden lg:block">Last</span>
              </Button>
              <Button
                type="Button-Outline"
                disabled={pokemonId >= 1282}
                onClick={nextPokemons}
              >
                <span class="hidden lg:block">Next</span>
                <DoubleChevronRight />
              </Button>
            </div>
          </footer>
        </article>
      </section>
    );
  }
);
