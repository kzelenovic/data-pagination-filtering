// Data Pagination & Filtering

// inserts a search bar to top of page.
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
const studentList = document.querySelector('.student-list');

// searchNames function adds student objects that match the search value into an array. returns the searchResults array.
function searchNames(searchInput) {
   let searchResults = [];
   for (let i = 0; i < data.length; i++) {

      // my second attempt...
/*       if(data[i].name.first.includes(searchInput.toLowerCase()) || data[i].name.last.includes(searchInput.toLowerCase())){
         searchResults.push(data[i]);
      }

      if(!data[i].name.first.includes(searchInput.toLowerCase()) && !data[i].name.last.includes(searchInput.toLowerCase())){
         searchResults = [];
         studentList.innerHTML = '';
         studentList.insertAdjacentHTML(
            'beforeend',
            `<span class="no-results">No results found.</span>`
         );
      } */

      // my first attempt
/*       if (!data[i].name.first.includes(searchInput.toLowerCase()) && !data[i].name.last.includes(searchInput.toLowerCase())){
         studentList.innerHTML = '';
         studentList.insertAdjacentHTML(
            'beforeend',
            `<span class="no-results">No results found.</span>`
         );
      } else if(data[i].name.first.includes(searchInput.toLowerCase()) || data[i].name.last.includes(searchInput.toLowerCase())) {
         searchResults.push(data[i]);
      } */
   }
   return searchResults;
}

const perPage = 9;

// showPage function creates and appends elements to display a page of 9 students
function showPage(list, page) {
   const startIndex = ( page * perPage) - perPage;
   const endIndex = page * perPage;
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

/* addPagination function creates buttons at the bottom to use as navigation through the student pages.
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
   if (numberOfPages >= 1) {
      pageButtons[1].className = 'active';
   }

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

// event listeners to show search results upon click of the search button or keyup in the search bar
submit.addEventListener('click', () => {
   console.log('click works');
   showPage(searchNames(search.value), 1);
   addPagination(searchNames(search.value));
});

search.addEventListener('keyup', () => {
   console.log('keyup works');
   showPage(searchNames(search.value), 1);
   addPagination(searchNames(search.value));
});

// call functions starting with showPage so it loads with page 1 ready
showPage(data, 1);
addPagination(data);