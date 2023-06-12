import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './hero.module.css?inline'

interface WorldTitleHeroProps{
  content: string
  colorStart: string
  colorMeddle?: string
  colorEnd: string
  delay: string
}

export const WorldTitleHero = component$<WorldTitleHeroProps>(({ content, colorStart,colorMeddle = undefined, colorEnd, delay}) => {

  useStylesScoped$(styles)

  return (
    <span 
      class={['lg:inline-block mx-2']} 
      style={`--content: '${content}'; --start-color:${colorStart}; --meddle-color:${colorMeddle ?? colorStart}; --end-color:${colorEnd}; --delay: ${delay}`} >{content}</span>
  )
});



