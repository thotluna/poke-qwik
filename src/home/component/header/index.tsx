import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikSmallLogo } from "~/shared/components/icons";

export const Header = component$(() => {
  const isHidden = useSignal(true);
  return (
    <header class=" bg-black flex flex-col items-center justify-between px-3 py-2 sticky top-0 ">
      <div class="w-full flex flex-row items-center justify-between pb-2">
        <dic class="flex justify-start gap-1 items-center">
          <QwikSmallLogo width={32} height={32} />
          <span class="block text-2xl text-slate-200">Poke-Qwik</span>
        </dic>
        <div class="lg:hidden">
          <button
            onClick$={() => (isHidden.value = !isHidden.value)}
            class="group flex flex-col w-9 h-9 border-0 bg-transparent gap-[.65rem] [&>div]:bg-slate-200  [&>div]:h-[2px] [&>div]:w-full [&>div]:rounded-[5px] [&>div]:transition-all [&>div]:duration-500 tranform-left origin-left"
          >
            <div class="bg-slate-200 h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left group-hover:rotate-45">
              {" "}
            </div>
            <div class="bg-slate-200 h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left group-hover:opacity-0">
              {" "}
            </div>
            <div class="bg-slate-200 h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left group-hover:-rotate-45">
              {" "}
            </div>
          </button>
        </div>
      </div>
      <nav class="">
        <div
          class={[
            { hidden: isHidden.value },
            "w-full block relative lg:flex lg:items-center lg:w-auto",
          ]}
        >
          <div class=" flex flex-col md:flex-row justify-center text-sm ">
            <Link
              class="block w-full text-center p-2 lg:inline-block text-teal-200 hover:text-white hover:bg-gray-900 transition-colors duration-200"
              href="/"
            >
              Home
            </Link>
            <Link
              class="block w-full text-center p-2 lg:inline-block text-teal-200 hover:text-white hover:bg-gray-900 transition-colors duration-200"
              href="/game"
            >
              Game
            </Link>
            <Link
              class="block w-full text-center p-2 lg:inline-block text-teal-200 hover:text-white hover:bg-gray-900 transition-colors duration-200"
              href="/pokemons/list-client"
            >
              Client Side
            </Link>
            <Link
              class="block w-full text-center p-2 lg:inline-block text-teal-200 hover:text-white hover:bg-gray-900 transition-colors duration-200"
              href="/pokemons/list-ssr"
            >
              Server Side
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
});
