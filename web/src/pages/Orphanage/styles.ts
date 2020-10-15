import styled from 'styled-components'

export const OrphanageContainer = styled.div`
	display: flex;
	min-height: 100vh;
`

export const Main = styled.main`
	flex: 1;
`

export const OrphanageDetails = styled.div`
	width: 700px;
	margin: 64px auto;

	background: #ffffff;
	border: 1px solid #d3e2e5;
	border-radius: 20px;

	overflow: hidden;

	> img {
		width: 100%;
		height: 300px;
		object-fit: cover;
	}

	.images {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		column-gap: 16px;

		margin: 16px 40px 0;
	}

	.images button {
		border: 0;
		height: 88px;
		background: none;
		cursor: pointer;
		border-radius: 20px;
		overflow: hidden;
		outline: none;

		opacity: 0.6;
	}

	.images button.active {
		opacity: 1;
	}

	.images button img {
		width: 100%;
		height: 88px;
		object-fit: cover;
	}

	.orphanage-details-content {
		padding: 80px;
	}

	.orphanage-details-content h1 {
		color: #4d6f80;
		font-size: 54px;
		line-height: 54px;
		margin-bottom: 8px;
	}

	.orphanage-details-content p {
		line-height: 28px;
		color: #5c8599;
		margin-top: 24px;
	}

	.orphanage-details-content .map-container {
		margin-top: 64px;
		background: #e6f7fb;
		border: 1px solid #b3dae2;
		border-radius: 20px;
	}

	.orphanage-details-content .map-container footer {
		padding: 20px 0;
		text-align: center;
	}

	.orphanage-details-content .map-container footer a {
		line-height: 24px;
		color: #0089a5;
		text-decoration: none;
	}

	.orphanage-details-content .map-container .leaflet-container {
		border-bottom: 1px solid #dde3f0;
		border-radius: 20px;
	}

	.orphanage-details-content hr {
		width: 100%;
		height: 1px;
		border: 0;
		background: #d3e2e6;
		margin: 64px 0;
	}

	.orphanage-details-content h2 {
		font-size: 36px;
		line-height: 46px;
		color: #4d6f80;
	}

	.orphanage-details-content .open-details {
		margin-top: 24px;

		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 20px;
	}

	.orphanage-details-content .open-details div {
		padding: 32px 24px;
		border-radius: 20px;
		line-height: 28px;
	}

	.orphanage-details-content .open-details div svg {
		display: block;
		margin-bottom: 20px;
	}

	.orphanage-details-content .open-details div.hour {
		background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
		border: 1px solid #b3dae2;
		color: #5c8599;
	}

	.orphanage-details-content .open-details div.open-on-weekends {
		background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
		border: 1px solid #a1e9c5;
		color: #37c77f;
	}

	.orphanage-details-content .open-details div.open-on-weekends.dont-open {
		background: linear-gradient(154.16deg, #fdf0f5 7.85%, #ffffff 91.03%);
		border: 1px solid #ffbcd4;
		color: #ff669d;
	}

	.orphanage-details-content button.contact-button {
		margin-top: 64px;

		width: 100%;
		height: 64px;
		border: 0;
		cursor: pointer;
		background: #3cdc8c;
		border-radius: 20px;
		color: #ffffff;
		font-weight: 800;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: background-color 0.2s;
	}

	.orphanage-details-content button.contact-button svg {
		margin-right: 16px;
	}

	.orphanage-details-content button.contact-button:hover {
		background: #36cf82;
	}
`