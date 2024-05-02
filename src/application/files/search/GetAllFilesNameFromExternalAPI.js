import CustomFile from "../../../domain/File.js";
import { getFileDataFromExternalAPIService, getFileNamesFromExternalAPIService } from "../../../infraestructure/service/FileServices.js";

export const GetFileNamesFromExternalAPI = async (_, res) => {

    const dataResponse = []

    // Obtenemos los nombres de los archivos de la API externa
    const response = await getFileNamesFromExternalAPIService();

    // Debemos buscar la data de cada archivo, procesarla y devolverla
    for (let i = 0; i < response.length; i++) {
        try {
            const fileData = await getFileDataFromExternalAPIService(response[i]);

            // Obtenemos la data del archivo y la parseamos haciendo un split de los datos
            let splitedData = fileData.split('\n');

            // Obtenemos las líneas del archivo
            if (Array.isArray(splitedData)) {
                // Quitamos las cabezeras
                splitedData.shift();
            }

            // Por cada ejecutamos el metodo parseFileData
            for (let j = 0; j < splitedData.length; j++) {
                try {
                    const fileDataParsed = new CustomFile();
                    fileDataParsed.parseFileData(splitedData[j]);
                    dataResponse.push(fileDataParsed);
                }
                catch (error) {
                    console.warn('Omitiendo archivo: ' + response[i] + ' debido a un error')
                    console.error(error);
                }
            }
        }
        catch (error) {
            console.warn('Omitiendo archivo: ' + response[i] + ' debido a un error')
            console.error(error);
        }
    }

    // console.log(dataResponse);

    res.status(200).json(dataResponse);

}
