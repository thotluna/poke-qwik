
import { component$, Slot } from '@builder.io/qwik';

interface ButtonProps{
  onClick: ()=>void;
  disabled?: boolean
}

export const Button = component$<ButtonProps>(({onClick, disabled=false}) => {
  return (
    <button 
      class='px-8 py-2  border-2 scale-100 border-slate-600 rounded-md transition-all duration-300 hover:bg-slate-700 hover:border-transparen hover:scale-110 disabled:text-slate-700 disabled:border-slate-700 disabled:pointer-events-none' 
      onClick$={onClick}
      disabled={disabled}>
      <Slot />
    </button>
  )
});