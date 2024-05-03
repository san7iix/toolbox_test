import CustomFile from "../../domain/File.mjs"

export const parseFileData = (fileData, arrayResponse, fileName) => {

    if (!fileData) {
        throw new Error('File data is required')
    }

    if (!fileName) {
        throw new Error('File name is required')
    }

    if (!fileData.includes('file,text,number,hex')) {
        throw new Error('Data is invalid, no se encontró la cabecera del archivo')
    }

    if (fileData.includes(';')) {
        throw new Error('Data is invalid')
    }

    const splitedData = fileData.split('\n')
    // Eliminamos la cabecera del archivo
    if (Array.isArray(splitedData)) {
        splitedData.shift()
    }

    const parsedFileData = new CustomFile(splitedData, fileName)

    arrayResponse.push(parsedFileData)

    return arrayResponse
}