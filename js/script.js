// Data Pagination & Filtering

// showPage function creates and appends elements to display a page of 9 students

const perPage = 9;

function showPage(list, page) {
   const startIndex = ( page * perPage) - perPage;
   const endIndex = page * perPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex) {
         studentList.insertAdjacentHTML(
            'beforeend',
            `<li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
               </div>
            </li>`
         );
      }
   }
}

/* addPagination function creates buttons at the bottom to use as navigation through the student pages
includes an event listener and setActive function to change the style of the button when clicked */

function addPagination(list) {
   const numberOfPages = list.length / perPage;
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   for (let i = 0; i < numberOfPages; i++) {
      linkList.insertAdjacentHTML(
         'beforeend',
         `<li>
            <button type="button">${i+1}</button>
         </li>`
      );
   }
   
   const pageButtons = document.querySelectorAll('button');
   pageButtons[1].className = 'active';

   function setActive(e) {
      for (let i = 0; i < pageButtons.length; i++) {
         pageButtons[i].classList.remove('active');
      }
      const clicked = e.target;
      clicked.classList.add('active');
   }

   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON'){
         setActive(e);
         showPage(list, e.target.textContent);
      }
   });
}

const header = document.querySelector('.header');

header.insertAdjacentHTML(
   'beforeend',
   `<label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button" class="js-submit"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`
); 

const search = document.querySelector('#search');
const submit = document.querySelector('.js-submit');

function searchNames(searchInput, names) {
   console.log(searchInput);
   console.log(names);
   for (let i = 0; i < names.length; i++) {
      if(searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
         console.log(names[i]);
      }
   }
}



submit.addEventListener('click', (e) => {
   console.log('click works');
   searchNames(search, data);
});

search.addEventListener('keyup', (e) => {
   console.log('keyup works');
   searchNames(search, data);
});

// call functions starting with showPage so it loads with page 1 ready

showPage(data, 1);
addPagination(data);