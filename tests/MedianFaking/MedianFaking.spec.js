const chai = require("chai");
const assert = chai.assert;
const MedianFaking = require("../../lib/MedianFaking/MedianFaking");


describe("MedianFaking initialization tests", function(){
    it("should parse measurements correctly", function(done){
        let measurements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        let medianFaking = new MedianFaking(3,5,measurements);
        medianFaking.parseMeasurements();
        let members = medianFaking.getMembers();
        assert.isArray(members);
        assert.equal(3, members.length);
        assert.equal(5, members[0].getMeasurements().length);
        done();
    });
    it("should get correct solution", function(done){
        let measurements = [1, 8, 9, 3, 4, 6, 2, 3, 6, 8,9,10];
        let medianFaking = new MedianFaking(3,4,measurements, 4);
        medianFaking.parseMeasurements();
        medianFaking.fakeItTilYouMakeIt();
        done();
    })
});