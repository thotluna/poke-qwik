import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {


  return (
    <div class='container mx-auto lg:p-16'>
      <Slot />
    </div>
  );
});