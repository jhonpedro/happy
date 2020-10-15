import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'
import { FiPlus } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import mapIcon from '../../utils/mapIcon'
import SideBar from '../../components/SideBar'
import api from '../../services/axios'

import { CreateOrphanagesContainer, Main, Form } from './styles'

export default function CreateOrphanage() {
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
	const { push } = useHistory()

	const [name, setName] = useState('')
	const [about, setAbout] = useState('')
	const [instructions, setInstructions] = useState('')
	const [opening_hours, setOpeningHours] = useState('')
	const [open_on_weekends, setOpenOnWeekends] = useState(true)
	const [images, setImages] = useState<File[]>([])
	const [previewImages, setPreviewImages] = useState<string[]>([])

	function handleMapClick(event: LeafletMouseEvent) {
		setPosition({
			latitude: event.latlng.lat,
			longitude: event.latlng.lng,
		})
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const { latitude, longitude } = position

		const data = new FormData()

		data.append('name', name)
		data.append('about', about)
		data.append('latitude', String(latitude))
		data.append('longitude', String(longitude))
		data.append('instructions', instructions)
		data.append('opening_hours', opening_hours)
		data.append('open_on_weekends', String(open_on_weekends))

		console.log(data)

		images.forEach((image) => {
			data.append('images', image)
		})

		await api.post('/orphanages', data)

		alert('Cadastrado co sucesso')

		push('/orphanages')
	}

	function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files) {
			return
		}

		const selectedImages = Array.from(event.target.files)

		setImages(selectedImages)

		const selectedImagesPreview = selectedImages.map((image) => {
			return URL.createObjectURL(image)
		})

		setPreviewImages(selectedImagesPreview)
	}

	return (
		<CreateOrphanagesContainer>
			<SideBar />

			<Main>
				<Form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Dados</legend>

						<Map
							center={[-16.4357, -51.1156]}
							style={{ width: '100%', height: 280 }}
							zoom={15}
							onclick={handleMapClick}
						>
							<TileLayer
								url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
							/>
							{position.latitude !== 0 && (
								<Marker
									interactive={false}
									icon={mapIcon}
									position={[position.latitude, position.longitude]}
								/>
							)}
						</Map>

						<div className="input-block">
							<label htmlFor="name">Nome</label>
							<input
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="input-block">
							<label htmlFor="about">
								Sobre <span>Máximo de 300 caracteres</span>
							</label>
							<textarea
								id="about"
								maxLength={300}
								value={about}
								onChange={(e) => setAbout(e.target.value)}
							/>
						</div>

						<div className="input-block">
							<label htmlFor="images">Fotos</label>

							<div className="uploaded-image"></div>
							<div className="images-container">
								{previewImages.map((image) => {
									return <img key={image} src={image} alt={name} />
								})}
								<label htmlFor="image[]" className="new-image">
									<FiPlus size={24} color="#15b6d6" />
								</label>

								<input
									onChange={handleSelectImages}
									type="file"
									multiple
									name="images"
									id="image[]"
								/>
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>Visitação</legend>

						<div className="input-block">
							<label htmlFor="instructions">Instruções</label>
							<textarea
								id="instructions"
								value={instructions}
								onChange={(e) => setInstructions(e.target.value)}
							/>
						</div>

						<div className="input-block">
							<label htmlFor="opening_hours">Horário de funcionamento</label>
							<input
								id="opening_hours"
								value={opening_hours}
								onChange={(e) => setOpeningHours(e.target.value)}
							/>
						</div>

						<div className="input-block">
							<label htmlFor="open_on_weekends">Atende fim de semana</label>

							<div className="button-select">
								<button
									type="button"
									className={open_on_weekends ? 'active' : ''}
									onClick={() => setOpenOnWeekends(true)}
								>
									Sim
								</button>
								<button
									type="button"
									className={!open_on_weekends ? 'active' : ''}
									onClick={() => setOpenOnWeekends(false)}
								>
									Não
								</button>
							</div>
						</div>
					</fieldset>

					<button className="confirm-button" type="submit">
						Confirmar
					</button>
				</Form>
			</Main>
		</CreateOrphanagesContainer>
	)
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
