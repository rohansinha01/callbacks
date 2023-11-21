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