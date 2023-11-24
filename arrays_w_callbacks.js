const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
let greaterThan0 = nums.every(n => n >= 0) //using every to see if all the numbers in nums is greater than or equal to zero
console.log(greaterThan0)//logs our response
// determine if every word shorter than 8 characters
let lessThan8 = panagram.every((element, index, panagram) => { //creating a callback function here to search through extra parameters
    return panagram[index].split('').length < 8 //return each index's length after being split individually.
})
console.log(lessThan8)//logs our repsonse

// Filter
// filter the array for numbers less than 4
let lessThan4 = nums.filter(n => n < 4) //goes through the array of nums and filter out the numbers less than 4
console.log(lessThan4)//logs our numbers
// filter words that have an even length
let evenWords = panagram.filter((element, index, panagram) => {//goes through panagram by the element and the index
    return panagram[index].split('').length % 2 === 0 //returns the words that are even
})
console.log(evenWords)//logs even numbers

// Find
// Find the first value divisible by 5
let divisibleBy5 = nums.find(n => n % 5 === 0) //goes through nums and finds the first number divisible by 5
console.log(divisibleBy5) //logs the first response
// find the first word that is longer than 5 characters
let longWords = panagram.find((element, index, panagram) => {//goes through the panagram by the element and the index 
    return panagram[index].split('').length > 5 //returns any word that is greater than 5 characters.
})
console.log(longWords) //logs undefinded because there is not word longer than 5 characters. I checked to make sure that it works by adding a 6 character word and it logged it.

// Find Index
// find the index of the first number that is divisible by 3
let divisibleBy3 = nums.findIndex(n => n % 3 === 0)//goes through nums and finds the index of the first number divisible by 3
console.log(divisibleBy3) //logs the index 2
// find the index of the first word that is less than 2 characters long
let lessThan2 = panagram.findIndex((element, index, panagram) => {//goes through panagram and tries to find the index of a number that is less than 2 characters
    return panagram[index].split('').length < 2 //returns the index of a 2 character word
})
console.log(lessThan2) //since there is no word less than 2 characters, they gave the index of -1

// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach((n, nums) => { //running through each number in nums 
    console.log(n * 3) //logging each one times 3
})
// console.log each word with an exclamation point at the end of it
// let exclames = []
panagram.forEach((element,index, panagram) => {//running through each element in panagram
    // exclames.push(`${panagram[index]}!`)
    console.log(`${element}!`)//adding an ! to it
})
// console.log(exclames)
// Thought Questions

// What happened to the original array? The console.log just returned the results, when I try to run console.log() a function, it gives me undefined which made me think it just looks for results
// Can you store the values from a forEach method in a new array? Yes, if you push the return results into an empty array and add an index option as a parameter

// Map
// make a new array of each number multiplied by 100
let multiplyBy100 = nums.map(n => n * 100) //this goes through each number and muliplies it by 100
console.log(multiplyBy100)//logs our new array
// make a new array of all the words in all uppercase
// let newArray = []
let upperCase = panagram.map((element, index, panagram) => {//this goes through each index in panagram
    // newArray.push(panagram[index].toUpperCase())
    return panagram[index].toUpperCase()//this will return each word as capital letters
})
console.log(upperCase)//logs our new array
// console.log(newArray)
// Thought Questions

// What happened to the original array? The original array now is an array of the original multiplied by 10.
// Can you store the values from a map method in a new array? Yes, you can push to a new array.

// Some
// Find out if some numbers are divisible by 7
let divisibleBy7 = nums.some(n => n % 7 === 0)//checks to see if any of the numbers are divisible by 7. 
console.log(divisibleBy7) //made sure to check by altering 7 and 0 because those will always yield true and it works properly
// Find out if some words have the letter a in them
let doesAExist = panagram.some((element, index, panagram) => {//goes through each index in panagram
    return panagram[index].includes('a')//logs if any of the indeces has an 'a'
})
console.log(doesAExist)//logs our answer
