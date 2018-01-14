function addElementToBeginningOfArray(originArray, addElement) {
  var outputArray = [addElement, ... originArray]
  return outputArray
}
function destructivelyAddElementToBeginningOfArray(originArray, addElement) {
  var originArray = originArray.unshift(addElement)
  return originArray
}
function addElementToEndOfArray(originArray, addElement) {
  var outputArray = [originArray, ... addElement]
  return outputArray
}
function destructivelyAddElementToEndOfArray(originArray, addElement) {
  var originArray = originArray.push(addElement)
  return originArray
}
function accessElementInArray (originArray, arrayIndex) {
  return originArray[arrayIndex]
}
function destructivelyRemoveElementFromBeginningOfArray (originArray) {
  return originArray.shift()
}
