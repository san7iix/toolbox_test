import { Router } from 'express'
import { GetFilesList } from '../../application/files/search/GetFilesList.mjs'
import { GetFilesWithData } from '../../application/files/search/GetFilesWithData.mjs'
import { GetFileData } from '../../application/files/search/GetFileData.mjs'

const filesRoutes = Router()

filesRoutes.get('/data', (req, res) => {
    if (!req.query.fileName) GetFilesWithData(req, res)

    GetFileData(req, res)
})
filesRoutes.get('/list', (req, res) => GetFilesList(req, res))

export { filesRoutes }
