var pingpong = function(countTo){
  if ((countTo > 0) && (countTo < 10000)) {
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
  } else {
    alert ("Don't be silly now");
  }
}

$(document).ready(function() {
  $("form.input").submit(function(event){
    $( "#results" ).empty();
    var countUpTo = parseInt($("input#countUpTo").val());
    var printMeArray = pingpong(countUpTo);
    printMeArray.forEach(function(word) {
      var tempArray = ["<li>", word, "</li>"];
      var tempString = tempArray.toString().replace(/,/g, "");
      $("#results").append(tempString);
    })
  event.preventDefault();
  })
});
