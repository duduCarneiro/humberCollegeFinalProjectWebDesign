
const firstName = document.getElementById('fname');
const email = document.getElementById('email');
const date = document.getElementById('date');
const message = document.getElementById('message');
const reviews = document.querySelector('.reviews');
const subscription = document.getElementById('subscribe1');
const unknownReview = document.getElementById('unknown');
const navItems = document.querySelectorAll(".card-category");
const greeting = document.getElementById('firstWords');
let mustIdentify = true;
let text = false;

const displayEntries = function (review) {

   const html =`
   <div class="reviewsRow">
      <div class="reviewsName">
         ${review.user}
      </div>
      <div class="reviewsEmail">
         ${review.contact}
      </div>
      <div class="reviewsDate">
         ${review.day}
      </div>
      <div class="reviewsComment">
         ${review.comment}
      </div>
   </div>`;

   reviews.insertAdjacentHTML('afterbegin', html)
};

document.getElementById('mySubmit').addEventListener('click', function (e) {
   e.preventDefault();
   const newReview = {
      user: firstName.value, 
      contact: email.value,
      comment: message.value, 
      day: date.value
   };
   if (newReview.user == '' && mustIdentify) {
      alert("Please, provide your name");
      firstName.focus();
   } else if (mustIdentify && newReview.contact == '') {
      alert("Please, provide your e-mail");
      email.focus();
   } else {
      displayEntries(newReview);
      firstName.value = message.value = date.value = email.value = '';
   }

   init();
} );

const acceptBlank = function () {
   if (mustIdentify) {
      mustIdentify = false;
      firstName.disabled = email.disabled = true;
      console.log(mustIdentify);
   } else {
      init();
   }
};

function getBigger(elem) {
   // card.style.height = "200%";
   elem.style.fontSize = "30px";
   elem.style.height = "30px";
};


function getNormal(elem) {
   elem.style.fontSize = "19.2px";
   elem.style.height = "20px";
};
function showText(elem) {
   console.log(navItems);
   elem.style.fontSize = "17px";
   elem.style.opacity = "1";   
};


function unshowText(elem) {
   elem.style.opacity = "0";
};
function showCard(elem) {
   elem.style.filter = "blur(0px)";
};


function init() {
   mustIdentify = true;
   unknownReview.checked = false;
   firstName.disabled = email.disabled = false;
   text = false;

};
