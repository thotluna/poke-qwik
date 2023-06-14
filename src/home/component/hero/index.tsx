import { component$ } from "@builder.io/qwik";
import { Button } from "~/shared/components/button";
import { Carrusel } from "../carrusel";
import { TitleHero } from "../title-hero";

export const Hero = component$(() => {
  return (
    <section class=" h-full flex items-center justify-center ">
      <div class="h-full grid place-items-center lg:h-3/4">
        <TitleHero />
        <p class="w-2/3 lg:w-1/2 text-lg text-slate-300 text-center lg:text-2xl">
          This platform for the great finders, The tireless trainers. For the
          best Pokémon players.
        </p>

        <div class="flex gap-4 flex-wrap">
          <Button className="w-full" type="Link" href="#">
            Discover it
          </Button>
          <Button className="w-full" type="Link-Outline" href="#">
            Get a demo
          </Button>
        </div>
        <p class="uppercase text-center text-slate-500 ">
          Developed by the best team
        </p>
        <Carrusel />
      </div>
    </section>
  );
});
