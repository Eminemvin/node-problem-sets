/**
 * You are given a String[] kings.
 * Each element of kings is the name of one king.
 * The name of each king consists of his actual name, a single space, and a Roman numeral.
 * Return a String[] containing the names rearranged into their proper order:
 * that is, the kings have to be in ascending lexicographic order according to their actual name,
 * and kings with the same name have to be in the correct numerical order.
 */

// create a sorting function, passing names of each king.
function kingSort(kingName1, kingName2) {
  console.log(`sorting between: ${kingName1}  and ${kingName2}`);
  // in sorting function, split to name and numeral.
  const king1Array = kingName1.split(" ");
  const king2Array = kingName2.split(" ");

  // check if names are equal,

  if (king1Array[0] === king2Array[0]) {
    // if name are equal, sort by numeral.
    console.log(`comparing ${king1Array[1]} vs ${king2Array[1]}`);
    console.log(
      `${convertToRoman(king2Array[1]) - convertToRoman(king1Array[1])}`
    );
    return convertToRoman(king1Array[1]) - convertToRoman(king2Array[1]);
  }
  //if not, sort by name.
  console.log("name sort");
  console.log(`${king1Array[0].localeCompare(king2Array[0])}`);
  return king1Array[0].localeCompare(king2Array[0]);
}

function romanNumeralReducer(previousValue, currentValue, currentIndex, array) {
  // check value at previous index
  // if lower, subtract twice the amount
  // repeat until a bigger value is seen on index;
  let computed = currentValue;
  while (currentIndex >= 0 && array[currentIndex - 1] < currentValue) {
    computed -= array[currentIndex - 1] * 2;
    currentIndex--;
  }
  return previousValue + computed;
}

function convertToRoman(romanNumeralString) {
  const valueConversion = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  let converted = 0;
  converted = romanNumeralString
    .toLowerCase()
    .split("")
    .map((character) => valueConversion[character])
    .reduce(romanNumeralReducer);
  return converted;
}

function getSortedList(kingNames) {
  kingNames.sort(kingSort);
  return kingNames;
}

console.log(
  getSortedList([
    "Philippe VI",
    "Jean II",
    "Charles V",
    "Charles VI",
    "Charles VII",
    "Louis XI",
  ])
);

// console.log(`VI : ${convertToRoman("VI")}`);
// console.log(`IV : ${convertToRoman("IV")}`);
// console.log(`VIII : ${convertToRoman("VIII")}`);
// console.log(`X : ${convertToRoman("X")}`);
// console.log(`IX : ${convertToRoman("IX")}`);
// console.log(`XIV : ${convertToRoman("XIV")}`);
// console.log(`XIX : ${convertToRoman("XIX")}`);
// console.log(`XII : ${convertToRoman("XII")}`);
// console.log(`XX : ${convertToRoman("XX")}`);
// console.log(`XV : ${convertToRoman("XV")}`);
