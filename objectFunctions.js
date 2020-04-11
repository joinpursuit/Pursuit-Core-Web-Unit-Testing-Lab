// 1.

// Write Tests that check
// * That when a dog is created it has a name and breed that match what was passed to the the constructor
// * That dogs have a bark function that when called returns 'Woof!!'
class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  bark() {
    return "Woof!!"
  }
}


// 2.

// Function that removes a property of an object and returns the modified object. This function must not modify the original object. Instead return a new object with property removed
// Example. Remove password from a user object
// Input: { name: "Jon Snow", email: "jon@winterfell.com", password: "grayW01f69" }, "password"
// output: { name: "Jon Snow", email: "jon@winterfell.com" }

// Write Tests that check
// * That verifies that for different inputs this function's return value is correct 
function removeProperty(obj, propToRemove) {
  const objCopy = { ...obj }
  delete objCopy[propToRemove]
  return objCopy;
}

module.exports = {
  Dog,
  removeProperty,
}
