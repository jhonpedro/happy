import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export const OrphanagesContainer = styled.div`
	height: 100vh;
	width: 100vw;

	position: relative;

	display: flex;
	justify-content: space-between;

	.leaflet-container {
		z-index: 1;
	}

	.map-popup .leaflet-popup-content-wrapper {
		background: rgba(255, 255, 255, 0.7);
		border-radius: 2rem;
		box-shadow: none;
	}

	.map-popup .leaflet-popup-content {
		color: ${colors.blue};
		font-size: 2rem;
		font-weight: 800;
		margin: 0.9rem 1.2rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.map-popup .leaflet-popup-content a {
		width: 4rem;
		height: 4rem;

		background: ${colors.lighterBlue};
		box-shadow: 1.7rem 2.5rem 4.2rem rgba(23, 142, 166, 0.16);
		border-radius: 1.2rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.map-popup .leaflet-popup-tip-container {
		display: none;
	}
`

export const OrphanagesAside = styled.aside`
	height: 100vh;
	width: 27%;
	padding: 3rem;

	background: linear-gradient(
		329deg,
		${colors.lightBlue} 0%,
		${colors.lightSeaBlue} 100%
	);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const AsideHeader = styled.header`
	height: 50%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	img {
		height: 20%;
		min-width: 20%;
		align-self: flex-start;
	}

	strong {
		font-weight: 800;
		font-size: 3rem;
	}

	p {
		font-size: 1.7rem;
	}
`

export const AsideFooter = styled.footer`
	font-size: 1.5rem;

	strong {
		font-weight: 800;
		display: block;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.3rem;
	}
`

export const Button = styled.button`
	width: 4rem;
	height: 4rem;
	position: absolute;
	bottom: 4rem;
	right: 4rem;

	background: ${colors.lightBlue};
	border-radius: 1.5rem;
	transition: 0.4s ease;
	z-index: 10;

	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		background: ${colors.lightSeaBlue};
	}
`
