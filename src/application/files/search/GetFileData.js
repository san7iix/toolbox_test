import CustomFile from "../../../domain/File.js"
import { getFileDataFromExternalAPIService } from "../../../infraestructure/service/FileServices.js"

export const GetFileData = async (req, res) => {

    const { fileName } = req.query

    if (!fileName) throw new Error('fileName is required')

    const fileData = await getFileDataFromExternalAPIService(fileName)

    const dataResponse = []

    // Este codigo se repite, puede ir en un helper o en un servicio
    if (fileData) {
        const splitedData = fileData.split('\n')
        if (Array.isArray(splitedData)) {
            splitedData.shift()
        }
        for (let j = 0; j < splitedData.length; j++) {
            try {
                const fileDataParsed = new CustomFile()
                fileDataParsed.parseFileData(splitedData[j])
                dataResponse.push(fileDataParsed)
            } catch (error) {
                console.warn('Omitiendo archivo: debido a un error')
                console.error(error)
            }
        }
    }

    res.status(200).json(dataResponse)

}