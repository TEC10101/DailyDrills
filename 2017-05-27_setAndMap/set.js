'use strict';

let classroom = new Set();

let stevenJ = {name: 'Steven', age: 22},
    sarah = {name: 'Sarah', age: 22},
    stevenS = {name: 'Steven', age: 22};

classroom.add(stevenJ);
classroom.add(sarah);
classroom.add(stevenS);

if (classroom.has(stevenJ)) console.log('stevenJ is in the classroom');
if (classroom.has(sarah)) console.log('sarah is in the classroom');
if (classroom.has(stevenS)) console.log('stevenS is in the classroom');

console.log('classroom size:', classroom.size);

// Create an array of students from the calssrom set
let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

// Create a set from an existing array
let alumni = new Set(arrayOfStudents);
console.log('alumni size:', alumni.size);