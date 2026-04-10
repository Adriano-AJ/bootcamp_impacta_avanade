import type { Pokemon } from '../../types/pokemon'
import { COLORS } from '../../constants/colors'

import './style.css'

export function CardPokemon(pokemon: Pokemon, key: number) {
  return (
    <div 
    id="card_pokemon"  
    style={{
      borderColor: COLORS[pokemon.type]
    }}
    key={key}
    >
      <div 
      id='top-card'
      style={{
        color: COLORS[pokemon.type]
      }}
      >
        <span>#{key + 1}</span>
      </div>
        <img 
          src={pokemon.img} 
          alt={pokemon.name} 
          id="pokemon_img" 
          style={{ 
            backgroundColor: COLORS[pokemon.type]
          }}
        />
        <div 
        id='bottom-card'
        style={{
          backgroundColor: COLORS[pokemon.type]
        }}
        >
          <p id='name_pokemon'>{pokemon.name}</p>
        </div>
    </div>
  )
}