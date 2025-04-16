import "../styles/stats.css"

function StatsContainer(){
    return (
        <div className="stats">
            <h1>Memory Game</h1>
            <BestScore></BestScore>
            <Score></Score>
        </div>
    )
}

function Score(){
    return <p id="score">Score: 0</p>
}

function BestScore(){
    return <p id="best-score">Best Score: 99</p>
}

export default StatsContainer