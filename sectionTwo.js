const addToZero = (array) => {
  let answer = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
      } else if (array[i] + array[j] === 0) {
        answer = true;
      }
    }
  }
  return answer;
};
console.log("addToZero", addToZero([1, 2, 3, -2]));

// O(N^2)
// this has a space complexity of O(N^2) because it scales linearly with the size of the array. The larger the array the longer it takes to loop.

const hasUniqueChars = (word) => {
  let wordArr = word.split("");
  let unique = true;
  for (let index = 0; index < wordArr.length; index++) {
    let char = wordArr.splice(index, 1);
    let stringChar = char.toString();
    if (wordArr.includes(stringChar)) {
      unique = false;
      wordArr.splice(index, 0, stringChar);
    } else {
      wordArr.splice(index, 0, stringChar);
    }
  }
  return unique;
};
console.log("hasUniqueChars", hasUniqueChars("Moonday"));

// O(N^2)
// this has a space complexity of O(N^2)  because it scales linearly with the size of the string. It turns the string into an array and then loops through it. The bigger the array the longer it takes to loop through it.

const isPangram = (string) => {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let lowerCase = string.toLowerCase();
  let arrLowerCase = lowerCase.split("");
  let answer = true;

  for (let index = 0; index < alpha.length; index++) {
    if (arrLowerCase.includes(alpha[index]) === false) {
      answer = false;
    }
  }
  return answer;
};
console.log(
  "isPangram",
  isPangram("The quick brown fox jumps over the lazy dog!")
);

// O(N)
// this has a space complexity of O(N) because it scales linearly with the size of the string. It turns the string into an array and then loops through it. The bigger the array the longer it takes to loop through it.

const findLongestWord = (array) => {
    let answer = 0;
    for (let index = 0; index < array.length; index++) {
        let indexSplit = array[index].split('');
        if (indexSplit.length> answer) {
            answer =indexSplit.length
        }
        
    }
    return answer
}
console.log('findLongestWord', findLongestWord(["hi", "hello"]));

// O(N)
// this has a space complexity of O(N) because it scales linearly with the size of the array. The larger the array the longer it takes to loop.