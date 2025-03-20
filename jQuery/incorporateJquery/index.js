// Element Style manipulation 
// $("h1").css("color", "red");
//checking color of the particular element
// console.log($("h1").css("color"));


// Seperation of Concern: 
$("h1").addClass("big-title");
$("h1").removeClass("big-title");

//Adding & removing multiple class
$("h1").addClass("big-title margin-50");
$("h1").removeClass("margin-50"); // Second class removed

//Checking uf our element has a particular class
$("h1").hasClass("big-title");
// Answer: true. because I discard only the second class so technically the big-title class is still used by h1 element.