import { component$ } from "@builder.io/qwik";

export const Loading = component$(() => {
  return (
    <picture class="animate-spin">
      <img width={40} height={40} src="/images/pokeball.png" alt="null" />
    </picture>
  );
});
