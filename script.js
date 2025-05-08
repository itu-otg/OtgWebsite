const images = [
    'res/bg1.png',
    'res/bg2.png',
    'res/bg3.png',
    'res/bg4.png'
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

  function openRegisterForm(){
    window.open("https://forms.gle/aL5QVwwH2tibHuJd7", "_blank").focus();
  }

  function openInstagram(){
    window.open("https://www.instagram.com/ituotg/", "_blank").focus();
  }

  function openYoutube(){
    window.open("https://www.youtube.com/ituotg", "_blank").focus();
  }

  function openItch(){
    window.open("https://ituotg.itch.io/", "_blank").focus();
  }