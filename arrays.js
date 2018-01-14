function addElementToBeginningOfArray(originArray, addElement) {
  var outputArray = originArray.unshift(addElement)
  return outputArray
}
function destructivelyAddElementToBeginningOfArray(originArray, addedElement) {
  var originArray = originArray.unshift(addElement)
  return originArray
}
