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

console.log($('a').attr('href'));

$('a').not('[href*="www.github.com"]').attr("target", "_blank");

$('button').on('click', function () {
  $('a').attr('href', 'http://www.github.com/');
  console.log($('a').attr('href'));
});

