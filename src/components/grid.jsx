import { useState, useEffect } from "react";
import pokemonCollection from "./pokemonAPI";
import Card from "./card";
import "../styles/grid.css"

function CardContainer() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        (async () => {
            const getPokemonList = await pokemonCollection();
            setPokemonList(getPokemonList);
        })()
    }, []);

    console.log(pokemonList);

    return (
        <div id="card-container">
            {
                pokemonList.map(pokemon => {
                   return <Card key={pokemon.id} pokemon={pokemon}></Card>
                })
            }
        </div>
    )
}

export default CardContainer;