function Card({pokemon}){
    return(
        <div className="card">
            <div className="img-container">
                <Sprite></Sprite>
            </div>
            <p className="name">{"pokemon.name"}</p>
        </div>
    )
}

function Sprite({url}){
    return <img src={url}/>
}

export default Card;