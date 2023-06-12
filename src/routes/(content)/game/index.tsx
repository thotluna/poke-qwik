import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { PokemonGame } from '~/game/components/pokemon-game';
import { usePokemonGame } from '~/game/hooks';


export default component$(() => {
  const {
    pokemonId,
    name,
    isBackView,
    isVisible,
    
    titleShowMeButton,
    titleViewButton,
    
    toggleVisible,
    toggleFromBack,
    
    nextPokemons,
    lastPokemons  } = usePokemonGame()


    

    return(
      <PokemonGame
        pokemonId={pokemonId.value}
        name = {name.value}
        isBackView={isBackView.value}
        isVisible={isVisible.value}
        titleShowMeButton={titleShowMeButton.value}
        titleViewButton={titleViewButton.value}
        toggleFromBack={toggleFromBack}
        toggleVisible={toggleVisible}
        nextPokemons={nextPokemons}
        lastPokemons={lastPokemons}
      />
    )
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'first app with Qwik',
    },
  ],
};