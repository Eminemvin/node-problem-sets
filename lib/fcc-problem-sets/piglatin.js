/**
 * Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
    const vowelSuffix = "way";
    const normalSuffix = "ay";
    let newString= str;
    //pseudo code
    let vowels = /[aeiou]+/;
    // check if first character is vowel, if so, return str+way.
    if (vowels.test(newString.substring(0, 1))) {
        return newString + vowelSuffix;
    } else {
        // else
        // split the str into regexes, using vowels as separators.
        let strArray = str.split(vowels);
        // get the first regex group, and append to end of string.
        let firstBlock = strArray.shift();
        newString = newString.substring(firstBlock.length);
        newString+=firstBlock+normalSuffix;
        return newString;

        
        // replace first x characters of string following regex group 1 length.
        // add ay then return
    }
}

module.exports = translatePigLatin;