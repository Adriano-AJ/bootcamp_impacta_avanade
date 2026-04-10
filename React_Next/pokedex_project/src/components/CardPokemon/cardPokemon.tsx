import type { PokemonType } from '../../types/pokemon'
import type { Pokemon } from '../../types/pokemon'

import './style.css'

export function CardPokemon(pokemon: Pokemon, key: number) {
  return (
    <div id="card_pokemon"  key={key}>
        <span>#{key}</span>
        <img src={pokemon.img} alt={pokemon.name} id="pokemon_img" className={pokemon.type} />
        <span id='name_pokemon'>{pokemon.name}</span>
    </div>
  )
}