import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import GlobalStyle from './assets/styles/global'
import 'leaflet/dist/leaflet.css'

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App
