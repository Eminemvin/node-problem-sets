/**
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 */

function getPair(char) {
    switch (char) {
        case "G":
            return ["G","C"];

        case "C":
            return ["C","G"];

        case "A":
            return ["A","T"];

        case "T":
            return ["T","A"];

    }
}

function dnaPairing(str) {
    return str.split("").map(char => getPair(char));
    
}

module.exports = dnaPairing;
