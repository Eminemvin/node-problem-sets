const dnaPairing = require("../../lib/fcc-problem-sets/dnapairing");
const chai = require("chai");
const assert = chai.assert;

describe("DNA Pairing tests", () =>{
    it('should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', (done)=>{
        let expected =[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]];
        let actual = dnaPairing("ATCGA");
        assert.deepEqual(actual, expected);
        done();
    })
    it('should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', (done)=>{
        let expected = [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]];
        let actual = dnaPairing("TTGAG");
        assert.deepEqual(actual, expected);
        done();
    })
    it('should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', (done)=>{
        let expected = [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]];
        let actual = dnaPairing("CTCTA");
        assert.deepEqual(actual, expected);
        done();
    })


})
