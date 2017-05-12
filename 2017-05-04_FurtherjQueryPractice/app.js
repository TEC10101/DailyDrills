// @ts-check

// Example to click and have a process happen, and chain events.
// $('li').on('click', function() {
// 	$(this).text("Clicked!").delay(800).fadeOut(400);
// });

// Element selectors
/*
$('li');
$('a');
$('img');
$('p');


    // Descendent selectors
    $('p a');

    // Classes and IDs
    $('.class');
    $('#ID');

    // Attribute Selectors
    $("[name='newsletter']"");
*/

// console.log($('a').attr('href'));

// $('a').not('[href*="www.github.com"]').attr("target", "_blank");

// $('button').on('click', function () {
//   $('a').attr('href', 'http://www.github.com/');
//   console.log($('a').attr('href'));
// });



//$('body').click(function() {
//  console.log("clicked");
//}); // end click anywhere


/*

$('body').click(function() {
  console.log("clicked");
}); // end click anywhere

*/

//document.getElementById('awesomeBtn').onclick = function () {
//  console.log('hello from awesomeBtn');
//};

$('#awesomeBtn').on('click', function () {
  console.log('hello from awesomeBtn');
}); // End click


$(.loc).hover(
  function () {
    $(this).html("<strong>Location:</strong> Your House?");
  },
  function () {
    $(this).html("<strong>Treehouse:</strong> Treehouse Adoption Center");
  }
)