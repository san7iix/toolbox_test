import { parseFileData } from "../../../infraestructure/helpers/FUNCTIONS.mjs"
import { getFileDataFromExternalAPIService } from "../../../infraestructure/service/FileServices.mjs"

export const GetFileData = async (req, res) => {

    try {
        const { fileName } = req.query

        if (!fileName) {
            res.status(400).json({ error: 'El parametro fileName es requerido' })
            return
        }

        const fileData = await getFileDataFromExternalAPIService(fileName)

        const dataResponse = []

        parseFileData(fileData, dataResponse, fileName)

        res.status(200).json(dataResponse)
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' })
    }

}