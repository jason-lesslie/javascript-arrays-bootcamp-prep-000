function addElementToBeginningOfArray(originArray, addElement) {
  var outputArray = [addElement, ... originArray]
  return outputArray
}
function destructivelyAddElementToBeginningOfArray(originArray, addedElement) {
  var originArray = originArray.unshift(addElement)
  return originArray
}
function addElementToEndOfArray(originArray, ) {
  var outputArray = [originArray, ... addElement]
  return outputArray
}
function destructivelyAddElementToEndOfArray(originArray, addedElement) {
  var originArray = originArray.push(addElement)
  return originArray
}
