export function blog(arrNews) {
  const activeItem = document.querySelector('.js-active-li');
  const innerList = document.querySelector('.js-inner-list-news');

  let activeItemText = activeItem.textContent;

  activeItem.addEventListener('click', toggleInnerList);
  innerList.addEventListener('click', chooseOption);

  function toggleInnerList(e) {
    innerList.classList.toggle('page-news__inner-list_hidden');
  }

  function chooseOption(e) {
    const { target, currentTarget } = e;

    if (target.tagName !== 'LI') return;

    [...currentTarget.children].forEach(li => {
      li.classList.remove('page-news__inner-list-item_active');
    });

    target.classList.add('page-news__inner-list-item_active');

    let targetText = target.textContent.trim();
    let targetTextSlice;

    if (targetText.length > 11) {
      targetTextSlice = targetText.slice(0, 11) + '...';
      activeItem.textContent = targetTextSlice;
    } else {
      activeItem.textContent = targetText;
    }

    filterData(targetText);

    toggleInnerList();
  }

  // ------------filterData---------------------------

  const listContent = document.querySelector('.js-news-list');

  function filterData(activeItemText) {
    const uniqueItems = arrNews.filter(obj => obj.type === activeItemText.toLowerCase().trim());

    if (!uniqueItems.length) {
      listContent.innerHTML = createMarkupError();
      return;
    }

    listContent.innerHTML = createMarkup(uniqueItems).join('');
  }

  filterData(activeItemText);

  // ----createMarkup-----------

  function createMarkup(uniqueItems) {
    return uniqueItems.map(({ imageMob, imageTab, imageLapTop, title, description }) => {
      return `
     <li class="page-news__list-contentt-item">
        <div class="page-news__list-content-overlay">

          <div class="page-news__title-box">
            <h3 class="page-news__item-title">
              ${title}
            </h3>

            <p class="page-news__content-item-description">
             ${description}
           </p>

            <a href="../../../one-news.html" target="_blank">
              <p class="discover-more   discover-more__dark  page-news__sub-title">Discover more
              </p>
            </a>
          </div>
        </div>
        
        </div>
        <a
          href="#"
          class="our-projects__project-link">
          <picture class="our-projects__project-picture">
            <source
              srcset="${imageLapTop}"
              media="(min-width: 1024px)" />
            <source
              srcset="${imageTab}"
              media="(min-width: 768px)" />

            <img 
              loading="lazy"
              src="${imageMob}"
              alt="Project-item"
              class="page-news__list-content-img" />
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
