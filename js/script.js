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
                  <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
                  <h3>${data[i].name.first} ${data[i].name.last}</h3>
                  <span class="email">${data[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${data[i].registered.date}</span>
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
   pageButtons[0].className = 'active';

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
         showPage(data, e.target.textContent)
      }
   });
}

// call functions starting with showPage so it loads with page 1 ready

showPage(data, 1)
addPagination(data);