import "../styles/stats.css"

function StatsContainer({ score, bestScore }) {
    return (
        <div className="stats">
            <h1>Memory Game</h1>
            <BestScore bestScore={bestScore}></BestScore>
            <Score score={score}></Score>
        </div>
    )
}

function Score({ score }) {
    return <p id="score">Score: {score}</p>
}

function BestScore({ bestScore }) {
    return <p id="best-score">Best Score: {bestScore}</p>
}

export default StatsContainer