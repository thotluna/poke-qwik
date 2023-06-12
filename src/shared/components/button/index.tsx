
import { component$, Slot, useComputed$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface ButtonProps{
  className?: string
  href?: string
  type?: 'Button' | 'Link' | 'Button-Outline' | 'Link-Outline'
  onClick?: ()=>void;
  disabled?: boolean
}

export const Button = component$<ButtonProps>(({className= '', type = "Button", onClick, disabled=false, href = undefined}) => {
  
  const typeElement = useComputed$(() => {
    const [base, option] = type.split('-')
    const styleLinkDisabled = disabled && base === 'Link' && option === undefined 
      ? 'bg-gray-700 text-gray-300 pointer-events-none cursor-not-allowed' 
      : disabled && base === 'Link' && option === 'Outline' 
        ? 'border-gray-700 text-gray-300 pointer-events-none cursor-not-allowed'
        : ''
    const styleButtonDisabled =  base === 'Button' && option === undefined 
      ? 'disabled:border-gray-900 disabled:bg-gray-600 disabled:text-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed' 
      :  base === 'Button' && option === 'Outline'
        ? 'disabled:border-gray-700 disabled:text-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed'
        : ''
    return {
      base,
      optionStyle: option ? 'bg-black border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:border-transparent hover:text-black' : 'bg-amber-500 text-slate-900 font-bold border-amber-500 hover:bg-amber-300 hover-border-amber-300',
      styleLinkDisabled,
      styleButtonDisabled

    }
  })
  
  return (
    <>
    {typeElement.value.base === "Button" &&
      <button 
      onClick$={onClick}
      disabled={disabled}
      class={[' md:w-auto px-8 py-2 border-2 rounded-md flex flex-row items-center justify-center gap-1', typeElement.value.optionStyle, `${typeElement.value.styleButtonDisabled}`, `${className}`]}>
        <Slot />   
      </button>
    }
    {typeElement.value.base === "Link" &&
      <Link 
        href={href}
        class={['px-8 py-2 rounded-md duration-500 flex items-center justify-center ', typeElement.value.optionStyle, `${typeElement.value.styleLinkDisabled}`, `${className}`]}>
        <Slot />
      </Link>
    }
    
    </>
  )
});