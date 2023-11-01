# HISTORY QUIZ

## PROJECT OVERVIEW

- **History Quiz** is a website that aims at testing the user's knowledge on general history facts from around the globe.
- This site is useful to anyone interested in history.
- It might also prove useful to anyone wanting to increase their knowledge on global history facts.
- This site might also prove of great use to secondary students wanting to reinforce their knowledge on history.

**NOTE**: _Responsive images of the site automatically generated through [ui.dev/amiresponsive](https://ui.dev/amiresponsive). The tool is interactive, and you can view and scroll through all pages in all the types of devices simultaneously [here](https://ui.dev/amiresponsive?url=https://englishgrows.com/history-quiz/index.html). I customized defect background-color attribute from amiresponsive site from black to whitesmoke, as my website is mostly in dark tones. I did it by changing the elements of the page, more precisely **class="bg-brand-coal"**._

## LIVE SITE

The deployed site can be viewed [here](https://englishgrows.com/historic-facts-quiz/).

## REPOSITORY

Github repository can be viewed [here](https://github.com/Ethra8/historic-facts-quiz/).

## AUTHOR

EDNA TORRES MUNILL

# TABLE OF CONTENTS

- [Project Overview](#project-overview)
- [Live Site](#live-site)
- [Repository](#repository)
- [Author](#author)
- [UX](#ux)

  - [Target Audience](#target-audience)
  - [Project Goals](#project-goal)
  - [User Stories](#user-stories)
  - [User Profiles](#user-profiles)

- [UI](#ui)

  - [Footer](#ui---footer)
  - [Home Page](#ui---home-page)

- [DESIGN CHOICES](#design-choices)

  - [Colors](#colors)

  - [Typography](#typography)

    - [Fonts Used](#fonts-used)
    - [Rationale of Use](#rationale-of-use)

  - [Imagery](#imagery)

    - [Home Page Imagery](#home-page-imagery)
    - [404 Page Imagery](#404-page-imagery)

  - [Animations and Transitions](#animations-and-transitions)

    - [Hover](#hover)
      - [Home Page Hover](#home-page-hover)
      - [Footer Icons Hover](#footer-icons-hover)
      - [Footer Email Link Hover](#footer-email-link---hover)
    - [Transitions](#transitions)
      - [Home Page Transitions](#home-page-transitions)
      - [Footer Transitions](#footer-transitions)
    - [Animations](#animations)
      - [Footer Icons Animation](#footer-icons-animation)

  - [Design Elements](#design-elements)
    - [Icons](#icons)

- [STRUCTURE](#structure)

  - [Content Structure](#content-structure)

    - [Navigation Bar Structure](#navigation-bar-structure)
    - [Footer Structure](#footer-structure)
    - [Home Page Structure](#home-page-structure)
    - [404 Page Structure](#404-page-structure)

  - [Wireframes](#wireframes)
    - [Home Page](#home-page---wireframes)
      - [Mobile and Tablet Portrait](#home-page---mobile-and-tablet-portrait)
      - [Desktop and Tablet Landscape](#home-page---desktop-and-tblet-landscape)

- [FEATURES](#features)

  - [Implemented Features](#implemented-features)

    - [Responsiveness](#responsiveness)
    - [Navigation Bar Features](#navigation-bar-features)
    - [Header Features](#header-features)
    - [Footer Features](#footer-features)
    - [Home Page Features](#home-page-features)
    - [404 Page Features](#404-error-page-features)

  - [Future Features](#future-features)
    - [Add Different Quizzes](#add-different-quizzes)
    - [Question Images](#question-images)
    - [Contact Form](#contact-form)

- [TESTING](#testing)

  - [Validation Testing](#validation-testing)

    - [CSS Validation](#css-validation)
    - [HTML Validation](#html-validation)

  - [Compatibility and Responsive Testing](#compatibility-and-responsive-testing)

    - [Preselecting Testing Targets](#preselecting-testing-targets)
    - [Testing Targets Table](#testing-targets-table)
    - [Test Recordings and Results](#test-recordings-and-results)

  - [Manual Testing](#manual-testing)

    - [Quiz](#quiz)

  - [Defect Tracking](#defect-tracking)

    - [Github Issues](#github-issues)

  - [Defects of Note](#defects-of-note)

  - [Outstanding Defects](#outstanding-defects)

  - [Core Web Vitals](#core-web-vitals)

    - [Lighthouse Reports](#lighthouse-reports)

  - [Accessibility Testing](#accessibility-testing)
    - [Accessibility Audits](#accessibility-audits)
      - [WCAG 2.1 Validation](#wcag-2.1-validation)
      - [General Accessibility Reports](#general-accessibility-reports)
    - [Keyboard Navigation](#keyboard-navigation)
    - [Chrome Vox Reader](#chrome-vox-reader)

- [TECHNOLOGIES USED](#technologies-used)

  - [Languages](#languages)

  - [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)

- [DEPLOYMENT](#deployment)

  - [Deploy to Github Pages](#deploy-to-github-pages)
    - [Production](#production)
  - [Forking the Repository](#forking-the-repository)
  - [Cloning the Repository](#cloning-the-repository)

- [Credits](#credits)

  - [Imagery](#imagery)
  - [Content](#content)

- [Acknowledgements](#acknowledgements)

# TECHNOLOGIES USED

## LANGUAGES

- HTML5
- CSS3
- JS

## FRAMEWORKS, LIBRARIES AND PROGRAMS USED

- The following have been used:
  - [Visual Studio Code](https://code.visualstudio.com/) - To begin coding the site from scratch. I already had VScode installed previously, due to a previous personal freelance project called englishgrows.com, and I think is a great tool for coding.
  - **Chrome Dev Tools** - To inspect the elements, and be able to spot what element was having an unexpected behaviour, and correct it more efficiently. Also have used **_Lighthouse_** reports to check and improve core web vitals, including accessibility issues.
  - [Favicon](https://favicon.io/) - To create the logo, and the icon on the title included in each page of this site
  - [Font Awesome](https://fontawesome.com/) - For the icons used
  - [Google Fonts](https://fonts.google.com/) - To select fonts and implement them in the site
  - [Github](https://github.com) - To deploy the site online, and Github desktop app to link _Visual Studio Code_ to Github.com
  - [Coolors](https://coolors.co) - To insert colors selected previously directly through visual studio code, but used this tool to display the palette beautifully, and insert it in this readme file.
  - [Amiresponsive](https://ui.dev/amiresponsive) - To display the site in all types of devices simultaneously.
  - **Paint** - For resizing imgs and improve the site performance on load
  - [Convertio](https://convertio.co/) - To convert image files from PNG or JPG to lighter AVIF, and improve the site performance on load
  - [Balsamiq](https://balsamiq.com/wireframes/desktop/#) - To created wireframes reflecting each page's structure, on all devices.
  - [EqualWeb Accessibility Checker](https://chrome.google.com/webstore/detail/equalweb-accessibility-ch/imemciokfejbnonkkinhcdfigdilcllg/related?utm_source=chrome-ntp-icon) - Google Chrome extension to check general errors and contract errors for optimal accessibility.
  - **Chrome Vox Reader** - This Chrome extension has been downloaded and used for accessibility testing, and to be sure all users are able to use the site, regardless of their current situations.
  - [Browser Stack](https://browserstack.com) - Used for compatibility ans responsiveness testing purposes.
  - [Stat Counter](https://gs.statcounter.com/browser-market-share/all/europe) - Used for a meaningful selection of targets for _compatibility and responsive_ testing purposes. Checked which _browsers, browser versions, devices, viewports, and OS_ are most widely used worldwide.
  - [Yesviz](https://yesviz.com/) - To check real device viewport when testing compatitivity & responsiveness.
  - [ScreenSiz](https://screensiz.es/) - To find devices to test depending on their viewport.
  - [Blisk](https://blisk.io/) - Used for _compatibility ans responsiveness testing_ purposes.
  - [XRecorder](https://play.google.com/store/apps/details?id=videoeditor.videorecorder.screenrecorder&hl=es_419&gl=US&pli=1) - Downloaded the mobile app on my personal mobile device, to record navigation throughout the site, for _compatibility and responsive testing_ purposes.

# DEPLOYMENT

I'm the owner of the Google Domain _englishgrows.com_, which is linked to this Github account EdnaTMunill, with nickname [Ethra8](https://github.com/Ethra8).

## DEPLOY TO GITHUB PAGES

### PRODUCTION

1. Click **Settings** tab:
2. In the left-hand menu, click on the **Pages** link:
3. In the **Build and Deployment** section, select **Branch**. Click on the dropdown menu and select **main**:
4. Click **Save**:
5. Wait about 3 minutes, and refresh the page. Then the link to the deployed site will show up like this:

## FORKING THE REPOSITORY

In case you wish to use the code, you can easily fork it. This will make a copy of this current repository at the precise time of the fork, and store it in your own Github account, in case you want to have it handy to review it or to make any changes you wish. This, without affecting the original repository. To do so:

1. Copy the link to this repository (browser url)
2. Sign in to your Github account
3. Above the repository options, click on the **Fork** button, on the top-right, just below Github navigation bar
4. A copy of the repository will be directly included in your own account.

## CLONING THE REPOSITORY

You can download the code to your computer, making a copy of the code at the exact time of the clone, and make a _pull request_ in case you want to upgrade it in the future, and contribute to the project. To do so:

1. Copy the link to this repository (browser url)
2. Sign in to your Github account
3. Click on the green button "Code", and the below options will appear:

- **Local**
  1.  HTTPS: Copy link to use Git or checkout with SVN using the web URL.
  2.  GitHUb CLI: Copy the command to insert in your CLI
  3.  Open with GitHub Desktop app
  4.  Download as a ZIP
- **Codespaces**
  1.  You will be requested to be signed in to Codespaces, and once you are, the repository will be cloned on your Codespaces account.

## CREDITS

### IMAGERY

- [Background Image](https://pixabay.com/photos/milky-way-stars-night-sky-2695569/) by <a href="https://pixabay.com/users/felixmittermeier-4397258/" target=_blank >FelixMittermeier</a> from <a href="https://pixabay.com">Pixabay</a>.

### CONTENT

To include accurate historic answers to the questions in this quiz, the following sites have been consulted:

- **QUESTION 1**
  - [History of the Universal Declaration of Human Rights](https://www.un.org/en/about-us/udhr/history-of-the-declaration#:~:text=The%20Universal%20Declaration%20of%20Human%20Rights%2C%20which%20was%20adopted%20by%20the%20UN%20General%20Assembly%20on%2010%20December%201948%2C%20was%20the%20result%20of%20the%20experience%20of%20the%20Second%20World%20War.) at the [United Nations](https://www.un.org/) site.
- **QUESTION 2**
  - [Magna Carta, England 1215](https://www.britannica.com/topic/Magna-Carta) at [Encyclopaedia Britannica](https://www.britannica.com/) site.
- **QUESTION 3**
  - [Jacques de Molay, Grand Master of Knights Templar](https://www.britannica.com/topic/Templars) at [Encyclopaedia Britannica](https://www.britannica.com/) site.
- **QUESTION 4**
  - [Hypatia of Alexandria](https://www.britannica.com/biography/Hypatia) at [Encyclopaedia Britannica](https://www.britannica.com/) site.
- **QUESTION 5**
  - [UN current member States](https://www.un.org/en/about-us/membership-of-principal-un-organs#:~:text=The%20General%20Assembly%E2%80%99s%20membership%20is%20made%20up%20of%20all%20of%20the%20UN%E2%80%99s%20193%20Member%20States) at the [United Nations](https://www.un.org/) site.
- **QUESTION 6**
  - [11 Egyptian gods and goddesses](https://www.britannica.com/list/11-egyptian-gods-and-goddesses) at [Encyclopaedia Britannica](https://www.britannica.com/) site.
- **QUESTION 7**
  - [Women suffrage](https://nzhistory.govt.nz/politics/womens-suffrage/world-suffrage-timeline#:~:text=First%20in%20the%20world,vote%20to%20all%20adult%20women.) at [New Zealand government](https://nzhistory.govt.nz/politics/womens-suffrage/) site.
- **QUESTION 8**
  - [King Juan Carlos](https://en.wikipedia.org/wiki/Juan_Carlos_I#:~:text=He%20swore%20using%20the%20following%20formula%3A%20%22I%20swear%20to%20God%20and%20the%20Gospels%20to%20comply%20and%20enforce%20compliance%20to%20the%20Fundamental%20Laws%20of%20the%20Realm%20and%20to%20remain%20loyal%20to%20the%20Principles%20of%20the%20National%20Movement%22) oath to the fascist national movement, referrenced in the Wikipedia to Bernecker, Walter L. (1996), ['The Political Role of King Juan Carlos During the Transition'](https://dialnet.unirioja.es/descarga/articulo/27390.pdf) (in Spanish), p.120.
- **QUESTION 9**
  - [The Republic of Ireland's first government](https://www.historyireland.com/an-independence-day-for-ireland/#:~:text=on%20the%20day%20the%20Provisional%20Government%20was%20installed%2C%2016%20January%201922) at [History Ireland](https://www.historyireland.com) site.
- **QUESTION 10**
  - [Ration segregation in the US](https://www.senate.gov/artandhistory/history/civil_rights/background.htm#:~:text=Passage%20of%20the%20Civil%20Rights,in%20public%20and%20private%20facilities.) at the [United States Senate](https://www.senate.gov) official site.

## ACKNOWLEDGEMENTS

- [How to get value of selected radio button using JS](https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/) at [Geeksforgeeks](www.geeksforgeeks.org) site.
- [W3Schools](https://www.w3schools.com/): Their documentation has been very useful when wanting to implement new features or animations.
- [Mozilla Web Docs](https://developer.mozilla.org/en-US/): Their documentation has been checked to clear some doubts along the way.
