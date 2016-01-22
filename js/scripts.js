var pingpong = function(countTo){
  var returnArray = [];
  for(var index = 1; index <= countTo; index += 1)
  if (index % 3 === 0) {
    returnArray.push("ping");
  } else {
  returnArray.push(index);
  }
  return returnArray;
}
