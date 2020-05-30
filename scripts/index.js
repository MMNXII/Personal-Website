/******************** Show Page / Intro Animations ********************/

document.getElementById('body').style.display = 'block';

(introAnimations = () => {
  const logo = anime({
    targets: '#logo-container',
    duration: 2500,
    delay: 300,
    translateY: ['-20rem', 0],
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
  const pageLinks = anime({
    targets: '.page-icons',
    delay: anime.stagger(50, { start: 700 }),
    translateY: ['-2rem', 0],
    opacity: [0, 1],
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)',
  });
  const introHeader = anime({
    targets: '#intro-container',
    delay: 1500,
    duration: 2500,
    opacity: [0, 1],
    direction: 'normal',
    translateX: ['-2em', 0],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
  });
  const introHeaderCommaWelcome = anime({
    targets: '.comma-welcome',
    delay: 2500,
    duration: 2000,
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    direction: 'normal',
  });
  const intro = anime({
    targets: '.intro-para',
    delay: 3200,
    duration: 2000,
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    direction: 'normal',
  });
})();

fadeInAnimation = () => {
  const webDevAnime = anime({
    targets: '#work-container',
    opacity: [0, 1],
    duration: 3000,
    direction: 'easeInOutSine',
  });
};

/******************** Containers ********************/

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

  const workContainerRelative = () => {
    document.getElementById('work-container').style.position = 'relative';
  };

  const createHeader = (text, className) => {
    const h1 = document.createElement('h1');
    h1.className = className;
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

  const createBottomBorder = () => {
    const div = document.createElement('div');
    div.id = 'bottom-border';
    mainContainer.appendChild(div);
  };

  /******************** About ********************/

  const createAboutContent = () => {
    const introAboutContainer = document.createElement('div');
    introAboutContainer.className = 'intro-about-container';
    contentContainer.appendChild(introAboutContainer);

    const img = document.createElement('img');
    img.className = 'profile';
    img.src = './images/profile.jpg';
    img.alt = 'profile';
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
      div.className = 'about-div';

      const h2 = document.createElement('h2');
      h2.className = 'header about-text-titles';
      h2.textContent = skills;

      div.appendChild(h2);
      skillsContainer.appendChild(div);
    });

    const languagesDiv = document.getElementsByClassName('about-div')[0];
    const toolsDiv = document.getElementsByClassName('about-div')[1];
    toolsDiv.id = 'toolsDiv';
    const softwareDiv = document.getElementsByClassName('about-div')[2];

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

  const showAbout = () => {
    clearMainContainer();
    fadeInAnimation();
    createHeader('About', 'sub-header about-header');
    createContentContainer('about-content');
    createAboutContent();
  };

  /******************** Web Development ********************/

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

  const showWebDev = () => {
    clearMainContainer();
    fadeInAnimation();
    createHeader('Development', 'sub-header web-header');
    createContentContainer('web-dev-content');

    showRPS();
    showItaly();
    showEtch();
    showRPG();

    createBottomBorder();
  };

  /******************** Graphic Design ********************/

  const elements = {
    alt: 'elements',
    src: 'images/graphic-design-work/elements/elements-collage.svg',
  };

  const willmore = {
    alt: 'willmore',
    src: 'images/graphic-design-work/willmore/willmore-collage.svg',
  };

  const report = {
    alt: 'report',
    src: 'images/graphic-design-work/annual-report/report-collage.jpg',
  };

  const createGraphicDesImages = ({ src, alt }, text, id) => {
    const imgContainter = document.createElement('div');
    imgContainter.className = 'graphic-des-img-container';

    const img = document.createElement('img');
    img.className = 'graphic-des-img';
    img.src = src;
    img.alt = alt;

    const txt = document.createElement('h2');
    txt.className = 'hover-text';
    txt.id = id;
    txt.textContent = text;
    imgContainter.appendChild(txt);

    imgContainter.appendChild(img);
    contentContainer.appendChild(imgContainter);

    imgContainter.addEventListener(
      'mouseover',
      (showHoverText = (e) => {
        if (e.target.className == 'hover-text') {
          txt.style.opacity = '1';
          txt.style.transition = 'opacity .2s linear';
        }
      })
    );

    imgContainter.addEventListener(
      'mouseout',
      (hideHoverText = (e) => {
        if (e.target.className == 'hover-text') {
          txt.style.opacity = '0';
          txt.style.transition = 'opacity .2s linear';
        }
      })
    );

    imgContainter.addEventListener(
      'click',
      (showPages = (e) => {
        if (
          e.target.className == 'hover-text' &&
          e.target.id == 'elements-text'
        ) {
          showElements();
        } else if (
          e.target.className == 'hover-text' &&
          e.target.id == 'willmore-text'
        ) {
          showWillmoreWineBar();
        } else if (
          e.target.className == 'hover-text' &&
          e.target.id == 'report-text'
        ) {
          showAnnualReport();
        }
      })
    );
  };

  const showGraphicDes = () => {
    clearMainContainer();
    fadeInAnimation();
    createHeader('Design', 'sub-header graphic-header');
    createContentContainer('graphic-des-content');

    createGraphicDesImages(willmore, 'Willmore', 'willmore-text');
    createGraphicDesImages(elements, 'Elements', 'elements-text');
    createGraphicDesImages(report, 'Report', 'report-text');

    createBottomBorder();
  };

  createIntroContentPara = (text) => {
    const para = document.createElement('p');
    para.textContent = text;
    para.className = 'header intro-content-para';

    contentContainer.appendChild(para);
  };

  /******************** Willmore ********************/

  const willmoreImages = {
    draft1: {
      alt: 'Willmore Draft 1',
      src: 'images/graphic-design-work/willmore/willmore-draft-1.jpg',
    },
    draft2: {
      alt: 'Willmore Draft 2',
      src: 'images/graphic-design-work/willmore/willmore-draft-2.jpg',
    },
    draft3: {
      alt: 'Willmore Draft 3',
      src: 'images/graphic-design-work/willmore/willmore-draft-3.jpg',
    },
    draft4: {
      alt: 'Willmore Draft 4',
      src: 'images/graphic-design-work/willmore/willmore-draft-4.jpg',
    },
    flyer: {
      alt: 'Willmore Flyer',
      id: 'willmore-flyer',
      src: 'images/graphic-design-work/willmore/willmore-flyer.jpg',
    },
    outdoor: {
      alt: 'Willmore Outdoor',
      id: 'willmore-outdoor',
      src: 'images/graphic-design-work/willmore/willmore-outdoor.jpg',
    },
  };

  createWillmoreDrafts = () => {
    const div = document.createElement('div');
    div.className = 'willmore-drafts-container';
    const { draft1, draft2, draft3, draft4 } = willmoreImages;
    const imgSrcArr = [draft1.src, draft2.src, draft3.src, draft4.src];

    imgSrcArr.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'willmore-drafts';
      div.appendChild(img);
    });

    contentContainer.appendChild(div);
  };

  createWillmoreFinal = () => {
    const img = document.createElement('img');
    img.className = 'willmore-final';
    img.alt = 'Willmore Final';
    img.src = 'images/graphic-design-work/willmore/willmore-final.jpg';
    contentContainer.appendChild(img);
  };

  createWillmoreAddtlImages = () => {
    const div = document.createElement('div');
    div.className = 'willmore-addtl-img-container';
    const { flyer, outdoor } = willmoreImages;
    const imgSrcArr = [outdoor, flyer];

    imgSrcArr.forEach((image) => {
      const img = document.createElement('img');
      img.src = image.src;
      img.className = 'willmore-addtl-images';
      img.id = image.id;
      div.appendChild(img);
    });

    contentContainer.appendChild(div);
  };

  createWillmorePara = (id, text) => {
    const p = document.createElement('p');
    p.textContent = text;
    p.id = id;
    p.className = 'willmore-content-para';

    contentContainer.appendChild(p);
  };

  const showWillmoreWineBar = () => {
    clearMainContainer();
    fadeInAnimation();
    workContainerRelative();
    createHeader('Willmore Wine Bar', 'content-header');
    createContentContainer('willmore-container');
    createIntroContentPara(
      'One of my first commissions as a designer was to produce the branding for an upcoming business located in Long Beach, CA. Working through this project helped reveal many important aspects of the graphic design process, both with technical design itself as well as more business focused topics.'
    );

    createWillmoreDrafts();
    createWillmorePara(
      'drafts-para',
      'When I was approached with the task to brand a wine bar, immediately the general idea was to implement imagery of wine with the wordmark. I wanted to work with how different typefaces created different negative space allowing for compatible imagery. Presenting the client with different design directions was my goal, from elegant and modern, to more traditional.'
    );
    createWillmoreFinal();
    createWillmorePara(
      'final-para',
      'The final version of the logo presents a more refined version than shown in the concept drafts. It accomplishes the same task of combining imagery with typography, but with a more cohesive approach that allows allows accurate representation through different mediums such as print and outdoor signage.'
    );

    createWillmoreAddtlImages();

    createBottomBorder();
  };

  /******************** Elements ********************/

  createElementImages = (imgArr, appendTo) => {
    imgArr = imgArr;
    imgArr.forEach((element) => {
      const img = document.createElement('img');
      img.src = element.src;
      img.className = 'elements-images';

      appendTo.appendChild(img);
    });
  };

  createElementSectionL = (imgSrc, paraText, paraId) => {
    const elementSection = document.createElement('div');
    elementSection.className = 'element-section';

    contentContainer.appendChild(elementSection);

    const img = document.createElement('img');
    img.className = 'element';
    img.src = imgSrc;

    const p = document.createElement('p');
    p.textContent = paraText;
    p.className = 'element-para';
    p.id = paraId;

    elementSection.appendChild(img);
    elementSection.appendChild(p);
  };

  createElementSectionR = (imgSrc, paraText, paraId) => {
    const elementSection = document.createElement('div');
    elementSection.className = 'element-section';

    contentContainer.appendChild(elementSection);

    const img = document.createElement('img');
    img.className = 'element';
    img.src = imgSrc;

    const p = document.createElement('p');
    p.textContent = paraText;
    p.className = 'element-para';
    p.id = paraId;

    elementSection.appendChild(p);
    elementSection.appendChild(img);
  };

  const showElements = () => {
    clearMainContainer();
    fadeInAnimation();
    workContainerRelative();
    createHeader('Elements', 'content-header');
    createContentContainer('elements-container');
    createIntroContentPara(
      'Personal project using the four classical elements as the subject matter. Fire, water, earth, and air were seen by ancient cultures as the elements that encompass all life, and though they have been disproven to be by modern science, they still represent an all-important part of our daily lives.'
    );

    createElementSectionL(
      'images/graphic-design-work/elements/fire-collage.svg',
      'There are multiple approaches you can take when producing a type of project such as this one. I decided to go with simple illustrations accompanied by simple wordmarks, with the illustrations able to stand alone if wanted.',
      'para-left'
    );

    createElementSectionR(
      'images/graphic-design-work/elements/water-collage.svg',
      "Each wordmark compliments it's illustration by being represented in a visually cohesive typeface. Fire and earth shown in san-serif and bold fonts to reflect solidity, with water and air shown in script texts to reflect movement.",
      'para-right'
    );

    createElementSectionL(
      'images/graphic-design-work/elements/earth-collage.svg',
      'So to add an extra element for cohesiveness, each wordmark has a feature of the illustration designed somewhere within. Using this demonstates a combined technique of both illustration and typography.',
      'para-left'
    );

    createElementSectionR(
      'images/graphic-design-work/elements/air-collage.svg',
      "Each illustration takes on new character once an aspect changes such as background or color spectrum. Introducing these changes through variants is one way to show how design can be represented differently depending on the medium it's represented through.",
      'para-right'
    );

    createBottomBorder();
  };

  /******************** Annual Report ********************/

  const showAnnualReport = () => {
    clearMainContainer();
    fadeInAnimation();
    workContainerRelative();
    createHeader('Annual Report', 'content-header');
    createContentContainer('report-container');

    createBottomBorder();
  };

  const createFigCaption = (className, text) => {
    const fig = document.createElement('h3');
    fig.className = className;
    fig.textContent = text;

    ItemContainer.appendChild(fig);
  };

  /****** Page Icons ******/

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
})();
