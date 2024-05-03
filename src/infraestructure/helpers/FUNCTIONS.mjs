import CustomFile from "../../domain/File.mjs"

export const parseFileData = (fileData, arrayResponse) => {
    if (fileData) {

        if (!fileData.includes('file,text,number,hex')) {
            throw new Error('Data is invalid, no se encontró la cabecera del archivo')
        }

        if (fileData.includes(';')) {
            throw new Error('Data is invalid')
        }

        const splitedData = fileData.split('\n')
        if (Array.isArray(splitedData)) {
            splitedData.shift()
        }
        for (let j = 0; j < splitedData.length; j++) {
            try {
                const fileDataParsed = new CustomFile()
                fileDataParsed.parseFileData(splitedData[j])
                arrayResponse.push(fileDataParsed)
            } catch (error) {
                console.warn('Omitiendo archivo: debido a un error')
            }
        }
    }

    return arrayResponse
}