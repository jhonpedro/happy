import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export const LandingContainer = styled.div`
	height: 100vh;
	width: 100vw;

	background: linear-gradient(
		329deg,
		${colors.lightBlue} 0%,
		${colors.lightSeaBlue} 100%
	);

	display: flex;
	justify-content: center;
	align-items: center;

	overflow: hidden;
`
export const ContentLading = styled.div`
	min-height: 60rem;
	height: 50vh;
	min-width: 70vw;
	max-width: 90vw;

	display: grid;
	grid-template-columns: 25% 1fr 15%;
	grid-template-rows: repeat(3, 1fr);

	grid-template-areas:
		'logo image local'
		'title image .'
		'title image button';

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

export const LogoLading = styled.div`
	grid-area: logo;

	display: flex;
	align-items: center;

	img {
		width: 100%;
	}
`

export const TitleLading = styled.div`
	grid-area: title;

	h1 {
		line-height: 5.5rem;
		font-size: 7rem;
		font-weight: 800;
		max-width: 24rem;
	}

	p {
		margin-top: 15%;
		font-size: 1.5rem;
	}

	@media (max-width: 800px) {
		text-align: center;

		h1 {
			font-size: 3rem;
			max-width: 100%;
			line-height: 2.4rem;
		}

		p {
			margin-top: 1rem;
		}
	}
`

export const LocalLading = styled.div`
	grid-area: local;
	font-size: 2.2rem;

	display: flex;
	align-items: flex-end;
	justify-content: center;
	flex-direction: column;

	strong {
		display: block;
		margin-bottom: 1rem;
	}

	@media (max-width: 800px) {
		font-size: 1.5rem;
		display: block;

		strong {
			display: inline;
			margin-right: 1rem;
		}
	}
`

export const ImageLading = styled.div`
	grid-area: image;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 100%;
		max-width: 80%;
	}

	@media (max-width: 800px) {
		margin: 2rem 0;

		img {
			width: 40%;
		}
	}
`

export const ButtonLading = styled.div`
	grid-area: button;

	margin-left: auto;

	button {
		height: 8rem;
		width: 8rem;

		display: flex;
		justify-content: center;
		align-items: center;

		padding: 2rem;
		background: ${colors.lightYellow};
		transition: 0.4s ease;
		border-radius: 3rem;

		svg {
			color: rgba(0, 0, 0, 0.55);
		}

		:hover {
			background: ${colors.lighterSeaBlue};
		}
	}

	@media (max-width: 800px) {
		button {
			height: 6rem;
			width: 6rem;

			border-radius: 2.3rem;
		}
	}
`
