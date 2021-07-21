const chai = require("chai");
const expect = chai.expect; 
const spinal = require("../../lib/fcc-problem-sets/spinaltapcase");

describe("Spinal Tap Case", ()=>{
    // spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".

it("test 1: should return ", (done)=>{
    let actual = spinal("This Is Spinal Tap");
    let expected = "this-is-spinal-tap";
    expect(actual).to.equal(expected);
})
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".

it("test 2: should return ", (done)=>{
    let actual = spinal("thisIsSpinalTap");
    let expected = "this-is-spinal-tap";
    expect(actual).to.equal(expected);
})
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".

it("test 3: should return ", (done)=>{
    let actual = spinal("The_Andy_Griffith_Show");
    let expected = "the-andy-griffith-show";
    expect(actual).to.equal(expected);
})

// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".

it("test 4: should return ", (done)=>{
    let actual = spinal("Teletubbies say Eh-oh");
    let expected = "teletubbies-say-eh-oh";
    expect(actual).to.equal(expected);
})

// spinalCase("AllThe-small Things") should return "all-the-small-things".

it("test 5: should return ", (done)=>{
    let actual = spinal("AllThe-small Things");
    let expected = "all-the-small-things";
    expect(actual).to.equal(expected);
})



});
