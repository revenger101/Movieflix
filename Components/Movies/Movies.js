//navbar transparent 
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  
      navbar.classList.add('transparent'); 
    } else {
      navbar.classList.remove('transparent'); 
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Show the modal when the user clicks on a movie poster
    document.querySelectorAll('.movie-poster').forEach(poster => {
        poster.addEventListener('click', function() {
            const movie = this.getAttribute('data-movie');
            document.querySelector('.modal h2').innerText = movie; // Set movie title
            document.querySelector('.modal').style.display = 'flex'; // Show modal
        });
    });

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector('.close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.querySelector('.modal').style.display = 'none';
        });
    }
});




// Ensure the DOM and all resources are fully loaded before hiding the loader
window.addEventListener('load', function() {
  console.log("Page fully loaded"); // To check if the event is firing correctly
  // Add the 'loaded' class to the body to hide the loader
  document.body.classList.add('loaded');
});



