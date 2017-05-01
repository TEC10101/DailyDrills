// for hiding entire page
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

// for rearranging list items
const listUl = listDiv.querySelector('ul');

// sample to change heading from "things that are purple"
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

// you can add an item without the [up][down][remove]
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');


// for rearranging list items
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }  
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      // When nextLi is at the end of the array, it becomes NULL and thus the next line will not run.
      if (nextLi) {
        // We have to reverse the order because there is no insertAfter() method.
        ul.insertBefore(nextLi, li);
      }
    } 
  }
});

// for hiding entire page
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

// sample to change heading from "things that are purple"
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

// you can add an item without the [up][down][remove]
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  li.innerHTML += '<button class="up">Up</button>';
  li.innerHTML += '<button class="down">Down</button>';
  li.innerHTML += '<button class="remove">Remove</button>';
  ul.appendChild(li);
  // ...reset the text entry field to [____]
  addItemInput.value = '';
});

// ^ the addition of my dynamic buttons works perfectly.

// nominal change... adfkajdflkajdf 