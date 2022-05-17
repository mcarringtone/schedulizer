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