export function projects() {
  const dataPojects = [
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-1.png',
      imageTab: 'assets/img/main/our-projects/tablet/img-1.png',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-2.png',
      imageTab: 'assets/img/main/our-projects/tablet/img-2.png',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-3.png',
      imageTab: 'assets/img/main/our-projects/tablet/img-3.png',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-4.png',
      imageTab: 'assets/img/main/our-projects/tablet/img-4.png',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-5.png',
      imageTab: 'assets/img/main/our-projects/tablet/img-4.png',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'apartments',
      imageMob: 'assets/img/main/our-projects/mobile/img-6.png',
      imageTab: 'project1.jpg',
      imageDesc: 'project1.jpg',
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

    let markup = createMarkup(uniqueItems);

    listContent.innerHTML = markup.join('');
  }

  filterData(activeItemText);

  function createMarkup(uniqueItems) {
    console.log(uniqueItems);
    return uniqueItems.map(obj => {
      return `
     <li class="our-projects__project-item">
        <div class="our-projects__project-overlay project-overlay">
          <ul class="project-overlay__list">
            <li class="project-overlay__list-item">Lodz</li>
            <li class="project-overlay__list-item">16.10.2018</li>
            <li class="project-overlay__list-item">80 sq.m</li>
          </ul>

          <div class="project-overlay__title-box">
            <h3 class="project-overlay__title project-overlay__title_mob">
              Residence by the lighthouse
            </h3>

            <h3 class="project-overlay__title project-overlay__title_desc">
              Eyewear store interior
            </h3>

          </div>
        </div>
        <a
          href="#"
          class="our-projects__project-link">
          <picture class="our-projects__project-picture">
            <source
              srcset="${obj.imageTab}"
              media="(min-width: 768px)" />

            <img
              src="${obj.imageMob}"
              alt="Project-item"
              class="our-projects__project-img" />
          </picture>
        </a>
      </li>`;
    });
  }

  // listContent.innerHTML = createMarkup().join('');
}
