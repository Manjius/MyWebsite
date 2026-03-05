window.onload = () => {
  const heroHeader = document.querySelector('.hero-header');
  if (heroHeader) {
    heroHeader.classList.add('reveal');
  }

  document.querySelectorAll('.image-card').forEach((card) => {
    const image = card.querySelector('.section-img');
    const buttons = card.querySelectorAll('.image-toggle-btn');

    if (!image || buttons.length === 0) {
      return;
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const version = button.dataset.version;
        if (version === 'ai') {
          image.src = image.dataset.ai;
        } else {
          image.src = image.dataset.original;
        }

        buttons.forEach((btn) => btn.classList.remove('is-active'));
        button.classList.add('is-active');
      });
    });
  });
};
