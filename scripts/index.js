(introAnime = () => {
  var animation = anime({
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

const canvas = document.getElementById('#canvas-div');

var granimInstance = new Granim({
  element: '#canvas-background',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        ['#001433', '#263a57'],
        ['#1b2029', '#001433'],
      ],
    },
  },
});
