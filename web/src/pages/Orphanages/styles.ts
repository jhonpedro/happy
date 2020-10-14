import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export const OrphanagesContainer = styled.div`
	height: 100vh;
	width: 100vw;

	position: relative;

	display: flex;
	justify-content: space-between;
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
	justify-content: space-between;

	img {
		height: 20%;
		min-width: 20%;
		align-self: flex-start;
	}

	strong {
		font-weight: 800;
		font-size: 2rem;
	}

	p {
		font-size: 1.2rem;
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
	z-index: 2;

	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		background: ${colors.lightSeaBlue};
	}
`
