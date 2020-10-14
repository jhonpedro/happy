import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import Orphanages from '../pages/Orphanages'

function Routes() {
	return (
		<Switch>
			<Route path="/" exact>
				<Landing />
			</Route>
			<Route path="/orphanages-map">
				<Orphanages />
			</Route>
		</Switch>
	)
}

export default Routes
