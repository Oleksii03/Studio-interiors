// export function preloader() {
//   const percentElement = document.getElementById('percents'),
//     preloader = document.getElementById('preloader'),
//     boxPercentsSpan = document.querySelector('.js-box-percents  > span'),
//     boxPercent = document.querySelector('.js-box-percents'),
//     preloaderText = document.querySelector('.js-preloader-text'),
//     percents = document.getElementById('percents');

//   let percent = 0;

//   function fastInternet() {
//     let interval = setInterval(() => {
//       boxPercent.classList.add('preloader__percents_animation');
//       preloaderText.classList.add('preloader__text_animation');

//       percent += 1;
//       boxPercentsSpan.textContent = '';
//       percentElement.textContent = 'LIGHT';

//       if (percent >= 100) {
//         setTimeout(() => {
//           clearInterval(interval);

//           preloader.classList.add('preloader_hidden');
//           document.body.classList.remove('no-scroll');
//         }, 300);
//       }
//     }, 10);
//   }

//   function slowInternet() {
//     let interval = setInterval(() => {
//       boxPercent.classList.add('preloader__percents_animation-slow');
//       preloaderText.classList.add('preloader__text_animation-slow');

//       percent += 1;
//       percentElement.textContent = percent;

//       if (percent >= 100) {
//         clearInterval(interval);

//         handleCompletion();
//       }
//     }, 20);
//   }

//   function handleCompletion() {
//     setTimeout(() => {
//       percents.style.opacity = 0;
//       percents.textContent = '';
//       boxPercentsSpan.textContent = '';

//       setTimeout(() => {
//         percents.style.opacity = 1;
//         percents.textContent = 'LIGHT';
//       }, 1000);

//       setTimeout(() => {
//         preloader.classList.add('preloader_hidden');
//         document.body.classList.remove('no-scroll');
//       }, 2100);
//     }, 500);
//   }

//   // ----------------------------------------

//   const image = new Image();
//   const startTime = new Date().getTime();
//   const imageUrl =
//     'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png';
//   const imageSize = 30827;

//   image.onload = function () {
//     const endTime = new Date().getTime();
//     const duration = (endTime - startTime) / 1000;
//     const bitsLoaded = imageSize * 8;
//     const speedBps = bitsLoaded / duration;
//     const speedKbps = speedBps / 1024;
//     const speedMbps = speedKbps / 1024;

//     if (speedMbps >= 1) {
//       fastInternet();
//     } else {
//       slowInternet();
//     }
//   };

//   image.onerror = function () {
//     console.error('Error loading image.');
//     document.body.classList.remove('no-scroll');
//   };

//   image.src = `${imageUrl}?cacheBust=${startTime}`;

//   document.body.classList.add('no-scroll');

//   // -------preloaderForMedia----------

//   // const media = document.querySelectorAll('img');
//   // const percents = document.querySelector('#percents');
//   // const preloader = document.querySelector('#preloader');

//   // let increment = 0;
//   // const totalImages = media.length;

//   // const updateProgress = () => {
//   //   increment += 1;

//   //   const percentage = Math.round((increment * 100) / totalImages);
//   //   percents.textContent = `${percentage}`;

//   //   if (increment >= totalImages) {
//   //     setTimeout(() => {
//   //       preloader.style.opacity = '0';
//   //       setTimeout(() => {
//   //         preloader.style.display = 'none';
//   //       }, 500);
//   //     }, 700);
//   //   }
//   // };

//   // media.forEach(el => {
//   //   if (el.complete) {
//   //     updateProgress();
//   //   } else {
//   //     el.addEventListener('load', updateProgress);
//   //     el.addEventListener('error', updateProgress);
//   //   }
//   // });

//   // if (totalImages === 0) {
//   //   updateProgress();
//   // }
// }
