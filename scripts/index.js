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
  const introPara = anime({
    targets: '.intro-para',
    delay: 3200,
    duration: 2000,
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    direction: 'normal',
  });
  const portfolioBtn = anime({
    targets: '#portfolio-btn-container',
    delay: 4000,
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
    img.alt = 'Matthew Neal, Front End Web Developer and Graphic Designer';
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
    softwareDiv.id = 'softwareDiv';

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
      'Affinity Publisher',
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

    createBtn('Development >', 'nav-btn dev-btn', showWebDev);

    createBottomBorder();
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

    createBtn('design >', 'nav-btn design-btn', showGraphicDes);

    createBottomBorder();
  };

  /******************** Graphic Design ********************/

  const elements = {
    alt: 'Elements Project',
    src: 'images/graphic-design-work/elements/elements-collage.svg',
  };

  const willmore = {
    alt: 'Willmore Wine Bar',
    src: 'images/graphic-design-work/willmore/willmore-collage.svg',
  };

  const bryan = {
    alt: 'Bryan Laboratory Equipment',
    src: 'images/graphic-design-work/bryan-lab/bryan-collage.png',
  };

  const legacy = {
    alt: 'Legacy Leader Group',
    src: 'images/graphic-design-work/legacy/legacy-collage.svg',
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
          e.target.id == 'legacy-text'
        ) {
          showLegacy();
        } else if (
          e.target.className == 'hover-text' &&
          e.target.id == 'bryan-text'
        ) {
          showBryanLab();
        }
      })
    );
  };

  const showGraphicDes = () => {
    clearMainContainer();
    fadeInAnimation();
    createHeader('Design', 'sub-header graphic-header');
    createContentContainer('graphic-des-content');

    createGraphicDesImages(willmore, 'Willmore Wine Bar', 'willmore-text');
    createGraphicDesImages(elements, 'Elements', 'elements-text');
    createGraphicDesImages(bryan, 'Bryan Laboratory Equipment', 'bryan-text');
    createGraphicDesImages(legacy, 'Legacy Leader Group', 'legacy-text');

    createBottomBorder();
  };

  createIntroContentPara = (text) => {
    const para = document.createElement('p');
    para.textContent = text;
    para.className = 'header intro-content-para';

    contentContainer.appendChild(para);
  };

  /******************** Willmore / Bryan ********************/

  const willmoreImages = {
    draft1: {
      alt: 'Willmore Wine Bar Logo Draft - Classic Style',
      src: 'images/graphic-design-work/willmore/willmore-draft-1.jpg',
      href: 'images/graphic-design-work/willmore/willmore-draft-1.jpg',
    },
    draft2: {
      alt: 'Willmore Wine Bar Logo Draft - New Style',
      src: 'images/graphic-design-work/willmore/willmore-draft-2.jpg',
    },
    draft3: {
      alt: 'Willmore Wine Bar Logo Draft - Modern Style 1',
      src: 'images/graphic-design-work/willmore/willmore-draft-3.jpg',
    },
    draft4: {
      alt: 'Willmore Wine Bar Logo Draft - Modern Style 2',
      src: 'images/graphic-design-work/willmore/willmore-draft-4.jpg',
    },
    flyer: {
      alt: 'Sabor Latino, One Of The First Events Held For Willmore Wine Bar',
      id: 'willmore-flyer',
      src: 'images/graphic-design-work/willmore/willmore-flyer.jpg',
    },
    outdoor: {
      alt: 'WIllmore Wine Bar Location in Long Beach, CA',
      id: 'willmore-outdoor',
      src: 'images/graphic-design-work/willmore/willmore-outdoor.jpg',
    },
  };

  const bryanImages = {
    draft1: {
      alt: 'Bryan Laboratory Equipment Logo Draft - Centered Stacked',
      src: 'images/graphic-design-work/bryan-lab/bryan-draft-1.png',
    },
    draft2: {
      alt: 'Bryan Laboratory Equipment Logo Draft - Landscape',
      src: 'images/graphic-design-work/bryan-lab/bryan-draft-2.png',
    },
    draft3: {
      alt: 'Bryan Laboratory Equipment Logo Draft - Centered',
      src: 'images/graphic-design-work/bryan-lab/bryan-draft-3.png',
    },
    draft4: {
      alt: 'Bryan Laboratory Equipment Logo Draft - Color Variants',
      src: 'images/graphic-design-work/bryan-lab/bryan-draft-4.png',
    },
  };

  const legacyImages = {
    draft1: {
      alt: 'Legacy Leader Group Tree Draft 1',
      src: 'images/graphic-design-work/legacy/llg-tree-bw1.svg',
    },
    draft2: {
      alt: 'Legacy Leader Group Tree Draft 1',
      src: 'images/graphic-design-work/legacy/llg-tree-bw2.svg',
    },
    draft3: {
      alt: 'Legacy Leader Group Tree Draft 1',
      src: 'images/graphic-design-work/legacy/llg-tree-color1.svg',
    },
    draft4: {
      alt: 'Legacy Leader Group Tree Draft 1',
      src: 'images/graphic-design-work/legacy/llg-tree-color2.svg',
    },
  };

  createDrafts = (dratfsContainer, imageSet, draftImages) => {
    const div = document.createElement('div');
    div.className = dratfsContainer;
    const { draft1, draft2, draft3, draft4 } = imageSet;
    const imgSrcArr = [draft1.src, draft2.src, draft3.src, draft4.src];

    imgSrcArr.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = draftImages;
      div.appendChild(img);
    });

    contentContainer.appendChild(div);
  };

  createContentPara = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    p.className = 'content-para';

    contentContainer.appendChild(p);
  };

  createFinal = (alt, src) => {
    const img = document.createElement('img');
    img.className = 'final';
    img.alt = alt;
    img.src = src;
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

  const showWillmoreWineBar = () => {
    clearMainContainer();
    fadeInAnimation();
    workContainerRelative();
    createHeader('Willmore Wine Bar', 'content-header');
    createContentContainer('willmore-container');
    createIntroContentPara(
      'One of my first commissions as a designer was to produce the branding for an upcoming business located in Long Beach, CA. Working through this project helped reveal many important aspects of the graphic design process, both with technical design itself as well as more business focused topics.'
    );

    createDrafts('drafts-container', willmoreImages, 'drafts');
    createContentPara(
      'When I was approached with the task to brand a wine bar, immediately the general idea was to implement imagery of wine with the wordmark. I wanted to work with how different typefaces created different negative space allowing for compatible imagery. Presenting the client with different design directions was my goal, from elegant and modern, to more traditional.'
    );
    createFinal(
      'Willmore Final',
      'images/graphic-design-work/willmore/willmore-final.jpg'
    );
    createContentPara(
      'The final version of the logo presents a more refined design than shown in the concept drafts. It accomplishes the same task of combining imagery with typography, but with a more cohesive approach that allows accurate representation through different mediums such as print and outdoor signage.'
    );

    createWillmoreAddtlImages();

    createBtn('< Design', 'nav-btn design-btn', showGraphicDes);

    createBottomBorder();
  };

  const showBryanLab = () => {
    clearMainContainer();
    fadeInAnimation();
    workContainerRelative();
    createHeader('Bryan Laboratory Equipment', 'content-header');
    createContentContainer('bryan-container');
    createIntroContentPara(
      'This project presented itself differently as the logo and color scheme assets were provided from the onset. In turn, this lead the design process to focus more on supplemental elements and layout, as opposed to typography and illustration, to achieve the goal of a professional business logo.'
    );
    createDrafts('drafts-container', bryanImages, 'drafts');
    createContentPara(
      'Accepting this project came with two stipulations: use the provided logo and color scheme, and design accordingly to be used with print media. Keeping these in mind, the logo was converted to print ready CMYK while still representing the provided colors, and the design needed to have a horizontal orientation to not only accomodate print media layouts, but also the length of the business name. '
    );
    createFinal(
      'Bryan Final',
      'images/graphic-design-work/bryan-lab/bryan-final.png'
    );
    createContentPara(
      'Ultimately, the decided upon design presents a more cohesive piece by carrying over elements from the logo onto the wordmark. Including a background on the typeface reflects the logo itself by giving it a containing element, and allows the design as a whole to be used on print media with variations of material color for easy readability. '
    );

    createBtn('< Design', 'nav-btn design-btn', showGraphicDes);

    createBottomBorder();
  };

  const showLegacy = () => {
    clearMainContainer();
    fadeInAnimation();
    workContainerRelative();
    createHeader('Legacy Leader Group', 'content-header');
    createContentContainer('legacy-container');
    createIntroContentPara(
      'I was approached by a Las Vegas based investment group with ideas for a logo. Through the discovery process, I was able to convert those ideas into a fully rendered professional brand with not just an identity, but an online presence.'
    );

    /******************** create LLG Link ********************/
    const legacyLink = document.createElement('a');
    legacyLink.href = 'http://legacyleadergroup.com/';
    legacyLink.target = '_blank';
    legacyLink.style.textDecoration = 'none';
    legacyLink.style.display = 'inline-block';

    const legacyBtn = document.createElement('button');
    legacyBtn.textContent = 'Visit legacyleadergroup.com';
    legacyBtn.className = 'nav-btn';
    legacyBtn.style.margin = 'auto';

    legacyLink.appendChild(legacyBtn);

    const legacyContainer = document.getElementById('legacy-container');
    legacyContainer.appendChild(legacyLink);

    createDrafts('drafts-container', legacyImages, 'legacy-drafts');
    createContentPara(
      "I was given initial input for the direction for the logo design: a flourishing tree meant to symbolize and represent a client's financial future, or legacy. For color scheme I found it fitting to use colors synonymous with investing and finances: green and gold."
    );
    const div = document.createElement('div');
    div.className = 'drafts-container';

    const img1 = document.createElement('img');
    img1.className = 'legacy-drafts';
    img1.src = 'images/graphic-design-work/legacy/llg-logo-color1.svg';

    const img2 = document.createElement('img');
    img2.className = 'legacy-drafts';
    img2.src = 'images/graphic-design-work/legacy/llg-logo-color2.svg';

    div.appendChild(img1);
    div.appendChild(img2);
    legacyContainer.appendChild(div);

    const paraFinal = document.createElement('p');
    paraFinal.textContent =
      'Working with the typface, we cycled through a few serif and sans-serif types landing on the final that you see below. As well, the 2 leaves act as a great element to round out the design, and work as a favicon as well for the website';
    paraFinal.className = 'content-para';

    legacyContainer.appendChild(paraFinal);

    const img3 = document.createElement('img');
    img3.className = 'legacy-drafts';
    img3.src = 'images/graphic-design-work/legacy/llg-logo-color3.svg';

    legacyContainer.appendChild(img3);

    createBtn('< Design', 'nav-btn design-btn', showGraphicDes);

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

    createBtn('< Design', 'nav-btn design-btn', showGraphicDes);

    createBottomBorder();
  };

  /******************** Annual Report ********************/

  const createFigCaption = (className, text) => {
    const fig = document.createElement('h3');
    fig.className = className;
    fig.textContent = text;

    ItemContainer.appendChild(fig);
  };

  /******************** Page Icons ********************/

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

  /******************** Page Nv Buttons ********************/

  const btn = document.getElementById('portfolio-btn');
  btn.addEventListener(
    'click',
    (showWeb = () => {
      showWebDev();
    })
  );

  createBtn = (text, className, func) => {
    window.scrollTo(0, 0);
    const btn = document.createElement('btn');
    btn.className = className;
    btn.textContent = text;
    contentContainer.appendChild(btn);

    btn.addEventListener(
      'click',
      (nav = () => {
        func();
      })
    );
  };
})();
