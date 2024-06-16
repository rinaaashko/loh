const textElements = document.querySelectorAll('p'); 
const heartImage = document.querySelector('.heart img');
textElements.forEach(element => { 
    element.style.opacity = 0; 
    element.style.transform = 'translateY(20px)'; 
    setTimeout(() => { 
      element.style.opacity = 1; 
      element.style.transform = 'translateY(0px)'; 
    }, 500); 
  });
  let isBeating = true;
let beatInterval = setInterval(() => {
  if (isBeating) {
    heartImage.style.transform = 'scale(1.1)';
  } else {
    heartImage.style.transform = 'scale(1)';
  }
  isBeating = !isBeating;
}, 500); 
heartImage.addEventListener('click', () => {
    clearInterval(beatInterval);
    heartImage.style.transform = 'scale(1)';
    isBeating = false;
  });