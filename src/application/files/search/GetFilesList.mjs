import { getFileNamesFromExternalAPIService } from "../../../infraestructure/service/FileServices.mjs"

export const GetFilesList = async (_, res) => {
    const response = await getFileNamesFromExternalAPIService()

    res.status(200).json({ files: response })
}
