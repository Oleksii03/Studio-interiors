import * as flsFunctions from './partials/base/functions.js';
import { createSlider } from './partials/pages/main/slider.js';
import { hamburgerMenu } from './partials/base/hamburger-btn.js';
import { header } from './partials/base/header.js';
import { preloader } from './partials/base/preloader.js';

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  preloader();
  createSlider();
  hamburgerMenu();
  header();
});
