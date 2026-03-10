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

    const setVersion = (version) => {
      image.src = version === 'original' ? image.dataset.original : image.dataset.ai;
      buttons.forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.version === version);
      });
    };

    setVersion('ai');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        setVersion(button.dataset.version);
      });
    });
  });
};
