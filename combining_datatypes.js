// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    colors: ["blue","red","yellow"]
}
console.log(crayonBox.colors[1])
// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
     cap: {
        material: ['metal','plastic'],
        color: 'blue'
    }
}
console.log(bottle.cap.material[0])
// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [{pen: 'blue', price: 4},{notebook: 'spiral', price: 3},{backpack: 'Jansport', price: 10}]
console.log(receipt[0].pen)
// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
const apartmentBuilding = [Unit1 = ['David','Cassie','Rebecca'], Unit2 = ['Rohan','Tushar']]
console.log(apartmentBuilding[0][0])

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
garmet = //naming an object
    {item: "scarf", //item is a scarf
    size: "6ft"} //size is 6 ft

const knit = () => { //naming a function knit
    console.log(garmet.item) //want the return of this function to be the name of the item
}
knit()//invoking the function
// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
// const crayonBox = {
//     colors: ["blue","red","yellow"]
// } Just putting this here to remind myself of the function I created earlier.

const crayonSelector = () => { //creating the function
    console.log(crayonBox.colors[1]) //want the return of the function to be the second listed crayon
}
crayonSelector()//invoking the function
// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
function powerButton() {//creating an outer function
    return function options() {//return the value of this inner function
        console.log("select a song")//the return of this function is the message we want
    }
}
powerButton()()//invoking the function

// Model a Vending Machine Model a vending machine

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack
const vendingMachine = {snacks: [
     {name: "Snickers", price: 1},{name: "Butterfinger", price: 1},{name: "Baby Ruth", price: 1}]
}//created an object with an array of objects
function vend(a) {//created a function that takes the parameter of a variable
    console.log(`${this.snacks[a].name}`)//I want the function to call this (vendingMachine) object, the parameter (index in the array of object) and the name of the index.
}
vendingMachine.vend = vend //need to add the function to the object
vendingMachine.vend(2) //call the object and function

// Callbacks
// Make a function add that takes two arguments (numbers) and sums them together
const add = (num1,num2) => { //putting in num1 and b as my parameters
    console.log(num1 + num2)//want the function to read num1 + num2
   }
add(3,4)// invoke 3 + 4
// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1,num2) => { //putting in num1 and d as my parameters
    console.log(num1 - num2)//want the function to read num1 - num2
}
subtract(7,6)//invoke 7 - 6
// Make a function multiply that takes two arguments and multiplies them
const multiply = (num1,num2) => {//putting in num1 and num2 as my parameters
    console.log(num1 * num2)//want the function to read num1 * num2
}
multiply(8,9)//invoke 8 * 9 
// Make a function divide that takes two arguments and divides them
const divide = (num1,num2) => {//putting in num1 and num2 as my parameters
    console.log(num1 / num2)//want the function to read num1 / num2
}
divide(9,3)//invoke 9 divided by 3
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
const calculate = (num1,num2,operates) => { //making a function that takes in 2 numbers and another function that is a callback
    operates(num1,num2)//callback function takes in the two numbers and then whatever we defined earlier, we can use.
}

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote
calculate(7,8,add)//gets us to take num1 and num2 and add
calculate(34,27,subtract)//gets us to take num1 and num2 and subtract
calculate(3,4,multiply)//gets us to take num1 and num2 and multiply
calculate(8,2,divide)//gets us to take num1 and num2 and use divide.

// Function definition placement
// Clean up this code, so that it works and has function definitions in the correct place

// bar();
// const bar = () => {
//     console.log('bar here');
// }
// foo();

// const foo = () => {
//     console.log('foo here');
// }


// const bar = () => {
//     console.log('bar here');
// }
// const foo = () => {
//     console.log('foo here');
// }
// bar(); //moved bar here because the initial location was before the function was defined.
// foo(); //moved foo here because the initial location was before the function was defined.

// foo();

// const foo ()=>{ //SyntaxError: Missing initializer in const declaration means it was missing the = to make it a function
//     console.log('hi');
// }

// foo();

// const foo = ()=>{ //ReferenceError: Cannot access 'foo' before initialization means that the foo is being called before it's been written.
//     console.log('hi');
// }



const foo = ()=>{
    console.log('hi');
}
foo(); //just needed to add the = sign to make it a function and move the call of the function after the function had been written.


