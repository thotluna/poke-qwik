import { component$ } from '@builder.io/qwik'
import { Carrusel } from '../carrusel'
import { TitleHero } from '../title-hero'

export const Hero = component$(() => {
 
  return (
    <section class=' h-full flex items-center justify-center '>
      <div class='h-full grid place-items-center lg:h-3/4'>
        <TitleHero />
        <p class='w-2/3 lg:w-1/2 text-lg text-slate-300 text-center lg:text-2xl'>This platform for the great finders, The tireless trainers. For the best Pokémon players.</p>

        <div class='flex gap-4 flex-wrap'>
          <button class='w-full md:w-auto px-8 py-2 bg-amber-500 text-slate-900 rounded-md  border-2 border-amber-500 hover:bg-amber-400'>
            Discover it
          </button>
          <button class='w-full md:w-auto px-8 py-2 bg-black text-slate-200 rounded-md border-2 border-amber-500 hover:bg-amber-500 hover:text-slate-900'>
            Get a demo
          </button>
        </div>
        <p class='uppercase text-center text-slate-500 '>Developed by the best team</p>
        <Carrusel />
      </div>      
    </section>
  )
})