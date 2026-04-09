import { useState } from 'react'
import { TextArea } from './components/textArea'
import { getPokemonData } from './services/conPokeApi'
import { cardPokemon } from './components/CardPokemon/cardPokemon'
import type { Pokemon } from './types/pokemon'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemonData = async () => {
    const data = await getPokemonData();
    setPokemonList(data);
  }

  return (
    <>
      <h1>Pokedex</h1>
      <button onClick={() => fetchPokemonData()}>Buscar Pokémons</button>
      {pokemonList.map((pokemon: Pokemon) => (
        cardPokemon(pokemon.name, pokemon.img)
      ))}
    </>
  )
}

export default App
