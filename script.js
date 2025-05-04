const images = [
    'images/bg1.png',
    'images/bg2.png',
    'images/bg3.png',
    'images/bg4.png'
  ];
  
  let currentIndex = 0;
  const background = document.querySelector('.background-slideshow');
  let isFading = false;
  
  function changeBackground() {
    if (isFading) return;
    isFading = true;
  
    // Fade out
    background.style.opacity = 0;
  
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      background.style.backgroundImage = `url('${images[currentIndex]}')`;
      background.style.opacity = 1;
      isFading = false;
    }, 1500);
  }
  
  // Set initial image
  background.style.backgroundImage = `url('${images[0]}')`;
  
  // Change every 6 seconds
  setInterval(changeBackground, 6000);
  
  function showSection(id) {
    document.querySelectorAll('.menu-section').forEach(el => {
      el.classList.remove('active');
      el.classList.add('inactive');
    });
    const next = document.getElementById(id);
    next.classList.remove('inactive');
    next.classList.add('active');
  }