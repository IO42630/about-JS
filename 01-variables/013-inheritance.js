var parent = {
    property : 'foo'
}

var child = {}

child.__proto__ = parent

console.log(child.property)
