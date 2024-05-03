import CustomFile from "../../../domain/File.mjs"
import { parseFileData } from "../../../infraestructure/helpers/FUNCTIONS.mjs"
import { getFileDataFromExternalAPIService } from "../../../infraestructure/service/FileServices.mjs"

export const GetFileData = async (req, res) => {

    const { fileName } = req.query

    if (!fileName) {
        res.status(400).json({ error: 'fileName is required' })
        return
    }

    const fileData = await getFileDataFromExternalAPIService(fileName)

    const dataResponse = []

    parseFileData(fileData, dataResponse)

    res.status(200).json(dataResponse)

}