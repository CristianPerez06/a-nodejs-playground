import { Router } from 'express'

import { readFile } from '../controllers/files'

const filesRoutes = Router()

filesRoutes.get('/readFile', readFile)

export default filesRoutes
