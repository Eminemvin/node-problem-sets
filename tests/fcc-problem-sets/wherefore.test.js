const wherefore = require("../../lib/fcc-problem-sets/wherefore");
const chai = require("chai");
const expect = chai.expect; 

describe("wherefore art thou", () =>{
    it('should return [{ first: "Tybalt", last: "Capulet" }]', (done)=>{
        let actual = wherefore([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" } );
        let expected = [{ first: "Tybalt", last: "Capulet" }];
        expect(actual).to.deep.equal(expected);
        done();
    });
    it('should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]', (done)=>{
        let actual = wherefore([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
        let expected = [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }];
        expect(actual).to.deep.equal(expected);
        done();
    });
    
    it('should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]', (done) =>{
        let actual = wherefore([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
        let expected = [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }];
        expect(actual).to.deep.equal(expected);
        done();
    });
    it('should return [{ "apple": 1, "bat": 2, "cookie": 2 }]', (done)=>{
        let actual = wherefore([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
        let expected = [{ "apple": 1, "bat": 2, "cookie": 2 }];
        expect(actual).to.deep.equal(expected);
        done();
    });
    it('should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]', (done)=>{
        let actual = wherefore([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
        let expected = [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }];
        expect(actual).to.deep.equal(expected);
        done();
    });
    it('should return []', (done)=>{
        let actual = wherefore([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});
        let expected = [];
        expect(actual).to.deep.equal(expected);
        done();
    });
})
