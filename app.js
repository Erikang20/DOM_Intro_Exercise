// console.log("Javascript is alive!");

$(document).ready(function() {
  event.preventDefault();

  $("div#greeting").replaceWith("<div>Hello World</div>");
  // alert("it works!")
  $("li").css("background-color", "yellow");

  $("div").add("img");
  $("img").attr("src",
    "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
  $(this).addClass("imagen");
  $("#greeting").append("img");


  $("li").on("click", function() {
    $("li").removeClass("selected");
    $(this).addClass("selected");


  });

  $("img").on("click", function(event) {
    $(this).detach("img");
    $("img").show(300);
  });

  $("#ghosting").mouseover(function() {
    $("#ghosting").detach("#ghosting");

  });

  $("#resize").mouseover(function() {
    $(this).width("40%");
  });

  $("#resize").mouseout(function() {
    $(this).width("16%");
  });

  $("#reset").click(function() {
    $("#reset").find('li').removeAttr('selected');
  });

  // $("input").keyup(function() {
  //   $(this).keyup(0);
  alert("I HATE NUMBERZZZ");

  // var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // for (var i = 0; i < num.length; i++) {
  //   return num[i];
  // }

  // });


});
