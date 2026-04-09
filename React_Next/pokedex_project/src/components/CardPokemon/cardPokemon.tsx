export function cardPokemon(name: string, img: string) {
  return (
    <div className="card_pokemon">
        <h1>CARD</h1>
        <span>Name: {name}</span>
        <span>Img: {img}</span>
    </div>
  )
}