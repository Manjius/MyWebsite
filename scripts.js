window.onload = () => {
  const heroHeader = document.querySelector('.hero-header');
  if (heroHeader) {
    heroHeader.classList.add('reveal');
  }

  document.querySelectorAll('.side-img').forEach((image) => {
    image.style.transform = 'translateX(0)';
  });
};
