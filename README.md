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
  - [Code](#code)
  - [Content](#content)
  - [Acknowledgements](#acknowledgements)

## CREDITS

### IMAGERY

- [Background Image](https://pixabay.com/photos/milky-way-stars-night-sky-2695569/) by <a href="https://pixabay.com/users/felixmittermeier-4397258/" target=_blank >FelixMittermeier</a> from <a href="https://pixabay.com">Pixabay</a>.

### CODE

- [How to get value of selected radio button using JS](https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/).

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
