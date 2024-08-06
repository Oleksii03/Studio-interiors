import * as flsFunctions from './partials/base/functions.js';
import { hamburgerMenu } from './partials/base/hamburger-btn.js';
import { header } from './partials/base/header.js';
import { preloader } from './partials/base/preloader.js';
import { popUp } from './partials/base/pop-up.js';
import { blog } from './partials/pages/blog/blog.js';

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  hamburgerMenu();
  header();
  preloader();
  popUp();
  blog();
});
