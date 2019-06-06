const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const FixMultiplication = require("../../lib/FixMultiplication/FixMultiplication");

describe("FixMultiplication unit tests", function(){
    it("42*47=1?74", function(done){
        let fix1 = new FixMultiplication("42*47=1?74");

        fix1.fix(function(err, result){
            assert.equal(result, 9);
            done();
        });
    });
    it("4?*47=1974", function(done){
        let fix1 = new FixMultiplication("4?*47=1974");

        fix1.fix(function(err, result){
            assert.equal(result, 2);
            done();
        });
    });
    it("42*?7=1974", function(done){
        let fix1 = new FixMultiplication("42*?7=1974");

        fix1.fix(function(err, result){
            assert.equal(result, 4);
            done();
        });
    });
    it("42*?47=1974", function(done){
        let fix1 = new FixMultiplication("42*?47=1974");

        fix1.fix(function(err, result){
            assert.equal(result, -1);
            done();
        });
    });

    it("2*12?=247", function(done){
        let fix1 = new FixMultiplication("2*12?=247");

        fix1.fix(function(err, result){
            assert.equal(result, -1);
            done();
        });
    });

    
});