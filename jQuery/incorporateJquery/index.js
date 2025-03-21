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

// Manipulating text in Jquery
$("h1").text("Bye");

// Manipulating text of the element in Jquery (innerHTML)
$("button").html("<em>Don't click me</em>");

// Manipulating attributes with Jquery

//get attribute
console.log($("img").attr("src"));

//set attribute
$("a").attr("href", "https://www.google.com");

// Adding Event Listeners with JQuery
//clicking h1 element
$("h1").click(function() {
    $("h1").css("color", "purple");
});

// clicking all button element and change h1 element's color
$("button").click( function () {
    $("h1").css("color","red");
});

// Keypress || Keydown eventListener
$("input").keydown(function(event){
    console.log(event.key);
})

// other example of event listener
$("h1").on("mouseover", function(){
    $("h1").css("color", "orange");
})

// Challenge: Whenever I press a key inside the website it gets shown inside the h1.
// $(document).keydown(function(event){
//     $("h1").text(event.key);
// });

// Adding and removing elements with jQuery

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
// $("button").remove(); // remove all button inside our website | Yes, all