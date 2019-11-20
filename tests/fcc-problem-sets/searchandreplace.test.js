const myReplace = require("../../lib/fcc-problem-sets/searchandreplace");
const chai = require("chai");
const assert = chai.assert;

describe("Search and Replace tests", ()=>{
    it("should return Let us go to the mall", (done) =>{
        let expected = "Let us go to the mall";
        let actual = myReplace("Let us go to the store", "store", "mall");
        assert.equal(expected, actual);
        done();
    })
    it("should return 'He is Sitting on the couch'", (done) =>{
        let expected = "He is Sitting on the couch";
        let actual = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
        assert.equal(expected, actual);
        done();
    })
    it("should return 'This has a spelling error'", (done) =>{
        let expected = "This has a spelling error";
        let actual = myReplace("This has a spellngi error", "spellngi", "spelling");
        assert.equal(expected, actual);
        done();
    })
    it("should return 'His name is John'", (done) =>{
        let expected = "His name is John";
        let actual = myReplace("His name is Tom", "Tom", "john");
        assert.equal(expected, actual);
        done();
    })
    it("should return 'Let us get back to more Algorithms'", (done) =>{
        let expected = "Let us get back to more Algorithms";
        let actual = myReplace("Let us get back to more Coding", "Coding", "algorithms");
        assert.equal(expected, actual);
        done();
    })

});
