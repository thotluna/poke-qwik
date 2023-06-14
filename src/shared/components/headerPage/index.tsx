import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikSmallLogo } from "../icons";

export const HeaderPage = component$(() => {
  const isHidden = useSignal(true);

  return (
    <header>
      <nav class="flex items-center justify-between flex-wrap bg-slate-800 p-6">
        <Link href="/">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="flex item-center justify-start">
              <QwikSmallLogo width={32} height={32} />
              <span class="text-2xl">Poke - Qwik</span>
            </span>
          </div>
        </Link>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick$={() => {
              isHidden.value = !isHidden.value;
            }}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class={[
            { hidden: isHidden.value },
            "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
          ]}
        >
          <div class="text-sm lg:flex-grow">
            <Link
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              href="/"
            >
              Home
            </Link>
            <Link
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              href="/game"
            >
              Game
            </Link>
            <Link
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              href="/pokemons/list-client"
            >
              Client Side
            </Link>
            <Link
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
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
