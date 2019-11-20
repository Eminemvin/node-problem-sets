function destroyer(arr) {
    // Remove all the values
    console.log(...arguments);
    let baseArray = arguments[0];
    let otherParams = [];
    for (let i = 1; i < arguments.length; i++){
        console.log("Injecting into other params");
        otherParams.push(arguments[i]);
    }
    let filterElement = otherParams.shift();
    baseArray = baseArray.filter(element => element!== filterElement);
    if (otherParams.length>0){
        return destroyer(baseArray, ...otherParams);
    }else{
        return baseArray;
    }
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  