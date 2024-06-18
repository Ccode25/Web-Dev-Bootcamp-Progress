$(document).keydown(function(event) {
  $("h1").text(event.key);
  $("h1").css("color", "purplew ");
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
})