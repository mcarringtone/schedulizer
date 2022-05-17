var $containerBlock = $(".container");

var $thisContainer = $containerBlock[0];
for (var i = 0; i <= 8; i++) {
  // console.log($($thisContainer).children()[i])
  var $thisInputDiv = $($($($thisContainer).children()[i]).children()[1]);
  var $thisInputBar = $($($($thisInputDiv).children()[0]).children()[0]);
  if (localStorage.getItem($($containerBlock.children()[i]).attr("value"))) {
    $($thisInputDiv).val(
      localStorage.getItem($($containerBlock.children()[i]).attr("value"))
    );
  }
  // $($($thisContainer).children()[i]).children()[1].addClass("past")
  if (moment().hour() > $($containerBlock.children()[i]).attr("value")) {
    $thisInputBar.addClass("past");
  } else if (
    moment().hour() == $($containerBlock.children()[i]).attr("value")
  ) {
    $thisInputBar.addClass("present");
  } else {
    $thisInputBar.addClass("future");
  }
}
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var $input = $(
    $($($(this).parent()[0]).siblings()[1]).children()[0]
  ).children()[0];
  var $timeMethod = $($($(this).parent()[0]).parents()[0]).attr("value");
  // console.log($($thisInput).val(), $thisTimeVal)
  localStorage.setItem($timeMethod, $($input).val());
});
