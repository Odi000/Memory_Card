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

    async function requestPokemon(pokName, collection) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokName}`);
            const parsedData = await response.json();
            const {name, id, sprites} = parsedData
            collection.push({name, id, sprites});
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default pokemonCollection;