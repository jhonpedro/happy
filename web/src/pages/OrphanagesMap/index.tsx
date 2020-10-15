import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapIcon from '../../utils/mapIcon'
import mapMarkerImg from '../../assets/images/map-marker.svg'
import api from '../../services/axios'

import {
	OrphanagesContainer,
	OrphanagesAside,
	AsideHeader,
	AsideFooter,
	Button,
} from './styles'
import Orphanage from '../Orphanage'

interface Orphanage {
	id: number
	latitude: number
	longitude: number
	name: string
}

function OrphanagesPage() {
	const [orphanages, setOrphanages] = useState<Orphanage[]>([])
	const { push } = useHistory()

	useEffect(() => {
		api.get('/orphanages').then((response) => {
			setOrphanages(response.data)
		})
	}, [])

	function handleCreateOrphanage() {
		push('/orphanages/create')
	}
	return (
		<OrphanagesContainer>
			<OrphanagesAside>
				<AsideHeader>
					<img src={mapMarkerImg} alt="Logo Happy pequena" />
					<strong>Escolha um orfanato no mapa</strong>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</AsideHeader>
				<AsideFooter>
					<strong>Iporá</strong>
					<p>Goiás</p>
				</AsideFooter>
			</OrphanagesAside>

			<Map
				center={[-16.4357, -51.1156]}
				zoom={14}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{orphanages.map((orphanage) => {
					return (
						<Marker
							position={[orphanage.latitude, orphanage.longitude]}
							icon={mapIcon}
							key={orphanage.id}
						>
							<Popup
								closeButton={false}
								minWidth={240}
								maxWidth={240}
								className="map-popup"
							>
								{orphanage.name}
								<Link to={`/orphanages/${orphanage.id}`}>
									<FiArrowRight size="2rem" />
								</Link>
							</Popup>
						</Marker>
					)
				})}
			</Map>

			<Button onClick={handleCreateOrphanage}>
				<FiPlus />
			</Button>
		</OrphanagesContainer>
	)
}

export default OrphanagesPage
