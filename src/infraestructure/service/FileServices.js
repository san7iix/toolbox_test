import { EXTERNAL_API_ROUTES, EXTERNAL_API_URL } from "../helpers/CONSTS.js";
import { GET } from "../helpers/HTTP_METHODS.js";

const getFileNamesFromExternalAPIService = async () => {
    const response = await GET(EXTERNAL_API_URL + EXTERNAL_API_ROUTES.GET_FILES_NAMES, true);

    if ('files' in response) return response.files;

    return response;
}

const getFileDataFromExternalAPIService = async (fileName) => {
    return await GET(EXTERNAL_API_URL + EXTERNAL_API_ROUTES.GET_FILE_DATA + '/' + fileName, true);
}

export {
    getFileNamesFromExternalAPIService,
    getFileDataFromExternalAPIService
}