const chai = require("chai");
const assert = chai.assert;
const Member = require("../../lib/MedianFaking/Member");


let testMeasurements1 = [1,2,3,4,5];
let testMeasurements2 = [6,7,8,9,10];
let testMeasurements3 = [11,12,13,14,15];


describe("Member prototype creation tests:", function(){
    it("should create distinct member prototypes", function(done){
       
        let member1 = new Member(1, testMeasurements1);
        let member2 = new Member(2, testMeasurements2);
        let member3 = new Member(3, testMeasurements3);

        assert.equal(member1.getIndex(), 1);
        assert.equal(member2.getIndex(), 2);
        assert.equal(member3.getIndex(), 3);
        assert.isArray(member1.getMeasurements());
        assert.isArray(member2.getMeasurements());
        assert.isArray(member3.getMeasurements());
        done();

    });

    it("should update measurements correctly", function(done){
        let member1 = new Member(1, testMeasurements1);
        let result = member1.changeMeasurementAtIndex(6, 5);
        assert.isFalse(result);
        result = member1.changeMeasurementAtIndex(6, 2);
        assert.isTrue(result);
        assert.equal(member1.getMeasurements()[2], 6);
        done()
    });
})