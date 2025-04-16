import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardContainer from './components/grid'
import StatsContainer from './components/stats'
import './styles/App.css'

function App() {
	return (
		<>
			<StatsContainer></StatsContainer>
			<CardContainer></CardContainer>
		</>
	)
}

export default App