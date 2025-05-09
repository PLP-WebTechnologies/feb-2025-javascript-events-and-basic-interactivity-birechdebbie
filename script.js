// Selecting the elements
const title = document.getElementById('title');


const button = document.getElementById('changeTextButton');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change the text content of the title
    title.textContent = 'Where Agriculture begins!';
});


// Selectin the elements
const styleButton = document.getElementById('changetitlestyle');

// Add an event listener to the button
styleButton.addEventListener('click', () => {
    // Modify the CSS styles of the title
    title.style.color = 'blue';
    title.style.fontSize = '2.5rem';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.textAlign = 'center';
});


// Select the container and buttons
const container = document.getElementById('products');
const addElementButton = document.getElementById('anotherUse');

// Add an event listener to the "Add Element" button
addElementButton.addEventListener('click', () => {
    // Create a new paragraph element and style it
    const newElement = document.createElement('p');
    newElement.textContent = 'Avocado trees also provide a good shade!';
    newElement.className = 'dynamic-element';
    newElement.style.color = 'green';
    newElement.style.textAlign = 'center';
    newElement.style.fontSize = '2rem';
    // Append the new element to the container
    container.appendChild(newElement);
});


// Array of images and descriptions
const slides = [
    {
      src: "https://images.pexels.com/photos/3029520/pexels-photo-3029520.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Fresh Avocadoes"
    },
    {
      src: "https://images.pexels.com/photos/3850668/pexels-photo-3850668.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Avocado Oil"
    },
    {
      src: "https://images.pexels.com/photos/5737578/pexels-photo-5737578.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Guacamole"
    }
  ];
  
  let currentSlide = 0;
  
  // Select elements
  const slideshowImage = document.getElementById("slideshowImage");
  const slideshowDesc = document.getElementById("slideshowDesc");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  
  // Function to update the slideshow
  function updateSlideshow() {
    slideshowImage.src = slides[currentSlide].src;
    slideshowDesc.textContent = slides[currentSlide].desc;
  }
  
  // Event listeners for navigation buttons
  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlideshow();
  });
  
  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlideshow();
  });
  
  // Optional: Auto-play the slideshow
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlideshow();
  }, 5000); // Change image every 5 seconds


 /*  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change every 3 seconds
 */