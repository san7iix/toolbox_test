import { Router } from 'express'
import { GetFilesList } from '../../application/files/search/GetFilesList.mjs'
import { GetFilesWithData } from '../../application/files/search/GetFilesWithData.mjs'
import { GetFileData } from '../../application/files/search/GetFileData.mjs'

const filesRoutes = Router()

filesRoutes.get('/data', (req, res) => {
    try {
        if (!req.query.fileName && req.query.fileName !== '') {
            GetFilesWithData(req, res)
            return
        }

        GetFileData(req, res)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})
filesRoutes.get('/list', (req, res) => {
    try {
        GetFilesList(req, res)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

export { filesRoutes }
