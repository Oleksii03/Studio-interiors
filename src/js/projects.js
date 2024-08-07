import * as flsFunctions from './partials/base/functions.js';
import { hamburgerMenu } from './partials/base/hamburger-btn.js';
import { header } from './partials/base/header.js';
import { preloader } from './partials/base/preloader.js';
import { popUp } from './partials/base/pop-up.js';
import { projects } from './partials/pages/projects/our-projects.js';
import { dataPojects } from './partials/data/data-projects.js';

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  hamburgerMenu();
  header();
  preloader();
  popUp();
  projects(dataPojects());
});
