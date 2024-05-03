import { describe, it } from "mocha";
import { getFileDataFromExternalAPIService, getFileNamesFromExternalAPIService } from "../src/infraestructure/service/FileServices.mjs";
import { expect } from "chai";

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

    // Verificar que fileData sea un string
    expect(fileData).to.be.a('string');

    console.log(fileData);
  });

});
