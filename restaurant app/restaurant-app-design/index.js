// main.js

// Fetch the content of the "Footer" HTML file and insert it into the corresponding section
fetch('footer.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#footer').innerHTML = content;
  });

// Fetch the content of the "Gallery" HTML file and insert it into the corresponding section
fetch('gallery.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#gallery').innerHTML = content;
  });


// Fetch the content of the "Contact" HTML file and insert it into the corresponding section
fetch('contact.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#contact').innerHTML = content;
  });


 // Fetch the content of the "Book A Table" HTML file and insert it into the corresponding section
fetch('book-a-table.html')
.then(response => response.text())
.then(content => {
  document.querySelector('#book-a-table').innerHTML = content;
});


// Fetch the content of the "About" HTML file and insert it into the corresponding section
fetch('about.html')
  .then(response => response.text())
  .then(content => {
    document.querySelector('#about').innerHTML = content;
  });


