import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import OrphanagesMap from '../pages/OrphanagesMap'
import Orphanage from '../pages/Orphanage'
import CreateOrphanages from '../pages/CreateOrphanages'

function Routes() {
	return (
		<Switch>
			<Route path="/" exact>
				<Landing />
			</Route>
			<Route path="/orphanages" exact>
				<OrphanagesMap />
			</Route>
			<Route path="/orphanages/create">
				<CreateOrphanages />
			</Route>
			<Route path="/orphanages/:id">
				<Orphanage />
			</Route>
		</Switch>
	)
}

export default Routes
