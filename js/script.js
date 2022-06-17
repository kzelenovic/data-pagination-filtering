/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function createElement(elementName, property, value) {
   const element = document.createElement(elementName);
   element[property] = value;
   return element;
}

const perPage = 9;

function showPage (list, page) {
   const startIndex = ( page * perPage) - perPage;
   const endIndex = page * perPage;
   const studentList = document.querySelector('.student-list');
   console.log(studentList);
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex) {
/*          const studentLI = createElement('li', 'className', 'student-item cf');
         studentList.appendChild(studentLI);
         const detailsDiv = createElement('div', 'className', 'student-details');
         studentLI.appendChild(detailsDiv);
         const studentImg = createElement('img', 'className', 'avatar');
         studentImg.src = data[i].picture.large;
         studentImg.alt = 'Profile Picture';
         detailsDiv.appendChild(studentImg);
         const studentName = createElement('h3');
         studentName.textContent = `${data[i].name.first} ${data[i].name.last}`;
         detailsDiv.appendChild(studentName);
         const studentEmail = createElement('span', 'className', 'email');
         studentEmail.textContent = data[i].email;
         detailsDiv.appendChild(studentEmail);
         const joinedDiv = createElement('div', 'className', 'joined-details');
         studentLI.appendChild(joinedDiv);
         const dateSpan = createElement('span', 'className', 'date');
         dateSpan.textContent = data[i].registered.date;
         joinedDiv.appendChild(dateSpan); */
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

showPage(data, 1);
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions

