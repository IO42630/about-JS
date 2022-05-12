/* Inheritance */
// JS has no class inheritance.
// Instead, objects can have a __proto__ property.
// If a property can't be found within an object,
// JS will look in the object referenced by __proto__.


var parent = {property: 'foo'}

var child = {}

child.__proto__ = parent

console.log(child.property)
