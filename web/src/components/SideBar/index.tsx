import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import mapMarkerImg from '../../assets/images/map-marker.svg'

import { Aside } from './styles'

function SideBar() {
	const { goBack } = useHistory()

	return (
		<Aside>
			<img src={mapMarkerImg} alt="Happy" />

			<footer>
				<button type="button" onClick={goBack}>
					<FiArrowLeft size={24} color="#FFF" />
				</button>
			</footer>
		</Aside>
	)
}

export default SideBar
