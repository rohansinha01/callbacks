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
      [c, p] = [n, c] //c is now n and p is now c
      es += (c % 2 === 0) ? c : 0// run es + c if es is an even number.
    }
    return es //return the value of es
  }
  
  console.log(f(55))//This returns 44  

  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))
  
  
  