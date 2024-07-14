import * as flsFunctions from './partials/functions.js';
import { createSlider } from './partials/slider.js';
import { hamburgerMenu } from './partials/hamburger-btn.js';

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  createSlider();
  hamburgerMenu();
});
