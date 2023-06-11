import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/shared/components/button";
import { ImagePokemon } from "~/shared/components/image-pokemon";

interface PokemonGameProps{
  pokemonId: number
  isVisible: boolean
  isBackView: boolean
  titleViewButton: string
  titleShowMeButton: string
  toggleFromBack: () => void,
  toggleVisible: () => void,
  lastPokemons: ()=> void
  nextPokemons: () => void
}

export const PokemonGame = component$<PokemonGameProps>(({
  pokemonId,
  isVisible,
  isBackView,
  titleViewButton,
  titleShowMeButton,
  toggleFromBack,
  toggleVisible,
  lastPokemons,
  nextPokemons
}) => {


  return (
      <section class='flex justify-center items-center'> 
        <article class='flex flex-col items-center' >
          <header>
            <h1 class='text-4xl lg:text-5xl font-bold p-4 text-white'>POKEMON CHARACTER</h1>
          </header>
          <span class='text-2xl'>Simple Search</span>
          <span class='text-9xl'>{pokemonId}</span>

          <Link href={`/game/pokemon/${pokemonId}`}>
            <ImagePokemon 
              pokemonId={pokemonId} 
              isBackImage={isBackView}
              isVisible={isVisible}/>
          </Link>
          
          <footer class='w-full flex flex-row flex-wrap items-center justify-center p-4 gap-8'>
  
            <Button
              onClick={ toggleFromBack }>
                {titleViewButton}
            </Button>
            <Button
              onClick={ toggleVisible }>
                {titleShowMeButton}
            </Button>
            <Button 
              onClick={lastPokemons}
              disabled={pokemonId <= 0}>
              Last
            </Button>
            <Button onClick={nextPokemons}>
              Next
            </Button>
          </footer>
        </article>
      </section>
  );
});