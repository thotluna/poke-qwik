import { useContext } from "@builder.io/qwik";
import { PokemonListContext } from "../context";

export function usePokemonListContext() {
  const state = useContext(PokemonListContext);

  if (!state)
    throw new Error(
      "Please validate your provider context for Pokemon Game Context"
    );

  return state;
}
