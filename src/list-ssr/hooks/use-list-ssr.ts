import { useComputed$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"



export const useListSsr = () => {
  const location = useLocation()

  const currentOffset = useComputed$(() => {
    const searchParams = new URLSearchParams(location.url.search)
    const offset = Number(searchParams.get('offset') || 0)

    return offset
  })  

  const currentPage = useComputed$(() => {
    return (currentOffset.value / 10) + 1
  })

  const lastPage = useComputed$(() => {
    return `/pokemons/list-ssr/?offset=${currentOffset.value - 10 }`
  })

  const nextPage = useComputed$(() => {
    return `/pokemons/list-ssr/?offset=${currentOffset.value + 10 }`
  })

  return {
    currentOffset,
    currentPage,
    lastPage,
    nextPage
  }
   
}