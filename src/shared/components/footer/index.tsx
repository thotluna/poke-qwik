import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="sticky bottom-0 left-0 right-0 w-full h-24 bg-black text-white flex justify-center items-center">
      <span>This is a first proyect with qwik</span>
    </footer>
  );
});
