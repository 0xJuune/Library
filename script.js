let myLibrary = [];
const addBook = document.querySelector('.addBook');
const submit = document.querySelector("#submitButton");
const cardList = document.querySelector('.main');
const exit = document.querySelector('.exit');



function book(title, author, pagecount, read) {
  this.title = title
  this.author = author
  this.pagecount = pagecount
  this.read = read
}
  
function addBookToLibrary() {
  let a = prompt('What\'s the Book Title?');
  let b = prompt('What\'s the Author\'s name?');
  let c = prompt('What\'s the Book\'s Page Count?');
  let d = prompt('Have you read this book?');
  return new book(a, b, c, d);
}

function displayBooks() {
  const current = document.querySelectorAll('.cardRemove');
  let i = 0
  current?.forEach(card => {
    card.remove();
  });
  myLibrary.forEach((bookArray) => {
    function colorBorder(readStatus) {
      switch(readStatus) {
        case 'Finished':
        createCard.style.borderLeft = 'solid 8px hsl(120deg 40% 55%)';
        break;
        case 'Reading':
        createCard.style.borderLeft = 'solid 8px hsl(50 100% 70%)';
        break;
        case 'Untouched':
        createCard.style.borderLeft = 'solid 8px hsl(15, 100%, 53%)';
        break;
    }
    }
    
    const n = i 
    const createCard = document.createElement('div');
    const createTitle = document.createElement('div');
    const createAuthor = document.createElement('div');
    const createPagecount = document.createElement('div');
    const createRead = document.createElement('div');
    const createSpan = document.createElement('span');
    const createSpan2 = document.createElement('span');
    const createSpan3 = document.createElement('span');
    const createButton = document.createElement('button');

    const title = document.createTextNode(bookArray.title);
    const author = document.createTextNode(bookArray.author);
    const pagecount = document.createTextNode(bookArray.pagecount);
    const read = document.createTextNode(bookArray.read);
    const button = document.createTextNode('Swap Status')

    createCard.classList.add('card');
    createCard.classList.add('cardRemove');
    createTitle.classList.add('title');

    createSpan.innerText = 'Author: ';
    createSpan2.innerText = 'Page Count: ';
    createSpan3.innerText = 'Read Status: ';

    createTitle.appendChild(title);

    createAuthor.appendChild(createSpan);
    createAuthor.appendChild(author);
    
    createPagecount.appendChild(createSpan2);
    createPagecount.appendChild(pagecount);
    
    createRead.appendChild(createSpan3);
    createRead.appendChild(read);
    
    createRead.setAttribute('id', i);

    createButton.appendChild(button);

    createCard.appendChild(createTitle);
    createCard.appendChild(createAuthor);
    createCard.appendChild(createPagecount);
    createCard.appendChild(createRead);
    createCard.appendChild(createButton);
    

    createButton.addEventListener('click', function() {
      bookArray.read = swapReadStatus(bookArray.read, n);
      colorBorder(bookArray.read)
    })

    colorBorder(bookArray.read)
    cardList.appendChild(createCard);
    i =+ 1;
  })
}



// function colorBorder(a) {
//   switch(a) {
//     case 'Finished':
//     createCard.style.borderLeft = 'solid 8px hsl(120deg 40% 55%)';
//     break;
//     case 'Reading':
//     createCard.style.borderLeft = 'solid 8px hsl(50 100% 70%)';
//     break;
//     case 'Untouched':
//     createCard.style.borderLeft = 'solid 8px hsl(15, 100%, 53%)';
//     break;
// }}

function swapReadStatus(a, b) {
  switch (a) {
    case 'Finished':
      a = 'Untouched';
      document.getElementById(b).innerHTML = `<span>Read Status: </span>${a}`;
      return a;
    case 'Reading':
      a = 'Finished';
      document.getElementById(b).innerHTML = `<span>Read Status: </span>${a}`;
      return a;
    case 'Untouched':
      a = 'Reading';
      document.getElementById(b).innerHTML = `<span>Read Status: </span>${a}`;
      return a;
  }
}

function promptBook() {
  myLibrary.push(addBookToLibrary());
  displayBooks();
}

function showModal() {
  const showModal = document.querySelector('.transparent');
  showModal.style.visibility = "visible";
}

function hideModal() {
  const showModal = document.querySelector('.transparent');
  showModal.style.visibility = "hidden";
}

function pushFormToArray() {
  const title = document.getElementById('title')
  const author = document.getElementById('author')
  const pagecount = document.getElementById('pagecount')
  const bookForm = document.forms.bookForm;
  const read = bookForm.querySelector('input[name=read]:checked');
  let a = title.value;
  let b = author.value;
  let c = pagecount.value;
  let d = read.value;
  myLibrary.push(new book(a, b, c, d));
  bookForm.reset();
  hideModal()
  displayBooks();
}

addBook.addEventListener('click', showModal)
submit.addEventListener('click', pushFormToArray)
exit.addEventListener('click', hideModal)


// myLibrary.push(addBookToLibrary())


// const book1 = new book("Back to Basics", "Sir Author", 69420, "unread")
// book1.report()