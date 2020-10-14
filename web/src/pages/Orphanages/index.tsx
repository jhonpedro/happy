import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import logoImg from '../../assets/images/map-marker.svg'

import {
	OrphanagesContainer,
	OrphanagesAside,
	AsideHeader,
	AsideFooter,
	Button,
} from './styles'

function OrphanagesPage() {
	return (
		<OrphanagesContainer>
			<OrphanagesAside>
				<AsideHeader>
					<img src={logoImg} alt="Logo Happy pequena" />
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
			</Map>

			<Button>
				<FiPlus />
			</Button>
		</OrphanagesContainer>
	)
}

export default OrphanagesPage
