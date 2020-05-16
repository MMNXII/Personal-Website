document.getElementById('show').style.display = 'block';

(introAnime = () => {
  const banner = anime({
    targets: '.top-banner',
    delay: anime.stagger(200),
    duration: 1500,
    translateY: ['-2rem', 0],
    opacity: [0, 1],
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)',
  });
  const logo = anime({
    targets: '#logo-container',
    duration: 2500,
    delay: 300,
    translateY: ['-20rem', 0],
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)',
  });
  const name = anime({
    targets: '.name',
    delay: 600,
    duration: 1500,
    translateY: ['-2rem', 0],
    opacity: [0, 1],
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)',
  });
  const titles = anime({
    targets: '.web, .divide, .graphic',
    delay: 700,
    duration: 1500,
    translateY: ['-2rem', 0],
    opacity: [0, 1],
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)',
  });
  const icon = anime({
    targets: '.icon',
    delay: anime.stagger(50, { start: 700 }),
    translateY: ['-2rem', 0],
    opacity: [0, 1],
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)',
  });
  const introHeader = anime({
    targets: '#intro-container',
    delay: 2500,
    duration: 2500,
    opacity: [0, 1],
    direction: 'normal',
    translateX: ['-2em', 0],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
  });
  const introHeaderCommaWelcome = anime({
    targets: '.comma-welcome',
    delay: 3500,
    duration: 2000,
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    direction: 'normal',
  });
  const intro = anime({
    targets: '.intro-para',
    delay: 6000,
    duration: 2000,
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    direction: 'normal',
  });
  const pageLinks = anime({
    targets: '.page-links',
    delay: anime.stagger(50, { start: 700 }),
    translateY: ['-2rem', 0],
    opacity: [0, 1],
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)',
  });
  // const work = anime({
  //   targets: '#work-container',
  //   delay: 8000,
  //   duration: 3000,
  //   opacity: [0, 1],
  //   easing: 'easeInOutExpo',
  //   direction: 'normal',
  // });
})();

showIcon = (container, front, back) => {
  const containerId = document.getElementById(container);
  const frontId = document.getElementById(front);
  const backId = document.getElementById(back);

  containerId.addEventListener(
    'mouseover',
    (show = () => {
      if (frontId.style.display !== 'none') {
        frontId.style.display = 'none';
        backId.style.display = 'block';
      }
    })
  );

  containerId.addEventListener(
    'mouseout',
    (hide = () => {
      if (frontId.style.display !== 'block') {
        frontId.style.display = 'block';
        backId.style.display = 'none';
      }
    })
  );
};

showIcon('person-container', 'person1', 'person2');
showIcon('web-container', 'web1', 'web2');
showIcon('graphic-container', 'graphic1', 'graphic2');

const getBtns = (id) => {
  const btn = document.getElementById(id).getElementsByTagName('button');
  const btnArray = Array.from(btn);

  btnArray.forEach((arr) => {
    arr.addEventListener(
      'click',
      (initiateDivs = (e) => {
        e.target.parentNode.id == 'report-container' &&
        e.target.classList.contains('back-btn')
          ? showImages((slideIndex += -1), 'report-images', 'report-markers')
          : null;

        e.target.parentNode.id == 'report-container' &&
        e.target.classList.contains('forward-btn')
          ? showImages((slideIndex += +1), 'report-images', 'report-markers')
          : null;

        e.target.parentNode.id == 'willmore-container' &&
        e.target.classList.contains('back-btn')
          ? showImages(
              (slideIndex += -1),
              'willmore-images',
              'willmore-markers'
            )
          : null;

        e.target.parentNode.id == 'willmore-container' &&
        e.target.classList.contains('forward-btn')
          ? showImages(
              (slideIndex += +1),
              'willmore-images',
              'willmore-markers'
            )
          : null;
      })
    );
  });
};

const showImages = (n, className, classMarkers) => {
  const images = document.getElementsByClassName(className);
  const imagesArray = Array.from(images);

  const markers = document.getElementsByClassName(classMarkers);
  const markersArray = Array.from(markers);

  n > images.length ? (slideIndex = 1) : null;
  n < 1 ? (slideIndex = images.length) : null;

  imagesArray.forEach((img) => {
    img.style.display = 'none';
  });

  markersArray.forEach((marker) => {
    marker.style.backgroundColor = 'rgba(255, 255, 255, 0.267)';
    marker.style.opacity = '.5';
  });

  imagesArray[slideIndex - 1].style.display = 'block';
  markersArray[slideIndex - 1].style.backgroundColor =
    'rgba(255, 255, 255, 0.801)';
  markersArray[slideIndex - 1].style.opacity = '1';
  markersArray[slideIndex - 1].style.transitionProperty = 'opacity';
  markersArray[slideIndex - 1].style.transitionDuration = '.5s';
};

getBtns('report-container');
getBtns('willmore-container');

showImages((slideIndex = 1), 'report-images', 'report-markers');
showImages((slideIndex = 1), 'willmore-images', 'willmore-markers');
