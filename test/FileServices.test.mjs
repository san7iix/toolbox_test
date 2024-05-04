import { describe, it } from "mocha";
import { getFileDataFromExternalAPIService, getFileNamesFromExternalAPIService } from "../src/infraestructure/service/FileServices.mjs";
import { expect } from "chai";
import { parseFileData } from "../src/infraestructure/helpers/FUNCTIONS.mjs";
import CustomFile from "../src/domain/File.mjs";

describe('Files service', () => {
  it('Debe retornar una lista con los nombres de los archivos y deben ser de tipo string', async () => {
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

  it('Debe retornar la información del archivo test3.csv correctamente', async () => {
    // Debería retornar un string con los datos del archivo
    const fileData = await getFileDataFromExternalAPIService('test3.csv');

    // Verificar que fileData no sea null
    expect(fileData).to.not.be.null;

    // Verificar que fileData sea un string
    expect(fileData).to.be.a('string');

  });

  it('Debe hacer un throw al no enviar el parametro del nombre de archivo (Filename)', async () => {
    // Debería retornar un error cuando no se provee el nombre del archivo
    try {
      await getFileDataFromExternalAPIService();
    } catch (error) {
      // Verificar que el error sea del tipo Error
      expect(error).to.be.an('error');
    }
  });

  it('Debe retornar un error al intentar consultar un nombre de archivo que no existe', async () => {
    // Debería retornar un error cuando el archivo no es encontrado
    try {
      await getFileDataFromExternalAPIService('random.csv');
    } catch (error) {
      // Verificar que el error sea del tipo Error
      expect(error).to.be.an('error');
    }
  });

  it('Debe retornar la data del archivo test3.csv y retornarla en la forma JSON', async () => {
    // Debería retornar un array de CustomFile
    const fileName = 'test3.csv'
    const fileData = await getFileDataFromExternalAPIService(fileName);

    const dataResponse = []

    parseFileData(fileData, dataResponse, fileName)

    // Verificar que dataResponse sea un array
    expect(dataResponse).to.be.an('array');

    // Verificar que cada elemento del array sea una instancia de CustomFile
    dataResponse.forEach(file => {
      expect(file).to.be.an.instanceof(CustomFile);
    });

    // Verificar que el array tenga al menos un elemento
    expect(dataResponse).to.have.length.greaterThan(0);

  });

  it("Debe retornar un array vacío", async () => {
    // Debería retornar un array de CustomFile
    const fileData = await getFileDataFromExternalAPIService('test1.csv');

    const dataResponse = []

    // La funcion deberia retornar un array vacio
    expect(() => parseFileData(fileData, dataResponse)).to.have.length(0);

  });

});
