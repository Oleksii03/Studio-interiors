export function projects() {
  const dataPojects = [
    {
      type: 'house',
      title: 'Eyewear store interior',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-1.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-1.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-1.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-1.webp',
    },
    {
      type: 'house',
      title: 'Minimalist style home',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-2.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-2.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-2.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-2.webp',
    },
    {
      type: 'house',
      title: 'Minimalist style home',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-3.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-3.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-3.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-3.webp',
    },
    {
      type: 'house',
      title: 'Minimalist style home',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-4.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-4.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-4.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-4.webp',
    },
    {
      type: 'house',
      title: 'Eyewear storeinterior',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-5.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-5.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-5.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-5.webp',
    },
    {
      type: 'house',
      title: 'House on a Hillside',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-6.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-6.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-6.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-6.webp',
    },
    {
      type: 'apartments',
      title: 'Eyewear storeinterior',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-5.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-5.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-5.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-5.webp',
    },
    {
      type: 'apartments',
      title: 'Minimalist style home',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-4.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-4.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-4.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-4.webp',
    },
    {
      type: 'commerce',
      title: 'Minimalist style home',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-2.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-2.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-2.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-2.webp',
    },
    {
      type: 'commerce',
      title: 'Eyewear store interior',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-1.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-1.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-1.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-1.webp',
    },
    {
      type: 'commerce',
      title: 'House on a Hillside',
      imageMob: 'assets/img/pagrs/our-projects/list-project/Home/mob/img-6.webp',
      imageTab: 'assets/img/pagrs/our-projects/list-project/Home/tab/img-6.webp',
      imageLepTop: 'assets/img/pagrs/our-projects/list-project/Home/lap-top/img-6.webp',
      imageDesc: 'assets/img/pagrs/our-projects/list-project/Home/desc/img-6.webp',
    },
  ];

  // --------------------------------------

  const activeItemList = document.querySelector('.js-active-item');
  const innerList = document.querySelector('.js-inner-list');

  let activeItemText = activeItemList.textContent.toLowerCase().trim();

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

    activeItemList.textContent = target.textContent;
    activeItemText = activeItemList.textContent;

    filterData(activeItemText.toLowerCase().trim());

    toggleInnerList();
  }

  // ---------------------------------------

  const listContent = document.querySelector('.js-list-content');

  function filterData(activeItemText) {
    const uniqueItems = dataPojects.filter(obj => obj.type === activeItemText);

    if (!uniqueItems.length) {
      console.log(uniqueItems.length);
      listContent.innerHTML = createMarkupError();
      return;
    }

    listContent.innerHTML = createMarkup(uniqueItems).join('');
  }

  filterData(activeItemText);

  function createMarkup(uniqueItems) {
    console.log(uniqueItems);
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
            <h3 class="project-overlay__title project-overlay__title_sm">
              ${title}
            </h3>

            <h3 class="project-overlay__title project-overlay__title_lg">
             Residence by the lighthouse
            </h3>

            <p class="discover-more discover-more__light our-projects__project-sub-title">Discover more</p>
          </div>
        </div>
        <a
          href="#"
          class="our-projects__project-link">
          <picture class="our-projects__project-picture">
            <source
              srcset="${imageDesc}"
              media="(min-width: 1440px)" />

            <source
              srcset="${imageLepTop}"
              media="(min-width: 1024px)" />

            <source
              srcset="${imageTab}"
              media="(min-width: 768px)" />

            <img
              src="${imageMob}"
              alt="Project-item"
              class="our-projects__project-img" />
          </picture>
        </a>
      </li>`;
    });
  }

  function createMarkupError() {
    return `
     <li class="our-projects__project-item our-projects__project-item">
        <a
          href="#"
          class="our-projects__project-link">
          <picture class="our-projects__project-picture">
            <img
              src="assets/img/pagrs/our-projects/placeholder-image.jpg"
              alt="Project-item"
              class="our-projects__project-img" />
          </picture>
        </a>

      <h3 style="text-align: center;">Photo not found</h3>
      </li>`;
  }

  // listContent.innerHTML = createMarkup().join('');
}
