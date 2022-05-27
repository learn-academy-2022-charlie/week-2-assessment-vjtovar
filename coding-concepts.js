// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: This will convert the string into an array and log the array
// b) Verify and explain: I was wrong, the terminal logged an array of each character in a string. After researching, I found that when the quotations do not have a space in between them, the returned array will be an array of single characters.


// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will not have an output because there is no retuurn infront of `Hello, ${name}!`
// b) Verify and explain: I was correct, the output logged undefined because the function was invoked, but there was no return.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: This will log the multBy2 array multiplied by 2.
// b) Verify and explain: I was correct the terminal logged --->[ 8, 10, 12, 14, 16 ]


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will log an array with the even values filtered out.
// b) Verify and explain: I was correct, output---> [ 11, 13, 15 ]


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: This will log the value at the 0 index of the languages keyword in the object.
// b) Verify and explain: I was correct, output--->JavaScript is in the 0 index of the array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: This will log the new instance name "George" and will inherit the cohort "Bravo" and the year 2022 from the parent class.
// b) Verify and explain: I was correct, the terminal logged --->{ student: 'George', cohort: 'Bravo', year: 2022 }
