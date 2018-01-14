function addElementToBeginningOfArray(originArray, addElement) {
  var outputArray = [addElement, ... originArray]
  return outputArray
}
function destructivelyAddElementToBeginningOfArray(originArray, addElement) {
  var outputArray = originArray.unshift(addElement)
  return outputArray
}
function addElementToEndOfArray(originArray, addElement) {
  var outputArray = [originArray, ... addElement]
  return outputArray
}
function destructivelyAddElementToEndOfArray(originArray, addElement) {
  var outputArray = originArray.push(addElement)
  return outputArray
}
function accessElementInArray (originArray, arrayIndex) {
  return originArray[arrayIndex]
}
function destructivelyRemoveElementFromBeginningOfArray (originArray) {
  return originArray.shift()
}
