/****** Show Page and Introductory Animations *****/

document.getElementById('body').style.display = 'block';

(introAnimations = () => {
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
    targets: '#social-media-icon-container',
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
    targets: '.page-icons',
    delay: anime.stagger(50, { start: 700 }),
    translateY: ['-2rem', 0],
    opacity: [0, 1],
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)',
  });
})();

/***** Page Icons *****/

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

/***** Report / Willmore image galleries *****/

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

/***** Content *****/

/****** Create Containers ******/

const webPageContent = (function () {
  const mainContainer = document.getElementById('main-container');
  let workContainer;
  let contentContainer;
  let ItemContainer;

  const clearMainContainer = () => {
    mainContainer.innerHTML = '';

    createWorkContainer();
  };

  const createWorkContainer = () => {
    workContainer = document.createElement('div');
    workContainer.id = 'work-container';
    mainContainer.appendChild(workContainer);

    return workContainer;
  };

  const createHeader = (text) => {
    const h1 = document.createElement('h1');
    h1.className = 'sub-header';
    h1.textContent = text;

    workContainer.appendChild(h1);
  };

  const createContentContainer = (id) => {
    contentContainer = document.createElement('div');
    contentContainer.id = id;
    workContainer.appendChild(contentContainer);

    return contentContainer;
  };

  const createItemContainer = (id) => {
    ItemContainer = document.createElement('div');
    ItemContainer.id = id;
    contentContainer.appendChild(ItemContainer);

    return ItemContainer;
  };

  /****** Create Content ******/

  /******* Create About Functions *******/

  const createAboutContent = () => {
    const introAboutContainer = document.createElement('div');
    introAboutContainer.className = 'intro-about-container';
    contentContainer.appendChild(introAboutContainer);

    const img = document.createElement('img');
    img.className = 'profile';
    img.src = './images/profile.jpg';
    introAboutContainer.appendChild(img);

    const introParaContainer = document.createElement('div');
    introParaContainer.className = 'intro-para-container';
    introAboutContainer.appendChild(introParaContainer);

    createAboutParagraphs = (text) => {
      const about = document.createElement('p');
      about.textContent = text;
      about.className = 'header content-intro';

      introParaContainer.appendChild(about);
    };

    createAboutParagraphs('Designer at heart, Developer on the rise.');
    createAboutParagraphs(
      "I've always had an interest in being visually imaginative. Using graphic design to express on the digital canvas, and web development to take that expression to new heights. Combining visual communication and user interaction enables me to showcase my creativity, and make it a reality."
    );

    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills-container';
    contentContainer.appendChild(skillsContainer);

    const skillsTitles = ['Lanuages:', 'Tools:', 'Software:'];

    skillsTitles.forEach((skills) => {
      const div = document.createElement('div');
      div.className = 'aboutDiv';

      const h2 = document.createElement('h2');
      h2.className = 'header aboutTextTitles';
      h2.textContent = skills;

      div.appendChild(h2);
      skillsContainer.appendChild(div);
    });

    const languagesDiv = document.getElementsByClassName('aboutDiv')[0];
    const toolsDiv = document.getElementsByClassName('aboutDiv')[1];
    toolsDiv.id = 'toolsDiv';
    const softwareDiv = document.getElementsByClassName('aboutDiv')[2];

    const languages = ['HTML', 'CSS', 'SCSS / SASS', 'JavaScript'];
    const tools = [
      'Visual Studio Code',
      'GitHub',
      'Git',
      'CLI',
      'Webpack',
      'NPM',
    ];
    const software = [
      'Affinity Photo',
      'Affinity Designer',
      'Photoshop',
      'Illustrator',
      'InDesign',
      'Acrobat',
      'MS Office',
      'Windows OS',
      'Mac OS',
      'Linux (Ubuntu)',
    ];

    applyLists = (array, containingDiv) => {
      const list = document.createElement('ul');

      array.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.className = 'header list-item';
        listItem.textContent = item;

        list.appendChild(listItem);
      });
      containingDiv.appendChild(list);
    };

    applyLists(languages, languagesDiv);
    applyLists(tools, toolsDiv);
    applyLists(software, softwareDiv);
  };

  /****** Web Development Image Objects ******/

  const rps = {
    alt: 'Rock Paper Scissors Screenshot',
    id: 'rps-image',
    src: 'images/web-development-work/rockpaperscissors.png',
  };
  const italy = {
    alt: 'Italy Screenshot',
    id: 'italy-image',
    src: 'images/web-development-work/italy.png',
  };
  const etch = {
    alt: 'Etch-A-Sketch Screenshot',
    id: 'etchasketch-image',
    src: 'images/web-development-work/etchasketch.png',
  };
  const rpg = {
    alt: 'RPG Game Screenshot',
    id: 'rpg-image',
    src: 'images/web-development-work/rpg.png',
  };

  /****** Create Web Dev Functions ******/

  const createWebImageContent = ({ alt, id, src }) => {
    const img = document.createElement('img');
    img.alt = alt;
    img.id = id;
    img.src = src;

    ItemContainer.appendChild(img);
  };

  const createWebButtonContent = (href, btnText) => {
    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.target = '_blank';

    const btn = document.createElement('btn');
    btn.className = 'project-buttons';
    btn.textContent = btnText;

    anchor.appendChild(btn);
    ItemContainer.appendChild(anchor);
  };

  /****** Initialize Web Dev Functions ******/

  const showRPS = () => {
    createItemContainer('rps');
    createWebImageContent(rps);
    createWebButtonContent(
      'https://rockpaperscissors.matthewmneal.com/',
      'Live'
    );
    createWebButtonContent(
      'https://github.com/MMNXII/rock-paper-scissors',
      'Code'
    );
    createFigCaption('captions', 'Rock, Paper, Scissors');
    createFigCaption(
      'sub-captions',
      '  The popular hand sign game turned into an interactive web application'
    );
  };

  const showItaly = () => {
    createItemContainer('italy');
    createWebImageContent(italy);
    createWebButtonContent('https://italy.matthewmneal.com/', 'Live');
    createWebButtonContent(
      'https://github.com/MMNXII/italia-memoriam-mmxix',
      'Code'
    );
    createFigCaption('captions', 'Italia Memoriam MMXIX');
    createFigCaption(
      'sub-captions',
      'Website dedicated to a trip to Italy taken with my girlfriend'
    );
  };

  const showEtch = () => {
    createItemContainer('etch');
    createWebImageContent(etch);
    createWebButtonContent('https://etchasketch.matthewmneal.com/', 'Live');
    createWebButtonContent('https://github.com/MMNXII/etch-a-sketch', 'Code');
    createFigCaption('captions', 'Etch-A-Sketch');
    createFigCaption('sub-captions', 'Etch-A-Sketch but now in digital form');
  };

  const showRPG = () => {
    createItemContainer('rpg');
    createWebImageContent(rpg);
    createWebButtonContent('https://rpg.matthewmneal.com/', 'Live');
    createWebButtonContent('https://github.com/MMNXII/rpg', 'Code');
    createFigCaption('captions', 'RPG');
    createFigCaption(
      'sub-captions',
      'Text based RPG character creation simulator'
    );
  };

  /****** Graphic Design Image Objects ******/
  const reportImages = {
    href:
      'https://s3images.coroflot.com/user_files/individual_files/385559_sTayJegwr3reCiwSwJzxqkPhi.pdf',
    alt: 'Annual Report',
    className: 'report-images',
    one: {
      src: 'images/graphic-design-work/annual-report/report-image1.jpg',
    },
    two: {
      src: 'images/graphic-design-work/annual-report/report-image2.jpg',
    },
    three: {
      src: 'images/graphic-design-work/annual-report/report-image3.jpg',
    },
  };

  const willmoreImages = {
    href: 'https://www.coroflot.com/MatthewNeal/Willmore-Wine-Bar',
    alt: 'Willmore Wine Bar',
    className: 'willmore-images',
    one: {
      src: 'images/graphic-design-work/willmore/willmore-image1.jpg',
    },
    two: {
      src: 'images/graphic-design-work/willmore/willmore-image2.jpg',
    },
    three: {
      src: 'images/graphic-design-work/willmore/willmore-logo-final.jpg',
    },
  };

  const aoeImage = {
    href: 'https://www.coroflot.com/MatthewNeal/Game-Box-Re-Design',
    alt: 'Age of Empires II Box Remodel',
    id: 'aoe-image',
    src: 'images/graphic-design-work/aoe-box/aoe-image1.jpg',
  };

  const bCardImages = {
    href:
      'https://s3images.coroflot.com/user_files/individual_files/385559_YnYIctd3Ym5ipRt4eVK9Xmzyw.pdf',
    alt: 'Personal Business Card',
    className: 'personal-bcard',
    front: {
      src: 'images/graphic-design-work/personal-businss-card/front.jpg',
    },
    back: {
      src: 'images/graphic-design-work/personal-businss-card/back.jpg',
    },
  };

  const elements = {
    src: 'images/graphic-design-work/elements/elements-collage.svg',
  };

  const willmore = {
    src: 'images/graphic-design-work/willmore/willmore-collage.svg',
  };

  const report = {
    src: 'images/graphic-design-work/annual-report/report-collage.jpg',
  };

  /****** Create Graphic Design Functions ******/

  const createImages = ({ src }, text, id) => {
    const imgContainter = document.createElement('div');
    imgContainter.className = 'imgContainer';

    const img = document.createElement('img');
    img.className = 'img';
    img.src = src;

    const txt = document.createElement('h2');
    txt.className = 'hover-text';
    txt.id = id;
    txt.textContent = text;
    imgContainter.appendChild(txt);

    imgContainter.appendChild(img);
    contentContainer.appendChild(imgContainter);

    imgContainter.addEventListener(
      'mouseover',
      (show = (e) => {
        if (e.target.className == 'hover-text') {
          txt.style.opacity = '1';
          txt.style.transition = 'opacity .2s linear';
        }
      })
    );

    imgContainter.addEventListener(
      'mouseout',
      (hide = (e) => {
        if (e.target.className == 'hover-text') {
          txt.style.opacity = '0';
          txt.style.transition = 'opacity .2s linear';
        }
      })
    );

    imgContainter.addEventListener(
      'click',
      (showElements = (e) => {
        if (e.target.className == 'txt') {
          clearMainContainer();
        }
      })
    );
  };

  const createGraphicImageContent = ({ href, alt, className, id }, src) => {
    const anchor = document.createElement('a');
    anchor.target = '_blank';
    anchor.href = href;

    const img = document.createElement('img');
    img.alt = alt;
    img.className = className;
    img.src = src;
    img.id = id;

    anchor.appendChild(img);
    ItemContainer.appendChild(anchor);
  };

  const createGraphicGalleryBtns = (className, text) => {
    const btn = document.createElement('button');
    btn.className = className;
    btn.textContent = text;

    ItemContainer.appendChild(btn);
  };

  const createGraphicGalleryMarkers = (
    containingDivId,
    childDivClass,
    childDivId
  ) => {
    const parentDiv = document.createElement('div');
    parentDiv.id = containingDivId;

    for (let i = 0; i < 3; i++) {
      const childDiv = document.createElement('div');
      childDiv.className = childDivClass;
      childDiv.id = childDivId[i];

      parentDiv.appendChild(childDiv);
    }

    ItemContainer.appendChild(parentDiv);
  };

  const createFigCaption = (className, text) => {
    const fig = document.createElement('h3');
    fig.className = className;
    fig.textContent = text;

    ItemContainer.appendChild(fig);
  };

  /****** Initialize Graphic Design Functions ******/

  const showReport = () => {
    const figSub =
      'Created while at University, the design is made in a sleek and clean manner to reflect the luxurious status of the Mercedes-Benz brand.';

    createItemContainer('report-container');
    createGraphicImageContent(reportImages, reportImages.one.src);
    createGraphicImageContent(reportImages, reportImages.two.src);
    createGraphicImageContent(reportImages, reportImages.three.src);
    createGraphicGalleryBtns('report-image-button back-btn', '<');
    createGraphicGalleryBtns('report-image-button forward-btn', '>');
    createGraphicGalleryMarkers('report-markers-container', 'report-markers', [
      'report-marker-1',
      'report-marker-2',
      'report-marker-3',
    ]);
    createFigCaption('captions', 'Mock Annual Report');
    createFigCaption('sub-captions', figSub);
  };

  const showWillmore = () => {
    const figSub =
      'Designed for an up and coming wine bar in Long Beach, CA in 2010. These drafts were created to initialize the branding process, with the final design (last slide) currently being used by Willmore Wine Bar.';

    createItemContainer('willmore-container');
    createGraphicImageContent(willmoreImages, willmoreImages.one.src);
    createGraphicImageContent(willmoreImages, willmoreImages.two.src);
    createGraphicImageContent(willmoreImages, willmoreImages.three.src);
    createGraphicGalleryBtns('willmore-image-button back-btn', '<');
    createGraphicGalleryBtns('willmore-image-button forward-btn', '>');
    createGraphicGalleryMarkers(
      'willmore-markers-container',
      'willmore-markers',
      ['willmore-marker-1', 'willmore-marker-2', 'willmore-marker-3']
    );
    createFigCaption('captions', 'Willmore Wine Bar');
    createFigCaption('sub-captions', figSub);
  };

  const showAOE = () => {
    const figSub =
      'As a personal project at University, I decided to take on the task of redesigning the box art for the real-time strategy game Age of Empires II';

    createItemContainer('aoe-container');
    createGraphicImageContent(aoeImage, aoeImage.src);
    createFigCaption('captions', 'Age of Empires II Box Redesign');
    createFigCaption('sub-captions', figSub);
  };
  const showBcard = () => {
    const figSub =
      'Designed to showcase my personal branding and advertise for prospective clients';

    createItemContainer('bcard-container');
    createGraphicImageContent(bCardImages, bCardImages.front.src);
    createGraphicImageContent(bCardImages, bCardImages.back.src);
    createFigCaption('captions', 'Personal Business Card');
    createFigCaption('sub-captions', figSub);
  };

  /****** Initialize Pages ******/

  fadeInAnimation = () => {
    const webDevAnime = anime({
      targets: '#work-container',
      opacity: [0, 1],
      duration: 3000,
      direction: 'easeInOutSine',
    });
  };

  const showAbout = () => {
    clearMainContainer();
    fadeInAnimation();
    createHeader('About');
    createContentContainer('about-content');
    createAboutContent();
  };

  const showWebDev = () => {
    clearMainContainer();
    fadeInAnimation();
    createHeader('Web Development');
    createContentContainer('web-dev-content');

    showRPS();
    showItaly();
    showEtch();
    showRPG();
  };

  const showGraphicDes = () => {
    clearMainContainer();
    fadeInAnimation();
    createHeader('Graphic Design');
    createContentContainer('graphic-des-content');

    createImages(elements, 'Elements', 'elements-text');
    createImages(willmore, 'Willmore', 'willmore-text');
    createImages(report, 'Report', 'report-text');

    showReport();
    getBtns('report-container');
    showImages((slideIndex = 1), 'report-images', 'report-markers');

    showWillmore();
    getBtns('willmore-container');
    showImages((slideIndex = 1), 'willmore-images', 'willmore-markers');

    showAOE();
    showBcard();
  };

  const icons = document.getElementsByClassName('page-icons');
  const iconsArr = Array.from(icons);

  iconsArr.forEach((icon) => {
    icon.addEventListener(
      'click',
      (showContent = (e) => {
        e.target.id == 'person2' ? showAbout() : null;
        e.target.id == 'web2' ? showWebDev() : null;
        e.target.id == 'graphic2' ? showGraphicDes() : null;
      })
    );
  });
})();
