
(introAnime = () => {

    var animation = anime({
    targets: "#header, #profile, #intro-container, #work-container, #icon-container",
    duration: 500,
    delay: anime.stagger(500, { start: 300, from: "first" }),
    easing: "easeInOutSine",
    opacity: [0, 1],
    translateY: ["-1rem", 0],
    direction: "normal",
});


})();