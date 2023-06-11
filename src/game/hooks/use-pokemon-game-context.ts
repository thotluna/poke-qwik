import { useContext } from "@builder.io/qwik";
import { PokemonGameContext } from "../context";



export function usePokemonGameContext(){
  const state = useContext(PokemonGameContext)

  if(!state) throw new Error("Please validate your provider context for Pokemon Game Context")


  return state
}