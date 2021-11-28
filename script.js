const submitBtn = document.querySelector('.btn');
submitBtn.addEventListener('click', addBooksToLibrary);

const openForm = document.querySelector('.openButton');

const myForm = document.querySelector('#formPopUp');

openForm.addEventListener('click', function() {
      myForm.style.display = 'block';
  });
  
  
const closeForm = document.querySelector('.closeForm');

closeForm.addEventListener('click', function(){
  myForm.style.display = 'none';
});



class Book {
  constructor(title, author, pages, published_year, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + ' ' + 'pages';
    this.published_year = form.published_year.value;
    this.read = form.read.checked;
  }
}


let myLibrary = [];
let newBook;

function addBooksToLibrary() {
    event.preventDefault();
    myForm.style.display = 'none';


    newBook = new Book(title, author, pages, published_year, read);
    myLibrary.push(newBook);

    setData();  // saves updated array in local storage
    render();
    form.reset();
}


//create books visual in browser
function render(){
  const display = document.getElementById('library-container');
  const books = document.querySelectorAll('.book');

  books.forEach(book => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

//create book DOM element to use in render()

function createBook(item) {
  const library = document.querySelector('#library-container');
  const bookDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const pubDiv = document.createElement('div');
  const removeBtn = document.createElement('button');
  const readBtn = document.createElement('button');


  bookDiv.classList.add('book');
  bookDiv.setAttribute('id', myLibrary.indexOf(item));

  titleDiv.textContent = item.title;
  titleDiv.classList.add('title');
  bookDiv.appendChild(titleDiv);


  authDiv.textContent = item.author;
  authDiv.classList.add('author');
  bookDiv.appendChild(authDiv);


  pageDiv.textContent = item.pages;
  pageDiv.classList.add('pages');
  bookDiv.appendChild(pageDiv);


  pubDiv.textContent = item.published_year;
  pubDiv.classList.add('published_year');
  bookDiv.appendChild(pubDiv);

  readBtn.classList.add('readBtn');
  bookDiv.appendChild(readBtn);
  if (item.read === false) {
    readBtn.textContent = 'Not Read';
    readBtn.style.backgroundColor = '#F3950D';
  }else {
    readBtn.textContent = 'Read';
    readBtn.style.backgroundColor = '#F3950D'
  }

  removeBtn.textContent = 'Delete';
  removeBtn.setAttribute('id', 'removeBtn')
  bookDiv.appendChild(removeBtn);

  library.appendChild(bookDiv);

  removeBtn.addEventListener('click', function(){
    myLibrary.splice(myLibrary.indexOf(item),1);
    setData();
    render();
  });

  //add toggle ability
  removeBtn.addEventListener('click', function(){
    item.read = !item.read;
    setData();
    render();
  });
};


function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}



function restore() {
  if(!localStorage.myLibrary) {
    render();
  }else {
    let objects = localStorage.getItem('myLibrary');
    objects = JSON.parse(objects);
    myLibrary = objects;
    render();
  }
}

restore();


