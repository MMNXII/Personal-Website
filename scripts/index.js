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
          ? showImages((slideIndex += -1), 'report-images')
          : null;

        e.target.parentNode.id == 'report-container' &&
        e.target.classList.contains('forward-btn')
          ? showImages((slideIndex += +1), 'report-images')
          : null;

        e.target.parentNode.id == 'willmore-container' &&
        e.target.classList.contains('back-btn')
          ? showImages((slideIndex += -1), 'willmore-images')
          : null;

        e.target.parentNode.id == 'willmore-container' &&
        e.target.classList.contains('forward-btn')
          ? showImages((slideIndex += +1), 'willmore-images')
          : null;
      })
    );
  });
};

const showImages = (n, className) => {
  const images = document.getElementsByClassName(className);
  const imagesArray = Array.from(images);

  n > images.length ? (slideIndex = 1) : null;
  n < 1 ? (slideIndex = images.length) : null;

  imagesArray.forEach((img) => {
    img.style.display = 'none';
  });

  imagesArray[slideIndex - 1].style.display = 'block';
};

getBtns('report-container');
getBtns('willmore-container');

showImages((slideIndex = 1), 'report-images');
showImages((slideIndex = 1), 'willmore-images');
