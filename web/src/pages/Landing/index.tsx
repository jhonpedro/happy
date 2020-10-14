import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import kidsImg from '../../assets/images/kids.svg'

import {
	LandingContainer,
	ContentLading,
	LogoLading,
	TitleLading,
	LocalLading,
	ImageLading,
	ButtonLading,
} from './styles'

function LandingPage() {
	const history = useHistory()

	function handleNext() {
		history.push('/orphanages-map')
	}

	return (
		<LandingContainer>
			<ContentLading>
				<LogoLading>
					<img src={logoImg} alt="Logo Happy" />
				</LogoLading>
				<LocalLading>
					<strong>Iporá</strong>
					Goiás
				</LocalLading>
				<ImageLading>
					<img src={kidsImg} alt="Kids" />
				</ImageLading>
				<TitleLading>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças</p>
				</TitleLading>
				<ButtonLading>
					<button onClick={handleNext}>
						<FiArrowRight />
					</button>
				</ButtonLading>
			</ContentLading>
		</LandingContainer>
	)
}

export default LandingPage
