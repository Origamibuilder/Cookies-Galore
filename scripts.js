// Cookie object constructor
function Cookie(name, image, description) {
  this.name = name;
  this.image = image;
  this.description = description;
}

// Array to store cookie objects
var cookies = [
  new Cookie("Chocolate Chip Cookie", "cookie1.jpg", "Our classic chocolate chip cookie is a customer favorite!"),
  new Cookie("Oatmeal Raisin Cookie", "cookie2.jpg", "Enjoy the perfect blend of oats and raisins in every bite."),
  // Add more cookie objects here
];

// Function to display cookies
function displayCookies() {
  var container = document.querySelector('.cookie-container');
  container.innerHTML = '';
  cookies.forEach(function(cookie) {
    var div = document.createElement('div');
    div.classList.add('cookie');
    div.innerHTML = `
      <img src="${cookie.image}" alt="${cookie.name}" class="cookie-img">
      <h3 class="cookie-heading">${cookie.name}</h3>
      <p class="cookie-text">${cookie.description}</p>
    `;
    container.appendChild(div);
  });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  // Code to send form data to server (not included)
  alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', handleSubmit);

// Function to initialize the website
function init() {
  displayCookies();
}

// Initialize the website when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
