function addElementToBeginningOfArray(arr, el){
  arr = [el, ...arr];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el){
  arr = [...arr, el];
  return arr;
}

function destructivelyAddElementToEndOfArray(arr, el){
  arr.unshift(el);
  return arr;
}

