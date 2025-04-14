import { useState, useEffect } from "react";
import pokemonCollection from "./pokemonAPI";
import Card from "./card";

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
                (() => {
                    const cardArr = [];
                    for (let i = 0; i < 18; i++) {
                        cardArr.push(
                            <Card key={crypto.randomUUID()}></Card>
                        )
                    }
                    return cardArr;
                })()
            }
        </div>
    )
}

export default CardContainer;