// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
      // describe method that lists the name of the function OR naming of the particular test.





// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
// a test/it method, nested within the describe block, that in plain words, describes that the function does.
//an expect method, nested within the test block, calling on the evenNum() function, followed by the .toEqual() matcher that checks the expected output of the function return.

describe("evenNum", () => {
  const num1 = 15
  // Expected output: "15 is divisible by three"
  const num2 = 0
  // Expected output: "0 is divisible by three"
  const num3 = -7
  // Expected output: "-7 is not divisible by three"
    it("decides if the number is evenly divisible by three or not", () => {
      expect(evenNum(num1)).toEqual("15 is divisible by three")
      expect(evenNum(num2)).toEqual("0 is divisible by three")
      expect(evenNum(num3)).toEqual("-7 is not divisible by three")
    })
  })
// //  FAIL  ./code-challenges.test.js
//   evenNum
//     ✕ decides if the number is evenly divisible by three or not
//   ● evenNum › decides if the number is evenly divisible by three or not
//     ReferenceError: evenNum is not defined

// b) Create the function that makes the test pass.
// Declare a function named evenNum
// Assign number as parameter
// Use conditional statement
// Return expected output

const evenNum = (number) => {
  if(number % 3 === 0) {
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}
// PASS  ./code-challenges.test.js
//   evenNum
//     ✓ decides if the number is evenly divisible by three or not (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a describe method that lists the name of the function OR naming of the particular test.
// a test/it method, nested within the describe block, that in plain words, describes that the function does.
//an expect method, nested within the test block, calling on the capWords() function, followed by the .toEqual() matcher that checks the expected output of the function return.

// a) Create a test with expect statements for each of the variables provided.
describe("capWords", () => {
  const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
  const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    it("returns an array with all the words capitalized", () => {
      expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})
// FAIL  ./code-challenges.test.js
//  evenNum
//    ✓ decides if the number is evenly divisible by three or not (1 ms)
//  capWords
//    ✕ returns an array with all the words capitalized (1 ms)
//
//  ● capWords › returns an array with all the words capitalized
//
//    ReferenceError: capWords is not defined


// b) Create the function that makes the test pass.
// Declare a function named capWords
// Assign array as parameter
// Use .map() method to iterate through string
// Use .toUpperaCase method to capitalize first letter
// Use slice to add the remainder of the words to capitalized first letters.
// Return capitalized words in an array

const capWords = (array) => {
  return array.map(value => value[0].toUpperCase() + value.slice(1, value.length))
}
// PASS  ./code-challenges.test.js
//  evenNum
//    ✓ decides if the number is evenly divisible by three or not (1 ms)
//  capWords
//    ✓ returns an array with all the words capitalized
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a describe method that lists the name of the function OR naming of the particular test.
// a test/it method, nested within the describe block, that in plain words, describes that the function does.
//an expect method, nested within the test block, calling on the capWords

// a) Create a test with expect statements for each of the variables provided.
describe("firstVowel", () => {
  const vowelTester1 = "learn"
  // Expected output: 1
  const vowelTester2 = "academy"
  // Expected output: 0
  const vowelTester3 = "challenges"
  // Expected output: 2
    it("logs the index of the first vowel", () => {
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)
    })
})
// // FAIL  ./code-challenges.test.js
// //  firstVowel
// //    ✕ logs the index of the first vowel (1 ms)
// //  ● firstVowel › logs the index of the first vowel
// //    ReferenceError: firstVowel is not defined


// b) Create the function that makes the test pass.
// Declare a function named firstVowel
// Assign string as parameter
// Use for loop to iterate through the string
// Use if statement to look for vowels
// Use charAt() to look for characters
// Return index position of first vowel

const firstVowel = (string) => {
  for(let i=0; i<string.length; i++){
    if(string.charAt(i) == "a" || string.charAt(i) == "e" ||
    string.charAt(i) == "i" || string.charAt(i) == "o" ||
    string.charAt(i) == "u"){
      return i
    }
  }
}
// PASS  ./code-challenges.test.js
//  evenNum
//    ✓ decides if the number is evenly divisible by three or not (1 ms)
//  capWords
//    ✓ returns an array with all the words capitalized (1 ms)
//  firstVowel
//    ✓ logs the index of the first vowel
