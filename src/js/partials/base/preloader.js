export function preloader() {
  let percentElement = document.getElementById('percents');
  let preloader = document.getElementById('preloader');

  let percent = 0;

  function fastInternet() {
    let interval = setInterval(() => {
      percent += 1;
      percentElement.textContent = percent;

      if (percent >= 100) {
        clearInterval(interval);
        preloader.style.opacity = 0;

        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }
    }, 10);
  }

  function slowInternet() {
    let interval = setInterval(() => {
      percent += 1;
      percentElement.textContent = percent;

      if (percent >= 100) {
        clearInterval(interval);
        preloader.style.opacity = 0;

        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }
    }, 30);
  }

  const image = new Image();
  const startTime = new Date().getTime();
  const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png';
  const imageSize = 30827;

  image.onload = function () {
    const endTime = new Date().getTime();
    const duration = (endTime - startTime) / 1000;
    const bitsLoaded = imageSize * 8;
    const speedBps = bitsLoaded / duration;
    const speedKbps = speedBps / 1024;
    const speedMbps = speedKbps / 1024;

    if (speedMbps >= 1) {
      fastInternet();
    } else {
      slowInternet();
    }
  };

  image.onerror = function () {
    console.error('Error loading image.');
  };

  image.src = `${imageUrl}?cacheBust=${startTime}`;
}

// -------preloaderForMedia----------

// const media = document.querySelectorAll('img');
// const percents = document.querySelector('#percents');
// const preloader = document.querySelector('#preloader');

// let increment = 0;
// const totalImages = media.length;

// const updateProgress = () => {
//   increment += 1;

//   const percentage = Math.round((increment * 100) / totalImages);
//   percents.textContent = `${percentage}`;

//   if (increment >= totalImages) {
//     setTimeout(() => {
//       preloader.style.opacity = '0';
//       setTimeout(() => {
//         preloader.style.display = 'none';
//       }, 500);
//     }, 700);
//   }
// };

// media.forEach(el => {
//   if (el.complete) {
//     updateProgress();
//   } else {
//     el.addEventListener('load', updateProgress);
//     el.addEventListener('error', updateProgress);
//   }
// });

// if (totalImages === 0) {
//   updateProgress();
// }
