const translate = require("../../lib/fcc-problem-sets/piglatin");
const chai = require("chai");
const assert = chai.assert;

/**
 * translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
 */

describe("Pig Latin test cases", () => {
    it("should return 'aliforniacay'", (done) => {
        
        let expected ="aliforniacay";
        let actual = translate("california");
        assert.equal(actual, expected);
        done();
    });
    it("should return 'aragraphspay'", (done) => {
        let expected ="aragraphspay";
        let actual = translate("paragraphs");
        assert.equal(actual, expected);
        done();
    });
    it("should return 'oveglay'", (done) => {
        let expected ="oveglay";
        let actual = translate("glove");
        assert.equal(actual, expected);
        done();
    });
    it("should return 'algorithmway'", (done) => {
        let expected ="algorithmway";
        let actual = translate("algorithm");
        assert.equal(actual, expected);
        done();
    });
    it("should return 'eightway'", (done) => {
        let expected ="eightway";
        let actual = translate("eight");
        assert.equal(actual, expected);
        done();
    });



})
