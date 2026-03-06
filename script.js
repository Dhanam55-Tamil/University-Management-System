function showMessage() {
    document.getElementById("text").innerHTML =
        "JavaScript file is working properly!";
}

function showAlert() {
    alert("JavaScript connected successfully!");
}

function toggleImage() {
    var img = document.getElementById("campusImage");

    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

function showMessage() {
    document.getElementById("text").innerHTML =
        "Home button clicked! JavaScript is working.";
}
let wSlides = document.querySelectorAll(".welcome-slide");
let wIndex = 0;

setInterval(() => {
  wSlides[wIndex].classList.remove("active");
  wIndex = (wIndex + 1) % wSlides.length;
  wSlides[wIndex].classList.add("active");
}, 3000);
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000); // 3 seconds


