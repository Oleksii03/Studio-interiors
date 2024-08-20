export function projects(dataPojects) {
  const activeItemList = document.querySelector('.js-active-item');
  const innerList = document.querySelector('.js-inner-list');

  let activeItemText = activeItemList.textContent;

  activeItemList.addEventListener('click', toggleInnerList);
  innerList.addEventListener('click', chooseOption);

  function toggleInnerList(e) {
    innerList.classList.toggle('page-our-projects__inner-list_hidden');
  }

  function chooseOption(e) {
    const { target, currentTarget } = e;

    if (target.tagName !== 'LI') return;

    [...currentTarget.children].forEach(li => {
      li.classList.remove('page-our-projects__inner-list-item_active');
    });

    target.classList.add('page-our-projects__inner-list-item_active');

    let targetText = target.textContent.trim();
    let targetTextSlice;

    if (targetText.length > 11) {
      targetTextSlice = targetText.slice(0, 11) + '...';
      activeItemList.textContent = targetTextSlice;
    } else {
      activeItemList.textContent = targetText;
    }

    filterData(targetText);

    toggleInnerList();
  }

  // ------------filterData---------------------------

  const listContent = document.querySelector('.js-list-content');

  function filterData(activeItemText) {
    const uniqueItems = dataPojects.filter(obj => obj.type === activeItemText.toLowerCase().trim());

    if (!uniqueItems.length) {
      listContent.innerHTML = createMarkupError();
      return;
    }

    listContent.innerHTML = createMarkup(uniqueItems).join('');
  }

  filterData(activeItemText);

  // ----createMarkup-----------

  function createMarkup(uniqueItems) {
    return uniqueItems.map(({ imageMob, imageTab, imageLepTop, imageDesc, title }) => {
      return `
     <li class="our-projects__project-item our-projects__project-item">
        <div class="our-projects__project-overlay project-overlay">
          <ul class="project-overlay__list">
            <li class="project-overlay__list-item">Lodz</li>
            <li class="project-overlay__list-item">16.10.2018</li>
            <li class="project-overlay__list-item">80 sq.m</li>
          </ul>

          <div class="project-overlay__title-box project-overlay__title-box_dynamic">

           <a href="one-project.html" target="_blank">
            <h3 class="project-overlay__title project-overlay__title_sm">
              ${title}
            </h3>

            <h3 class="project-overlay__title project-overlay__title_lg">
             Residence by the lighthouse
            </h3>
           </a>

            <p class="discover-more discover-more__light our-projects__project-sub-title">Discover more</p>
          </div>
        </div>
        <a
          href="#"
          class="our-projects__project-link">
           
          <picture class="our-projects__project-picture">
            <source
              srcset="${imageDesc}"
              media="(min-width: 1440px)" 
              sizes="(min-width: 1440px) 656px"
              width="656" />

            <source
              srcset="${imageLepTop}"
              media="(min-width: 1024px)" 
              sizes="(min-width: 1024px) 453px"
              width="453" />

            <source
              srcset="${imageTab}"
              media="(min-width: 768px)" 
              sizes="(min-width: 768px) 333px"
              width="333" />

            <img 
              src="${imageMob}"
              alt="Project-item"
              width="327"
              loading="lazy"
              class="our-projects__project-img" />
          </picture>

        </a>
      </li>`;
    });
  }

  // ----createMarkupError-----------

  function createMarkupError() {
    return `
     <li class="our-projects__project-item our-projects__item-not-found">
        <a
          href="#"
          class="our-projects__project-link">
          <picture class="our-projects__project-picture">
            <img
              loading="lazy"
              src="assets/img/pagrs/our-projects/not-found-2.png"
              alt="Project-item"
              class="our-projects__img-not-found" />
          </picture>
        </a>
      </li>`;
  }
}
