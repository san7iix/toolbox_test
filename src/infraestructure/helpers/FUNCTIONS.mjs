import CustomFile from "../../domain/File.mjs"

export const parseFileData = (fileData, arrayResponse, fileName) => {

    if (!fileData) {
        throw new Error('Los datos del archivo son requeridos')
    }

    if (!fileName) {
        throw new Error('El nombre del archivo es requerido')
    }

    if (!fileData.includes('file,text,number,hex')) {
        throw new Error('La data no es valida, no se encontró la cabecera del archivo')
    }

    if (fileData.includes(';')) {
        throw new Error('La data no es valida')
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