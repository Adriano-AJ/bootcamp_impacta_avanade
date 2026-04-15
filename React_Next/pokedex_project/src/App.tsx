import { useState } from 'react'
import { getPokemonData, getPokemonDataByUrl } from './services/conPokeApi'
import { CardPokemon } from './components/CardPokemon/cardPokemon'
import type { Pokemon, PokemonType } from './types/pokemon'
import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Header } from './components/Header/Header'

function App() {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(10);

  const fetchPokemonData = async () => {
    const data = await getPokemonData();
    setPokemonList(data);

    const updatedPokemonList = await Promise.all(data.map(async (pokemon: Pokemon) => {
      const pokemonDetails = await getPokemonDataByUrl(pokemon.url);
      console.log(pokemonDetails);
      return {
        ...pokemon,
        img: pokemonDetails.sprites.other["official-artwork"].front_default,
        type: pokemonDetails.types[0].type.name as PokemonType
      };
    }));
    setPokemonList(updatedPokemonList);

  }

  return (
    <>
      <Header/>
      <SearchBar/>
      <button className='button_search' onClick={() => fetchPokemonData()}>Buscar</button>
      {pokemonList.map((pokemon: Pokemon) => (
        CardPokemon(pokemon, pokemonList.indexOf(pokemon))
      ))}
      <button id='load_btn' onClick={() => {
        setOffset(offset + 10);
        console.log(offset);
      }}>Load More</button>
    </>
  )
}

export default App
