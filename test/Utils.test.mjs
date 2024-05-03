import { describe } from "mocha";
import { parseFileData } from "../src/infraestructure/helpers/FUNCTIONS.mjs";
import { expect } from "chai";

describe("Utils", () => {
    describe("parseFileData", () => {
        it("should return a 4 length array", () => {
            const mockFileData = "file,text,number,hex\nfile1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5\nfile1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3\ne29651a63a5202a5661e05a060401fb\nfile1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252";

            expect(parseFileData(mockFileData, [])).to.be.an("array").with.lengthOf(4);
        });

        it("should return a 0 length array", () => {
            const mockFileData = "file,text,number,hex\nRgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile1.csv,AtjW,6\nfile1.csv,,74088708,3\ne29651a63a5202a5661e05a060401fb\nfile1.csv,d,f9e1bcdb9e3784acc448af34f4727252";

            expect(parseFileData(mockFileData, [])).to.be.an("array").with.lengthOf(0);
        });

        it("should return a error message", () => {
            const mockFileData = "file,text,number,hex\nfile1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile1.csv;,AtjW,6,d33a8ca5d36d3106219f66f939774cf5\nfile1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3\ne29651a63a5202a5661e05a060401fb\nfile1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252";

            expect(() => parseFileData(mockFileData, [])).to.throw("Data is invalid");
        });

        it("should return a error message: No se encontró la cabecera del archivo", () => {
            const mockFileData = "file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5\nfile1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3\ne29651a63a5202a5661e05a060401fb\nfile1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252;";

            expect(() => parseFileData(mockFileData, [])).to.throw("Data is invalid, no se encontró la cabecera del archivo");
        });
    });
});