export function preloader() {
  const media = document.querySelectorAll('img');
  const percents = document.querySelector('#percents');
  const preloader = document.querySelector('#preloader');

  let increment = 0;
  const totalImages = media.length;

  const updateProgress = () => {
    increment++;
    const percentage = Math.round((increment * 100) / totalImages);
    percents.textContent = `${percentage}`;

    if (increment >= totalImages) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 800);
    }
  };

  media.forEach(el => {
    if (el.complete) {
      updateProgress();
    } else {
      el.addEventListener('load', updateProgress);
      el.addEventListener('error', updateProgress);
    }
  });

  if (totalImages === 0) {
    updateProgress();
  }
}
