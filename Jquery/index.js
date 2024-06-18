$(document).keydown(function(event) {
  $("h1").text(event.key);
  $("h1").css("color", "purple");
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
})