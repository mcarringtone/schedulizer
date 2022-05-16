{
  var day = moment().format("llll");
  $("#currentDay").append(day);
}

var momentTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("H");
