// Welcome slider
let welcomeIndex = 0;
const welcomeSlides = document.querySelectorAll(".welcome-slide");

setInterval(() => {
  welcomeSlides[welcomeIndex].classList.remove("active");
  welcomeIndex = (welcomeIndex + 1) % welcomeSlides.length;
  welcomeSlides[welcomeIndex].classList.add("active");
}, 3000);

// About slider
let aboutIndex = 0;
const aboutSlides = document.querySelectorAll(".slide");

setInterval(() => {
  aboutSlides[aboutIndex].classList.remove("active");
  aboutIndex = (aboutIndex + 1) % aboutSlides.length;
  aboutSlides[aboutIndex].classList.add("active");
}, 3000);