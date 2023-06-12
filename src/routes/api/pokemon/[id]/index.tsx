import type { RequestHandler } from "@builder.io/qwik-city";
import { pokemons } from "./pokemosn";


export const onGet: RequestHandler = (requestEvent) => { 

  const idString = requestEvent.params.id
  const id = Number(idString)
  if(!id || isNaN(id) || id <=0 || id >= 1281) {
    requestEvent.json(401, {message: "Invalid id"})
    return
  }
  
  const pokemon = pokemons.filter(poke => poke.id === id)

  requestEvent.json(201, pokemon[0])



 }