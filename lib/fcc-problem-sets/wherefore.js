/**
 * Make a function that looks through an array of objects (first argument)
 *  and returns an array of all objects that have matching name and value pairs (second argument).
 *  Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 * 
 * @param {*} collection 
 * @param {*} source 
 */

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    arr = collection.filter(element => {

        for (key in source){
            console.log("checking key: " + key);
            console.log("element.hasOwnProperty: " + element.hasOwnProperty(key));
            console.log("source: " + source[key]);
            if (!element.hasOwnProperty(key) || element[key] !== source[key]){
                return false;
            }
        }
        return true;
    })

    // Only change code above this line
    return arr;
}


module.exports = whatIsInAName;