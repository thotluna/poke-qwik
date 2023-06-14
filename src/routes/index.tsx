import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/home/component/hero";
import { NavBar } from "~/shared/components/navbar";

export default component$(() => {
  return (
    <>
      <NavBar />
      <main class=" h-full bg-black">
        <Hero />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "first app with Qwik",
    },
  ],
};
