var pingpong = function(countTo){
  var returnArray = [];
  for(var index = 1; index <= countTo; index += 1)
    if (index % 15 === 0){
      returnArray.push("pingpong");
    } else if (index % 3 === 0) {
      returnArray.push("ping");
    } else if (index % 5 === 0){
      returnArray.push("pong");
    } else {
      returnArray.push(index);
    }
  return returnArray;
}
