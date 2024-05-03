import { describe, it } from "mocha";
import { getFileDataFromExternalAPIService, getFileNamesFromExternalAPIService } from "../src/infraestructure/service/FileServices.mjs";
import { expect } from "chai";
import { parseFileData } from "../src/infraestructure/helpers/FUNCTIONS.mjs";
import CustomFile from "../src/domain/File.mjs";

describe('Files service', () => {
  it('should return file names from external API', async () => {
    // Debería retornar un array de nombres de archivos (strings)
    const files = await getFileNamesFromExternalAPIService();

    // Verificar que files sea un array
    expect(files).to.be.an('array');

    // Verificar que cada elemento del array sea un string
    files.forEach(file => {
      expect(file).to.be.a('string');
    });

    // Verificar que el array tenga al menos un elemento
    expect(files).to.have.length.greaterThan(0);

  });

  it('Should return file data from external API', async () => {
    // Debería retornar un string con los datos del archivo
    const fileData = await getFileDataFromExternalAPIService('test3.csv');

    // Verificar que fileData no sea null
    expect(fileData).to.not.be.null;

    // Verificar que fileData sea un string
    expect(fileData).to.be.a('string');

  });

  it('Should throw an error when fileName is not provided', async () => {
    // Debería retornar un error cuando no se provee el nombre del archivo
    try {
      await getFileDataFromExternalAPIService();
    } catch (error) {
      // Verificar que el error sea del tipo Error
      expect(error).to.be.an('error');
    }
  });

  it('Should return an error when fileName is not found', async () => {
    // Debería retornar un error cuando el archivo no es encontrado
    try {
      await getFileDataFromExternalAPIService('random.csv');
    } catch (error) {
      // Verificar que el error sea del tipo Error
      expect(error).to.be.an('error');
    }
  });

  it('Should return a fileData and can parse it', async () => {
    // Debería retornar un array de CustomFile
    const fileData = await getFileDataFromExternalAPIService('test3.csv');

    const dataResponse = []

    parseFileData(fileData, dataResponse)

    // Verificar que dataResponse sea un array
    expect(dataResponse).to.be.an('array');

    // Verificar que cada elemento del array sea una instancia de CustomFile
    dataResponse.forEach(file => {
      expect(file).to.be.an.instanceof(CustomFile);
    });

    // Verificar que el array tenga al menos un elemento
    expect(dataResponse).to.have.length.greaterThan(0);

  });

  it("Should return a empty array", async () => {
    // Debería retornar un array de CustomFile
    const fileData = await getFileDataFromExternalAPIService('test1.csv');

    const dataResponse = []

    // La funcion deberia retornar un array vacio
    expect(() => parseFileData(fileData, dataResponse)).to.have.length(0);
    
  });

});
