import { Router } from 'express'
import { GetFilesList } from '../../application/files/search/GetFilesList.js'
import { GetFilesWithData } from '../../application/files/search/GetFilesWithData.js'

const filesRoutes = Router()

filesRoutes.get('/data', (req, res) => GetFilesWithData(req, res))
filesRoutes.get('/list', (req, res) => GetFilesList(req, res))

export { filesRoutes }
