import "../styles/card.css";

function Card({ pokemon, onCardClick }) {
    return (
        <div
            className="card"
            onClick={(e) => onCardClick(Number(e.currentTarget.dataset.pokeid))}
            data-pokeid={pokemon.id}
        >
            <div className="img-container">
                <Sprite url={pokemon.sprites.front_default}></Sprite>
            </div>
            <p className="name">{pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
    )
}

function Sprite({ url }) {
    return <img src={url} draggable="false" />
}

export default Card;