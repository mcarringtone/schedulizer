{
  var day = moment().format("llll");
  $("#currentDay").append(day);
}

var momentTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("H");

for (var i = 8; i < 20; i++) {
    var timeSlot = momentTime.add(1, "hour").format("HH:mm A");
    var currentState;

    if (hour == i) {
        currentState = 'present';
    } else if (hour > i) {
        currentState = 'future';
    } else if (hour < i) {
        currentState = 'past';
    }
