import "../styles/card.css"

function Card({pokemon}){
    return(
        <div className="card">
            <div className="img-container">
                <Sprite url={pokemon.sprites.front_default}></Sprite>
            </div>
            <p className="name">{pokemon.name.slice(0,1).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
    )
}

function Sprite({url}){
    return <img src={url} draggable="false"/>
}

export default Card;