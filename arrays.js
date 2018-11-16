function addElementToBeginningOfArray(arr, el){
  arr = [el, ...arr];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el);
  return arr;
}