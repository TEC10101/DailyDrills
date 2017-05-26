// foo() is accessible in the global namespace
// "cluttering" the global namespace
// so much happening, Angular, bootstrap, jQuery...
/* 1 */
function foo() {
    console.log('foobar');
}


/* 2 */
(function() {
    function foo() {
    console.log('foobar');
}

foo();
}()); // Wrapped in closures


// Can also start with !
// The reason you want to do this is if you are concat multiple files together with the basic module pattern
// You also may not know which module comes first
/* 3 */
+function() {
    function foo() {
    console.log('foobar');
}

foo();
}();


/* 4 */
+function(underscore) {
    // someawesomemethod = "yay!!!"
}(_);