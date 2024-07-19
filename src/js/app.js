import * as flsFunctions from './partials/base/functions.js';
import { createSlider } from './partials/pages/main/slider.js';
import { hamburgerMenu } from './partials/base/hamburger-btn.js';

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  createSlider();
  hamburgerMenu();
});
