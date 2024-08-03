export function projects() {
  const dataPojects = [
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-1.png',
      imageTab: 'project1.jpg',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-2.png',
      imageTab: 'project1.jpg',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-3.png',
      imageTab: 'project1.jpg',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-4.png',
      imageTab: 'project1.jpg',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'house',
      imageMob: 'assets/img/main/our-projects/mobile/img-5.png',
      imageTab: 'project1.jpg',
      imageDesc: 'project1.jpg',
    },
    {
      type: 'apartments',
      imageMob: 'assets/img/main/our-projects/mobile/img-1.png',
      imageTab: 'project1.jpg',
      imageDesc: 'project1.jpg',
    },
  ];

  const list = document.querySelector('#list');

  dataPojects.filter(obj => obj.type === 'apartments');
}
