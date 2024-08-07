import * as flsFunctions from './partials/base/functions.js';
import { hamburgerMenu } from './partials/base/hamburger-btn.js';
import { header } from './partials/base/header.js';
import { preloader } from './partials/base/preloader.js';
import { popUp } from './partials/base/pop-up.js';
import { blog } from './partials/pages/blog/blog.js';
import { dataNews } from './partials/data/data-news.js';

console.log();

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  hamburgerMenu();
  header();
  preloader();
  popUp();
  blog(dataNews());
});
