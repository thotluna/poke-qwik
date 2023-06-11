import { component$, Slot } from '@builder.io/qwik';
import { Title } from '../title';

interface HeaderProps{
  title: string;
}

export const Header = component$<HeaderProps>(({title}) => {
  return(
    <header class='w-full flex flex-col items-center'>
      <Title>{title}</Title>
      <div class='flex items-center justify-between gap-8 m-12'>
        <Slot />
      </div>
    </header>
  )
});