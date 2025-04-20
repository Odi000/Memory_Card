import { useState, useEffect } from "react";
import { reshufleArray, handlePointsDown, handlePointsUp } from "./components/functions";
import pokemonCollection from "./components/pokemonAPI";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardContainer from './components/grid'
import StatsContainer from './components/stats'
import './styles/App.css'

function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [gameStats, setGameStats] = useState({
		score: 0,
		bestScore: 0,
		clickedPoks: []
	})

	useEffect(() => {
		(async () => {
			const getPokemonList = await pokemonCollection();
			setPokemonList(getPokemonList);
		})()
	}, []);



	useEffect(() => {
		if (gameStats.score === 0 && gameStats.bestScore !== 0) {
			const scoreEl = document.getElementById("score");
			scoreEl.addEventListener("transitionend", handlePointsDown);
			scoreEl.classList.add("shine-red");
			return () => {
				removeEventListener("transitionend", handlePointsDown);
			}
		} else {
			const scoreEl = document.getElementById("score");
			scoreEl.addEventListener("transitionend", handlePointsUp);
			scoreEl.classList.add("shine");
			return () => {
				removeEventListener("transitionend", handlePointsUp);
			}
		}
	}, [gameStats.score])

	function onCardClick(pokeID) {
		if (gameStats.clickedPoks.includes(pokeID)) {
			if (gameStats.score > gameStats.bestScore) gameStats.bestScore = gameStats.score;
			setGameStats({
				score: 0,
				bestScore: gameStats.bestScore,
				clickedPoks: []
			})
		} else {
			gameStats.clickedPoks.push(pokeID);

			setGameStats({
				score: gameStats.score + 1,
				bestScore: gameStats.bestScore,
				clickedPoks: [...gameStats.clickedPoks]
			})
		}

		reshuflePokemons()

		function reshuflePokemons() {
			const shufledPokemonList = reshufleArray(pokemonList);
			setPokemonList(shufledPokemonList);
		}
	}

	return (
		<>
			<StatsContainer
				score={gameStats.score}
				bestScore={gameStats.bestScore}
			></StatsContainer>
			<CardContainer
				pokemonList={pokemonList}
				onCardClick={onCardClick}
			></CardContainer>
		</>
	)
}

export default App