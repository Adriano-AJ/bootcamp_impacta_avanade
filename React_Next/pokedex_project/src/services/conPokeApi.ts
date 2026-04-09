export async function getPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results; // Retorna a lista de pokémons
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return [];
    }
}