const Member = function(index, measurements){
    this.index = index;
    this.measurements = measurements;
}


Member.prototype = ((function(){
    const getIndex = function(){
        console.log("getting index: " + this.index);
        return this.index;
    }

    const getMeasurements = function(){
        console.log("getting measurements: " + this.measurements );
        return this.measurements;
    }

    const changeMeasurementAtIndex = function(newValue, index){
        if(index>= this.measurements.length){
            return false;
        }
        if (isNaN(newValue)){
            return false;
        }

        this.measurements[index] = newValue;
        return true;
    }

    return {
        getIndex,
        getMeasurements,
        changeMeasurementAtIndex
    }


})())


module.exports = Member;