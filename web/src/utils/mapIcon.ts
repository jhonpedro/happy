import Leaflet from 'leaflet'

import mapMarkerImg from '../assets/images/map-marker.svg'

const mapIcon = Leaflet.icon({
	iconUrl: mapMarkerImg,
	iconAnchor: [29, 68],
	iconSize: [58, 68],
	popupAnchor: [170, 2],
})

export default mapIcon
