# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer:
  The difference between a parameter and an argument is that a parameter is a placeholder in a function for an argument and an argument is the data or information that is passed into the function. When creating functions it is important to have the same number of place holders as we do arguments, so that the arguments can be passed into the function when it is invoked.

  Researched answer:
  A parameter is used to refer to the variable in a function and is defined inside the parentheses of the function. An argument refers to the actual input supplied when the function is called on. A parameter is a property of the function and the argument is the value that is supplied to the function that matches one of the parameters. A difference between a parameter and an argument is that a parameter is an unchanging part of the function and the argument values can vary when used to invoke the function.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer:
  The built in method .map() takes in three predefined parameters which include the value, index, and array. The value of the array is required. The index of the array and the array are optional. The built in method .map() iterates through an array and returns an array of the same length.

  Researched answer:
  The higher-order function .map() takes in three built-in parameters; the value, index, and array. The only parameter that is required is the the value. The .map() method does not execute the function for an array element without values. The index and array parameters are optional. The .map() method iterates through an array and calls a function for each element in the array in order and creates a new array with the results. The .map() method does not change the original array.


3. What is the difference between map and filter?

  Your answer:
  The difference between map and filter is that the built-in method .map() iterates through an array and returns an array of the same length and the built-in method .filter() iterates through an array and returns a new array with only values of a set condition. Filter is able to return a subset of the values in the array because filter has a built in conditional statement.

  Researched answer:
  The built-in method .map() iterates through an array and returns a new array of the same length. It will do something to each element in the given array. It does not modify the array it is invoked on. The function that is passed to .map() should return a value.
  The filter method makes a decision about each element in an array and returns an array containing a subset of the elements of the array on which it is invoked. The function you pass to filter will return a boolean (true or false) because it has a built-in conditional statement. If the condition is met, the elements are passed to the subset and is added to the new array.


4. What is the difference between a function and a method?

  Your answer:
  Functions and methods are both functions. The difference between a function and a a method is that a function performs a specific task that is given and can be called on as many times as needed anywhere in the program where as a method can only be used in the scope of the object it is in. Both functions and methods are reusable snippets of code that perform specific tasks.

  Researched answer:
  The difference between a function and a method is that a function is a block of code designed to do a particular task and can take information form anywhere in the program. This eliminates having to write the same function over and over again whereas a method is an object property that has a function value. A method is called on using the object of the class where the method is written.


5. What is object destructuring?

  Your answer:
  Object destructuring is a way of creating a variable that attaches the pathway through an array or object to a particular key. Destructuring allows object values to be unpacked into individual variables. This is useful because it allows us to create a shorter path to certain values within an array or object.

  Researched answer:
  Desstructuring is a special way of assigning variables in Javascript. When destructuring an object you are taking the properties of an object and breaking them out into individual recallable variables. It allows you to take data from arrays, objects, and maps and set them into distinct variables.


6. STRETCH: What is hoisting in JavaScript?

  Your answer: I had to research what hoisting was and was unable to give an answer here.

  Researched answer
  Hoisting allows functions to be safely used in code before they are declared by moving the declaration of functions, variables, or classes to the top of the scope before using the code. This allows for functions and variables to be used before they are declared.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
Class inheritance is the relationship that classes can have between one another. Attributes and methods can be inherited from other classes creating a parent-child relationship. Parent class information flows downstream to children. Children cannot pass information between one another or their parents. Class inheritance keeps code from being repetitive.


2. React:
React is a Javascript library for creating user interfaces. React uses reusable components that can be either classes or functions. It is used for handling the front-end that viewers see and can be used for developing both web and mobile applications.

3. React state:
React state is a special object that manages and stores the data in a react class component. The state determines how the component renders and behaves.

4. React lifecycle methods:
React lifecycle methods are built-in methods that organize react functionality so that they behave in a predictable way. The lifecycles are broken down into three phases. The mounting phase is when a component is put into the DOM. The updating phase is when something in the component is updated. The un-mounting phase is when the component is removed from the DOM.

5. DOM:
DOM stands for document object model and it is the visual representation of the code. It is a programming interface for web documents. It represents the page so that programs can change the document structures style and content. HTML elements/tags are called nodes in the DOM.
