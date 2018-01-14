var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(originArray, addElement) {
  var outputArray = [addElement, ... originArray]
  return outputArray
}
function destructivelyAddElementToBeginningOfArray(originArray, addElement) {
  originArray.unshift(addElement)
  return originArray
}
function addElementToEndOfArray(originArray, addElement) {
  var outputArray = [...originArray, addElement]
  return outputArray
}
function destructivelyAddElementToEndOfArray(originArray, addElement) {
  originArray.push(addElement)
  return originArray
}
function accessElementInArray(originArray, arrayIndex) {
  return originArray[arrayIndex]
}
function destructivelyRemoveElementFromBeginningOfArray(originArray) {
  originArray.shift()
  return originArray
}
function removeElementFromBeginningOfArray(originArray) {
  return originArray.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(originArray) {
  originArray.push()
  return originArray
}
function removeElementFromEndOfArray(originArray) {
  originArray.pop()
  return originArray
}
