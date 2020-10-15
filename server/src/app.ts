import express from 'express'
import 'express-async-errors'
import path from 'path'
import cors from 'cors'

import './database/connection'
import errorHandler from './errors/handler'

import routes from './routes'

class App {
	app: express.Application

	constructor() {
		this.app = express()
		this.middlewares()
		this.routes()
	}

	middlewares() {
		this.app.use(express.json())
		this.app.use(
			'/uploads',
			express.static(path.join(__dirname, '..', 'uploads'))
		)
		this.app.use(cors())
	}

	routes() {
		this.app.use(routes)
		this.app.use(errorHandler)
	}
}

export default new App().app
