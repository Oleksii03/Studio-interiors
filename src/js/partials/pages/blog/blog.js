export function blog() {
  const activeItem = document.querySelector('.js-active-li');
  const innerList = document.querySelector('.js-inner-list-news');

  let activeItemText = activeItem.textContent.toLowerCase().trim();

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

    if (targetText.length > 11) targetText = targetText.slice(0, 11) + '...';

    activeItem.textContent = targetText;
    activeItemText = activeItem.textContent;

    toggleInnerList();
  }
}
