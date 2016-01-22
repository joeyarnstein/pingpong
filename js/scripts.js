var pingpong = function(countTo){
  var returnArray = [];
  for(var index = 1; index <= countTo; index += 1)
  if ((index === 3) || (index === 6)) {
    returnArray.push("ping");
  } else {
  returnArray.push(index);
  }
  return returnArray;
}
