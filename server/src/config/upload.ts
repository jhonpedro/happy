import multer from 'multer'
import path from 'path'

export default {
	// fileFilter: (req: any, file: any, cb: any) => {
	// 	if (
	// 		file.mimetype !== 'image/png' ||
	// 		'image/jpeg' ||
	// 		'image.jpg'
	// 	) {
	// 		cb(
	// 			new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'file must be an image')
	// 		)
	// 	}
	// },
	storage: multer.diskStorage({
		destination: path.join(__dirname, '..', '..', 'uploads'),
		filename: (req, file, cb) => {
			const filename = `${Date.now()}-${file.originalname}`

			cb(null, filename)
		},
	}),
}
