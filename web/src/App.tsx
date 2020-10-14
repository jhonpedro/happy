import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import GlobalStyle from './assets/styles/global'

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
