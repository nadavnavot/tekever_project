export async function getPokemons(page: number = 1, limit: number = 20) {
  const offset = (page - 1) * limit;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  const totalPages = Math.ceil(data.count / limit);
  
  return {
    results: data.results,
    total: data.count,
    totalPages,
    nextPage: data.next ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null
  };
}

export async function getPokemonByName(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
}