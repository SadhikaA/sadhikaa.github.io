// const darkModeToggle = document.getElementById('toggle-dark-mode');

// darkModeToggle.addEventListener('click', function() {
//   document.body.classList.toggle('dark-mode');
//   if (document.body.classList.contains('dark-mode')) {
//     darkModeToggle.innerText = '🌉';
//   } else {
//     darkModeToggle.innerText = '🌁';
//   }
  
// });

function scrollRight(distance) {
    const container = document.querySelector('.right-section');
    container.scrollBy({
      left: distance,
      behavior: 'smooth'
  });
  }