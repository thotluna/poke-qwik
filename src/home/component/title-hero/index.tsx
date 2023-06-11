import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css'
import { WorldTitleHero } from './span-title-hero';


export const TitleHero = component$(() => {
  return(
   <article id='title-hero' class='w-full grid place-content-center ' >

    <h1 class={[styles.title, 'relative w-full ']}>
      <div class='absolute top-0 lg:-top-20 left-0 lg:left-auto lg:right-0 w-full h-full grid place-items-center lg:place-items-end  '>
        <img width={0} height={0} class='ml-[8rem]  w-48 h-48'  src='/images/pokeball.png' alt='pokeball'/>
      </div>
  
      <WorldTitleHero 
        content='Find.'
        colorStart='rgb(234, 179, 8)'
        colorEnd='rgb(249, 115, 22)'
        delay='0s'
      />

      <WorldTitleHero 
        content='Train.'
        colorStart='#7928ca'
        colorEnd='#ff0080'
        delay='3.33s'
      />

      <WorldTitleHero 
        content='Triumph.'
        colorStart='#ff4d4d'
        colorEnd='#f9cb28'
        delay='6.66s'
      />
    </h1>

   </article>
  )
});
