import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikSmallLogo } from '../icons';

export const NavBar = component$(() => {

  const isHidden = useSignal(true)
  const elementRef = useSignal<HTMLElement>()

  useVisibleTask$(({track}) => {
    track(() => isHidden.value)
    console.log('isHidden: ', isHidden.value, 'element: ', elementRef.value);
    
    if(elementRef.value){
      if(isHidden.value === false){
        elementRef.value.classList.remove('top-[-400px]')
        elementRef.value.classList.remove('opacity-0')
        elementRef.value.classList.add('top-[80px]')
        elementRef.value.classList.add('opacity-100')
      }else{
        elementRef.value.classList.remove('top-[80px]')
        elementRef.value.classList.remove('opacity-100')
        elementRef.value.classList.add('top-[-400px]')
        elementRef.value.classList.add('opacity-0')
      }
    }
  })

  return (
    <nav class='p-5 bg-black lg:flex lg:item-center justify-between'>
      <div class='flex items-center justify-between'>
        <Link href='/'>
          <span class='text-2xl text-orange-500 font-bold tracking-[-.08em]	'>
            <QwikSmallLogo className='inline' width={32} />
            POKE-QWIK
          </span>
        </Link>
        <button 
        onClick$={() => isHidden.value = !isHidden.value}
        class='lg:hidden group flex flex-col w-9 h-9 border-0 bg-transparent gap-[.65rem] [&>div]:bg-orange-500  [&>div]:h-[2px] [&>div]:w-full [&>div]:rounded-[5px] [&>div]:transition-all [&>div]:duration-500 tranform-left origin-left'>
          <div class={['bg-orange-500 h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left group-hover:h-[3px]', isHidden.value === false && 'rotate-45']}> </div>
          <div class={['bg-orange-500 h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left group-hover:h-[3px]', isHidden.value === false && 'opacity-0' ]}> </div>
          <div class={['bg-orange-500 h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left group-hover:h-[3px]', isHidden.value === false &&isHidden.value === false && '-rotate-45']}> </div>
        </button>
      </div>

      <ul ref={elementRef} class='lg:flex lg:items-center z-50 lg:z-auto lg:static absolute bg-black w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
        <li class='mx-4 my-6 lg:my-0 '>
          <Link class='text-x text-orange-500 font-bold hover:text-yellow-500 duration-500' href='/'>Home</Link>
        </li>
        <li class='mx-4 my-6 lg:my-0'>
          <Link class='text-x text-orange-500 font-bold hover:text-yellow-500 duration-500' href='/game'>Game</Link>
        </li>
        <li class='mx-4 my-6 lg:my-0'>
          <Link class='text-x text-orange-500 font-bold hover:text-yellow-500 duration-500' href='/pokemons/list-ssr'>SSR</Link>
        </li>
        <li class='mx-4 my-6 lg:my-0'>
          <Link class='text-x text-orange-500 font-bold hover:text-yellow-500 duration-500' href='/pokemons/list-client'>CSR</Link>
        </li>
        <li class='mx-4 my-6 lg:my-0'>
          <Link class='px-8 py-1 inline-block rounded-md bg-black border-2 border-orange-500 text-white hover:bg-orange-500 hover:border-transparent hover:text-black duration-500'>
            Discover it
          </Link>
        </li>
      </ul>

      

    </nav>

  )
});