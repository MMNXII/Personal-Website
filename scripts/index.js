(introAnime = () => {
  const animation = anime({
    targets:
      '#header, #profile, #intro-container, #work-container, #icon-container',
    duration: 500,
    delay: anime.stagger(300, { start: 300, from: 'first' }),
    easing: 'easeInOutSine',
    opacity: [0, 1],
    translateY: ['-1rem', 0],
    direction: 'normal',
  });
})();

(background = () => {
  const canvasEl = document.getElementById('#canvas-div');

  const granimInstance = new Granim({
    element: '#canvas-background',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
      'default-state': {
        gradients: [
          ['#0e1524', '#141a29'],
          ['#0e1b24', '#111c24'],
        ],
      },
    },
  });
})();

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

const doc = document.createElement('img');
doc.id = 'test';
doc.src = './images/slice1.svg';
doc.style.position = 'absolute';
doc.style.top = '0';
doc.style.right = '0';
doc.style.left = '0';
doc.style.opacity = '1';
doc.style.margin = '0 auto';

document.body.appendChild(doc);
