import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <div class='w-full h-48 bg-slate-950 flex justify-center items-center'>
      <Inline />
    </div>
  );
});

export const Inline = () => {
  return <div>This is a first proyect with qwik.</div>
};