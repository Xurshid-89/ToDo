// "use strict"

// const myInput = document.querySelector('.input');
// const myBtn = document.querySelector('.btn');
// const myList = document.querySelector('.list');

// let nodes = [1, 2, 3, 4];

// let funcValue = function () {
//   let myValue = myInput.value;
//   if (myValue !== "") nodes.push(myValue);
//   myInput.value = '';
//   console.log(nodes)
// };

// myBtn.addEventListener('click', function () {
//   funcValue();
// });

// myList.addEventListener('click', (e) => {
//   let myTarget = e.target;
//   if (myTarget.className === "btn__delete") {
//     console.log(myTarget);
//   }
// })

// function showNodes() {
//   for (let node of nodes) {
//     myList.insertAdjacentHTML("afterbegin", `
//     <li class="list__item">
//     <p class="item__text">${node}</p><button class="btn__delete">X</button></li>
//     `);
//   };
// };

// showNodes();
// ===============================================================================================

// "use strict";

// const myInput = document.querySelector('.input');
// const myBtn = document.querySelector('.btn');
// const myList = document.querySelector('.list');

// let nodes = ["Salom"];

// function createNode(value) {
//   const listItem = document.createElement('li');
//   listItem.classList.add('list__item');

//   const itemText = document.createElement('p');
//   itemText.classList.add('item__text');
//   itemText.textContent = value;
//   listItem.appendChild(itemText);

//   const deleteBtn = document.createElement('button');
//   deleteBtn.classList.add('btn__delete');
//   deleteBtn.textContent = 'X';
//   deleteBtn.addEventListener('click', function () {
//     myList.removeChild(listItem);
//   });
//   listItem.appendChild(deleteBtn);

//   myList.appendChild(listItem);
// }

// function addNode() {
//   let myValue = myInput.value;
//   if (myValue !== "") {
//     nodes.push(myValue);
//     createNode(myValue);
//     myInput.value = '';
//   }
// }

// myBtn.addEventListener('click', function () {
//   addNode();
// });


// function showNodes() {
//   for (let node of nodes) {
//     createNode(node);
//   }
// }

// showNodes();

// ==============================================================================================

"use strict";

const myInput = document.querySelector('.input');
const myTextarea = document.querySelector('.textarea');
const myBtn = document.querySelector('.btn');
const myList = document.querySelector('.list');

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate = `Создана: ${day}.${month}.${year}`;

const nodes = [];

function createNode(input, textarea, toDoData) {
  const listItem = document.createElement('li');
  listItem.classList.add('list__item');

  const itemText = document.createElement('p');
  itemText.classList.add('item__text');
  itemText.textContent = input;
  listItem.appendChild(itemText);

  const itemTextarea = document.createElement('p');
  itemTextarea.classList.add('item__textarea');
  itemTextarea.textContent = textarea;
  listItem.appendChild(itemTextarea);

  const itemData = document.createElement('p');
  itemData.classList.add('item__data');
  itemData.innerHTML = toDoData;
  listItem.appendChild(itemData);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn__delete');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', function () {
    myList.removeChild(listItem);
  });
  listItem.appendChild(deleteBtn);

  myList.appendChild(listItem);
}

function addNode() {
  const myValue = {
    tema: "",
    text: "",
    mydate: fullDate,
  };
  myValue.tema = myInput.value;
  myValue.text = myTextarea.value;
  if (myValue.tema !== "" && myValue.text !== "") {
    nodes.push(myValue);
    createNode(myValue.tema, myValue.text, myValue.mydate);
    myInput.value = '';
    myTextarea.value = '';
  };
};

myBtn.addEventListener('click', function () {
  addNode();
});

function showNodes() {
  for (let node of nodes) {
    createNode(node.tema, node.text, node.mydate);
  }
}

showNodes();
