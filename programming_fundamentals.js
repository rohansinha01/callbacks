/*
Common programming principles
As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

Read this article on programming principles, focus on the following nine:

DRY - Don't Repeat Yourself because everytime you repeat yourself, you create a new abstraction that might complicate a future part of your code.
KISS - Keep It Simple, Stupid helps provide clarity in our code and easier to debug.
Avoid creating a YAGNI - You Aren't Going to Need It is the principle that you shouldn't add functionality until you have to 
Do the simplest thing that could possibly work - figure out the easiest way to do something and update as needed.
Don't make me think - make your code easy to read and understand, so others can look at it and not ask questions about it.
Write code for the maintainer - when writing code, make sure it's clear for yourself, the maintainer, who will have to come back to the code.
Single responsibility principle - a single code should perform a single action. 
Avoid premature optimization - get your code to work before editing it
Separation of concerns - have a clear and organized code that is distinct and not crossing over to another code.
Answer

Write a ~1 sentence summary for each one - see above
Which ones surprise you (if any)? - I understand YAGNI, but my brain sometimes writes code in when I have a thought about it. Sometimes too early.
Which one is currently giving you the most struggle? - Doing the simplest thing is sometimes the 3rd or 4th thing that I think of.

*/

// Comment each line of this code and describe what it is doing. 
// Feel free to run this code and add console.logs to help you figure it out:

const f = l => { //function named f that takes in l as a variable
    let es = 0, p = 0, c = 1, n = 0 //declaring variables with starting values.
    while (c <= l) { //run this code while c is less than l
      n = c + p; //n is equal to c + p
      [c, p] = [n, c] //c is now n and p is now c for the equation above.
      es += (c % 2 === 0) ? c : 0// run es + c if es is an even number.
    }
    return es //return the value of es
  }
  
  console.log(f(55))//This returns 44  

  const f2 = (limit) => { //this is a function labeled f2 with the parameter definded as limit.
    let evenSum = 0; //starting off with variable labeled even sum
    let previous = 0; //variable labeled previous
    let current = 1; //variable labeled current
    while (current <= limit) { //run the following code while current is less than the limit.
      let next = current + previous; //declaring a new variable called next that is an equation where the current number is added to the previous number.
      previous = current; //This is redefining what the variables means for the equation above.
      current = next; //This is redefining what the variable is for the equation above.
      if (current % 2 === 0) { //while the current number is even.
        evenSum += current; //add the current value of the even numbers to even sum
      }
    }
    return evenSum; //print the evenSum of the equation above.
  }
  
  
  console.log(f2(55))
  
// Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//Answer: evenFibonacci
// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// f2. I could understand the mechanics of what was going on with the written out variables.
// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//The semi-colon matters in this case because if you take it away, it reads the next few lines all into one and not as a new equation.

  