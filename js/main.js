const heroImg = document.querySelector('.hero-img');

function startAnimation() {
  if (heroImg) {
    heroImg.classList.add('hero-animation');
  }
}
startAnimation();