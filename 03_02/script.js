/**
 * Create a Backpack object.
 */

const backpack = {
  // Attributes
  name: "Backpack", 
  volume: 30, 
  color: "grey", 
  pocketNum: 15, 
  strapLength: {
    left: 26, 
    right: 26, 
  }, 
  lidOpen: false, 

  // Methods
  setLidStatus: function (lidStatus) {
    this.lidOpen = lidStatus;
  }, 

  setStrapLength: function(leftStrapLength, rightStrapLength) {
    this.strapLength.left = leftStrapLength;
    this.strapLength.right = rightStrapLength;
  }
}

console.log("backpack obj: ", backpack)
console.log("backpack obj name: ", backpack.name)
var query = "pocketNum";
console.log("backpack obj pocket num: ", backpack[query]) // bracket notation is useful when you don't know the attribute name at runtime