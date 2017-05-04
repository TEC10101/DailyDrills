// for hiding entire page
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

// for rearranging list items
const listUl = listDiv.querySelector('ul');
// for storing the 4x <li> items on the default page
const lis = listUl.children;

// 5/3/17 consts for firstListItem and lastListItem
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

// sample to change heading from "things that are purple"
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

// you can add an item without the [up][down][remove]
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');


// Practice with traversing between first and last child elements
firstListItem.style.backgroundColor = 'listskyblue';
lastListItem.style.backgroundColor = 'lightsteeleblue';


// Function to append `Up` `Down` `Remove` buttons to all <li> elems
function attachListItemButtons (li){
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
};

// Loop through existing hard-coded ul-child elems and process the button adder
for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i])
}


// for rearranging list items
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);

      /*
      ** Test to see how to make a button dynamically select the element it's within...
      **
      <ul>
        <li>
          <p>Text Here</p><button>Highlight Me!</button>
        </li>
      </ul>
      const ul = document.querySelector('ul')[0];
      ul.addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {
          e.target.previousElementSibling.className = 'highlight';
        }
      }); // End Test
      
      */
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
  attachListItemButtons(li);
  ul.appendChild(li);
  // ...reset the text entry field to [____]
  addItemInput.value = '';
});

// ^ the addition of my dynamic buttons works perfectly.

const section = document.querySelector('section');
let paragraphs = section.children;
for (let i = 0; i < paragraphs.length; i += 1) {
    paragraphs[i].style.color = 'blue';
};