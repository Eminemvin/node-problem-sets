const Member = require("./Member");

const MedianFaking = function(memberCount, measurementsPerMember, measurements, goal){
    this.memberCount = memberCount;
    this.measurementsPerMember = measurementsPerMember;
    this.measurements = measurements;
    this.members = [];
    this.goal = goal;
}

MedianFaking.prototype = ((function(){
    const parseMeasurements= function(){
        for (let idx = 1; idx <= this.memberCount; idx++){
            console.log("iterating through member: " + idx);
            console.log("getting member's measurements");
            let memMeasurements = [];
            for(let jdx = 0; jdx<this.measurementsPerMember; jdx++){
                memMeasurements.push(this.measurements.shift());
                console.log("current member measurements: " + memMeasurements);
            }
            let member = new Member(idx, memMeasurements);
            this.members.push(member);
            console.log("current member count: " + this.members.length);
        }
    }

    const getMembers = function(){
        return this.members;
    }
    const fakeItTilYouMakeIt = function(){
        for (member of this.members){
            console.log("reconstructing measurements " + member);
            this.measurements = this.measurements.concat(member.getMeasurements());
            console.log("measurements: " + this.measurements);
        }

        this.sortedArray = this.measurements.sort(function(a,b){
            return a-b;
        });
        console.log("sorted array: " + this.sortedArray);
    
        let goalIndex = -1;
        for (let idx = 0; idx< this.sortedArray.length; idx++){
            if(this.sortedArray[idx]===this.goal){
                console.log("found element at: " + idx);
                goalIndex = idx;
                break;
            }
        }

        console.log("goalIndex is at: " + goalIndex);
        let desiredIndex = this.measurements.length/2;
        let offset = 0;
        removableElements = [];
        console.log("desired goal index should be at: " + desiredIndex);
        if (goalIndex=== desiredIndex){
            console.log("just where we want it to be");
        }else if (goalIndex<desiredIndex){
            offset = desiredIndex-goalIndex;
            console.log("goal is to the left of desired by " + offset);
            for (let idx = goalIndex +1; idx< this.measurements.length; idx++ ){
                console.log("adding element to removables: " + this.sortedArray[idx]);
                removableElements.push(this.sortedArray[idx]);
            }
            console.log("removable elements: " + removableElements);

        }else{
            offset = goalIndex-desiredIndex;
            console.log("goal is to the right of desired by " + offset);

            for (let idx = 0; idx< goalIndex; idx++ ){
                console.log("adding element to removables: " + this.sortedArray[idx]);
                removableElements.push(this.sortedArray[idx]);
            }
            console.log("removable elements: " + removableElements);
        }
        console.log("checking how many measurements from each member can be replaced");
        let memberToreplace = null;
        for (member of this.members){
            let memberCount = getNumberOfReplaceableElements(member.getMeasurements(), removableElements);
            console.log("member has this much removable: " + memberCount);
            member.setReplaceable(memberCount);
        }
        
    }

    function getNumberOfReplaceableElements(measurements, replaceable){
        let count = 0;
        for (value of measurements){
            console.log("checking if " + value + "is replaceable");
            if (replaceable.includes(value)){
                count++;
            }
        }
        return count;
    }

    function getGoal(currentValue, goal){
        console.log("goal is at: " + this.goal);
        console.log("comparing with: " + currentValue);
        return currentValue>=this.goal;
    }

    

    return {
        parseMeasurements,
        getMembers,
        fakeItTilYouMakeIt
    }

})())


module.exports = MedianFaking;