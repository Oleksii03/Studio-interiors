import * as flsFunctions from './partials/base/functions.js';
import { hamburgerMenu } from './partials/base/hamburger-btn.js';
import { header } from './partials/base/header.js';
import { preloader } from './partials/base/preloader.js';
import { createSlider } from './partials/base/slider.js';
import { popUp } from './partials/base/pop-up.js';

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  preloader();
  createSlider();
  hamburgerMenu();
  header();
  popUp();
});
