async function pokemonCollection() {
    const pokemonNames = [
        "Pikachu",
        "Charizard",
        "Bulbasaur",
        "Squirtle",
        "Jigglypuff",
        "Gengar",
        "Eevee",
        "Mewtwo",
        "Snorlax",
        "Turtwig",
        "Starly",
        "Shinx",
        "Riolu",
        "Glaceon",
        "Zorua",
        "Axew",
        "Froakie",
        "Litten"
    ]
    const collection = [];

    for (const pokName of pokemonNames) {
        await requestPokemon(pokName, collection);
    }

    return collection;

    async function requestPokemon(name, collection) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const parsedData = await response.json();
            collection.push(parsedData);
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default pokemonCollection;