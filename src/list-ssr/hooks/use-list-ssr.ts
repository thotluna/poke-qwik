import type { Signal } from "@builder.io/qwik";
import { useComputed$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const useListSsr = () => {
  const location = useLocation();
  const url = "/pokemons/list-ssr/";

  const currentPage = useComputed$(() => {
    const searchParams = new URLSearchParams(location.url.search);
    const numberString = searchParams.get("page") || 0;
    return Number(numberString);
  });

  const lastPage: Readonly<Signal<string>> = useComputed$(() => {
    if (currentPage.value - 1 <= 0) return `${url}?page=0`;

    const lpage = currentPage.value - 1;

    return `${url}?page=${lpage}`;
  });

  const nextPage = useComputed$(() => {
    if (currentPage.value + 1 > 1282) return `${url}?page=${currentPage.value}`;

    const nPage: number = currentPage.value + 1;

    return `${url}?page=${nPage}`;
  });

  return {
    currentPage,
    lastPage,
    nextPage,
  };
};
