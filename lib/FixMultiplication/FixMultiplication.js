const async = require("async");


let FixMultiplication = function(fxnString){
    let self = this;
    self.fxnString = fxnString;
};

FixMultiplication.prototype = ((function(){
    let fix= function(callback){
        let self = this;
        console.log("fixing function "+ self.fxnString);
        async.waterfall([
            async.apply(parse,self),
            findUnknown, 
            calculateMissing,
            validate
        ], function(err, result){
                if (err){
                    console.error("found error on async" +err);
                    callback(null, -1);
                }else{
                    console.log("result is: " + result);
                    callback(null, result);
                }
            }
        )
        
    };

    function parse(self, callback){
        console.log("getting A:");
        let splitA = self.fxnString.split("*");
        console.log("A is: " + splitA[0]);
        self.Avar = splitA[0];
        console.log("getting B");
        let splitB = splitA[1].split("=");
        console.log("B is: " + splitB[0]);
        self.Bvar = splitB[0];
        console.log("getting C");
        console.log("c is: " + splitB[1]);
        self.Cvar = splitB[1];
        callback(null, self);
    };

    function findUnknown(self, callback){
        if (self.Avar.indexOf("?") != -1){
            self.unknownA = true;
        }else if (self.Bvar.indexOf("?") != -1){
            self.unknownB = true;
        }else{
            self.unknownC = true;
        }
        callback(null, self);
    };

    function calculateMissing(self, callback){
        let result;
        if(self.unknownA){
            self.B = parseInt(self.Bvar);
            self.C = parseInt(self.Cvar);
            self.A = self.C/self.B;
            self.idx = self.Avar.indexOf("?");
            self.result = self.A.toString()[self.idx];
            self.Avar = self.Avar.replace("?", self.result);
            self.A = parseInt(self.Avar);
        }else if(self.unknownB){
            self.A = parseInt(self.Avar);
            self.C = parseInt(self.Cvar);
            self.B = self.C/self.A;
            self.idx = self.Bvar.indexOf("?");
            self.result = self.B.toString()[self.idx];
            self.Bvar = self.Bvar.replace("?", self.result);
            self.B = parseInt(self.Bvar);
        }else{
            self.A = parseInt(self.Avar);
            self.B = parseInt(self.Bvar);
            self.C = self.A*self.B;
            self.idx = self.Cvar.indexOf("?");
            self.result = self.C.toString()[self.idx];
            self.Cvar = self.Cvar.replace("?", self.result);
            self.C = parseInt(self.Cvar);
        }
        console.log("result is: " + self.result);
        callback(null, self);
    };
    function validate(self, callback){
        if (self.A * self.B === self.C){
            console.log("solution valid, result is: " + self.result);
            callback(null, self.result);
        }else{
            console.log("solution invalid");
            callback(new Error("invalid solution"));
        }
    }

    return {
        fix
    }
})());

module.exports = FixMultiplication; 

// let test1 = new MultFixer("42*47=1?74");
// test1.fix();