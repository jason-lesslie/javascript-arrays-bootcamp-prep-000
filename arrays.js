function addElementToBeginningOfArray(originArray, addElement) {
  var outputArray = [addElement, ... originArray]
  return outputArray
}
function destructivelyAddElementToBeginningOfArray(originArray, addedElement) {
  var originArray = originArray.unshift(addElement)
  return originArray
}
