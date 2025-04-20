import Card from "./card";
import "../styles/grid.css"

function CardContainer({pokemonList, onCardClick}) {

    return (
        <div id="card-container">
            {
                pokemonList.map(pokemon => {
                    return <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                        onCardClick={onCardClick}
                    ></Card>
                })
            }
        </div>
    )
}

export default CardContainer;