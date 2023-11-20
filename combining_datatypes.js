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