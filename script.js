// Smooth hover zoom effect for movie posters
document.querySelectorAll('.movie-poster').forEach(poster => {
    poster.addEventListener('mouseover', () => {
        poster.style.transition = 'transform 0.3s ease';
        poster.style.transform = 'scale(1.05)';
    });

    poster.addEventListener('mouseleave', () => {
        poster.style.transform = 'scale(1)';
    });
});

//navbar transparent 
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  // Adjust the value as needed
      navbar.classList.add('transparent'); // Add the class to make it transparent
    } else {
      navbar.classList.remove('transparent'); // Remove the class to restore color
    }
  });


// Ensure the DOM and all resources are fully loaded before hiding the loader
window.addEventListener('load', function() {
  console.log("Page fully loaded"); // To check if the event is firing correctly
  // Add the 'loaded' class to the body to hide the loader
  document.body.classList.add('loaded');
});



