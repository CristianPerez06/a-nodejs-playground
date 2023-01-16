import { Router } from 'express'

import { getExample, throwError } from '../controllers/base'

const baseRoutes = Router()

baseRoutes.get('/getExample', getExample)
baseRoutes.get('/throwError', throwError)

export default baseRoutes
