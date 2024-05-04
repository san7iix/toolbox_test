import { describe } from "mocha";
import { parseFileData } from "../src/infraestructure/helpers/FUNCTIONS.mjs";
import { expect } from "chai";

describe("Utils", () => {
    describe("parseFileData", () => {
        it("Debe retornar un objeto de tipo CustomFile y un array de lines de 4 posiciones", () => {
            const mockFileData = "file,text,number,hex\nfile1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5\nfile1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3\ne29651a63a5202a5661e05a060401fb\nfile1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252";

            const result = parseFileData(mockFileData, [], "file1.csv");
            expect(result).to.be.an("array").with.lengthOf(1);
            expect(result[0].lines).to.be.an("array").with.lengthOf(4);

        });

        it("Debe retornar un objeto de tipo CustomFile y un array de lines de 0 posiciones", () => {
            const mockFileData = "file,text,number,hex\nRgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile1.csv,AtjW,6\nfile1.csv,,74088708,3\ne29651a63a5202a5661e05a060401fb\nfile1.csv,d,f9e1bcdb9e3784acc448af34f4727252";

            const result = parseFileData(mockFileData, [], "file1.csv");
            expect(result[0].lines).to.be.an("array").with.lengthOf(0);
        });

        it("Deber retornar un mensaje de error", () => {
            const mockFileData = "file,text,number,hex\nfile1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile1.csv;,AtjW,6,d33a8ca5d36d3106219f66f939774cf5\nfile1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3\ne29651a63a5202a5661e05a060401fb\nfile1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252";

            expect(() => parseFileData(mockFileData, [], "file1.csv")).to.throw("La data no es valida");
        });

        it("Deber retornar un mensaje de error: No se encontró la cabecera del archivo", () => {
            const mockFileData = "file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5\nfile1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3\ne29651a63a5202a5661e05a060401fb\nfile1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252;";

            expect(() => parseFileData(mockFileData, [], "file1.csv")).to.throw("La data no es valida, no se encontró la cabecera del archivo");
        });
    });
});