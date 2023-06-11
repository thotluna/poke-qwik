import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface PokemonLintProps{
  href: string
  disabled?: boolean
}

export const PokemonLink = component$<PokemonLintProps>(({href, disabled = false}) => {

  if(disabled){
    return <span class='px-4 py-2 text-slate-700 border-slate-700 border-2 rounded-md cursor-not-allowed '><Slot/></span>
  }

  return (
    <Link 
      class='px-4 py-2  border-2 scale-100 border-slate-600 rounded-md transition-all duration-300 hover:bg-slate-700 hover:border-transparen hover:scale-110' 
      href={href} >
        <span class='flex items-center justify-center'>
          <Slot />
        </span>
    </Link>
  )
});