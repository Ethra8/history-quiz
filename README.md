# HISTORY QUIZ

## PROJECT OVERVIEW

- The aim of this site is to test the user's knowledge on general history facts from around the globe.
- This site can be of great value to history teachers to check their students' knowledge in an entertaining way.
- This site can also be of great value to teachers of English as a second language, as a tool to offer students some alternative and entertaining language practice. 
- This site is useful to anyone interested in history, who might also want to increase knowledge on global history facts.
- This site might also prove of great use to secondary students wanting to reinforce their knowledge on the history subject.

![image](https://github.com/Ethra8/history-quiz/assets/80659091/05a021fa-ac26-48bf-bd10-b1dc61f12de2)


**NOTE**: _Responsive images of the site automatically generated through [ui.dev/amiresponsive](https://ui.dev/amiresponsive). The tool is interactive, and you can view and scroll through all pages in all the types of devices simultaneously [here](https://ui.dev/amiresponsive?url=https://englishgrows.com/history-quiz/index.html). I customized defect background-color attribute from amiresponsive site from black to whitesmoke, as my website is mostly in dark tones. I did it by changing the elements of the page, more precisely **class="bg-brand-coal"**._

## LIVE SITE

The deployed site can be viewed [here](https://englishgrows.com/history-quiz/).

## REPOSITORY

Github repository can be viewed [here](https://github.com/Ethra8/history-quiz/).

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
  - [UI - Fixed Navigation Bar](#ui---fixed-navigation-bar)
  - [UI - Home Page](#ui---home-page)
  - [UI - Quiz](#ui---quiz)
  - [UI - Footer](#ui---footer)
  - [UI - Contact Page](#ui---contact-page)

- [DESIGN CHOICES](#design-choices)

  - [Colors](#colors)

    - [Colors Rationale of Use](#colors-rationale-of-use)

  - [Typography](#typography)

    - [Typography Rationale of Use](#typography-rationale-of-use)

  - [Imagery](#imagery)

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

    - [HTML5](#html5)
    - [CSS3](#css3)
    - [JS ES6](#js-es6)

  - [Compatibility and Responsive Testing](#compatibility-and-responsive-testing)

    - [Preselection of Testing Targets](#preselection-of-testing-targets)
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
    - [Accessibility Audits - WCAG 2.1 Compliance](#accessibility-audits---wcag-2.1-compliance)
      - [Contrast Validation Reports](#contrast-validation-reports)
      - [General WCAG 2.1 Reports](#general-wcag-2.1-reports)
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
  - [Media](#media)
  - [Content](#content)

- [Acknowledgements](#acknowledgements)


# UX
You will find in the points stated below a brief study aiming at providing the user with the best possible experience when visiting this site.
## TARGET AUDIENCE

## PROJECT GOALS
## USER STORIES
1. **As a first time visitor**
2. **As a returning visitor**

## USER PROFILES
1. Malia is a history teacher at secondary level, and continuously researches for new technologies and websites to test her students' knowledge.
2. Josh is an English teacher, and continuously researches for new technologies and websites for her students to practice comprehension skills on any general topic, including history.
3. Sarah is interested in history, and wants to learn more.
4. Brian enjoys any kind of quiz which will test his knowledge on general topics, such as general history facts. He's keen to employ some of his leisure time researching new cultural entertainment to do at home, or on the train on his way to work.
5. Kate and Paul are parents who enjoy doing cultural activities at home on bad-weather weekends with their teen children, such as playing Trivia, or... taking online quizzes.

# UI
## UI - FIXED NAVIGATION BAR
**The fixed navigation bar appears once the user clicks on the cta button on the landing page "Start Quiz".**  
![image](https://github.com/Ethra8/history-quiz/assets/80659091/6bc53151-a636-4a1f-8162-85d702bc2429)

- The user is able to interact with the responsive navigation bar, fixed to the top while completing the quiz, on the contact page, and the 404 error page. So, even when scrolling down, the user can change the settings at any time. The navigation bar includes the following:
    * **LOGO** allows user to go to landing page when clicked.
    * **SETTINGS** include:
      + **Switch mode** from default ***dark*** to ***light*** anytime throughout the quiz.
      + **Audio icons** allowing the user to play or pause the audio by clicking to the correspondent icons. The audio is a "tension orchestra chords" (for more details refer to the media creadits section below).
    * **'RESTART QUIZ' button** allowing the user to restart the quiz, with a new random order of the questions, displaying automatically the new "question 1", and sets the counters to zero.

## UI - LANDING PAGE
- On the landing page, there is only the header with the name of the page "History Facts Quiz", and a call-to-action button on the middle of the page to "Start Quiz". Once the user clicks it, the quiz automatically begins.
  ![image](https://github.com/Ethra8/history-quiz/assets/80659091/845b1893-7ac6-40dc-b035-6595e5126e2d)


## UI - QUIZ
1. Once the user clicks on "Start Quiz" cta button on the landing page, the 1st random question is displayed, with three optional answers set in a list, where a button can be checked for each (a.k.a radio buttons).
  * **Dark mode**
    ![image](https://github.com/Ethra8/history-quiz/assets/80659091/62408d49-91b0-4d1a-9097-0a719da3522a)

  * **Light mode**  
    ![image](https://github.com/Ethra8/history-quiz/assets/80659091/64e06ebc-d187-4632-a866-a13ddc327cf2)

2. At the bottom of the question & options, are the points' counters. There is a counter for "correct answers" (dosplaying the points in green) and another for "incorrect answers" (displaying the points in red).
3. Once the user selects an option whithin the possible answers, and clicks on the "Check Answer" button, a small customized pop-up (a.k.a modal) appears, darkening the rest of the page to highlight it, stating whether the answer is correct, or incorrect, with a button at the bottom for "Next Question". The modal has th same design in both modes:
    * **Correct Answer**: The message in the pop-up reads "That's right!... You've got it!"
        + **Dark mode**  
          ![image](https://github.com/Ethra8/history-quiz/assets/80659091/cc41cd70-7cf6-457e-bfe0-ea4db1179af9)

        + **Light mode**
          ![image](https://github.com/Ethra8/history-quiz/assets/80659091/736af16d-f0f5-43ba-af00-8ed946ed57f8)


    * **Incorrect Answer** : The messase in the pop-up reads "Awww ... You got it wrong this time. The correct answer is: 'correct answer in full text'."
          ![image](https://github.com/Ethra8/history-quiz/assets/80659091/313abf65-2272-4f9b-81e6-3ee82e7e934b)

4. As the pop-up appears, the counter updates, counting a point to the "correct ansswer" or "incorrect answer" counter, accordingly.
5. Once the user clicks on the "Next Question" button at the bottom of the pop-up, the next random question is displayed.
6. Once the user answers the last question, the button's text on the pop-up changes from "Next Question" to "Final Results".
   ![image](https://github.com/Ethra8/history-quiz/assets/80659091/12f3311b-3a8f-4e1d-9b45-22ab88a9c36e)

7. Once the user click on the "Final Results" button, a container with the same design as the questions appears, to give the user a seamless experience depending on the mode selected (dark or light) with a conditional text in it, and the total amount of correct answers out of the total of ten questions:
     * If the user's final result is of 3 or less correct answers, the final results title reads "You could do much better ..." with the user's final result stated below as "Your final score is x/10".
     * If the user's final result is of 4 or 5 correct answers, the final results title reads "You could do better ..." with the user's final result stated below as "Your final score is x/10".
       + **Light mode exmple**
         ![image](https://github.com/Ethra8/history-quiz/assets/80659091/90998abb-cf88-4ba9-a6d1-de16b93caaf8)

     * If the user's final result is of between 6 and 8 (included) correct answers, the final results title reads "Well done!" with the user's final result stated below as "Your final score is x/10".
       + **Dark mode example**
         ![image](https://github.com/Ethra8/history-quiz/assets/80659091/40f61915-3938-4c06-b131-2432a7ac8b08)

     * If the user's final result is of 9 or 10 correct answers, the final results title reads "Wow! Do you have a PhD in history?" with the user's final result stated below as "Your final score is x/10".

## UI - FOOTER
- The footer is set to be fixed at the bottom of each page, and allows the user to interact at anytime, even throught the quiz, by clicking on the media icons in roder to visit the correspondent pages, and eventually follow the site on these platforms to be aware of any new feature implemented.
  ![image](https://github.com/Ethra8/history-quiz/assets/80659091/5edf3f3a-4114-4ba1-9205-f267632145f0)

  ![image](https://github.com/Ethra8/history-quiz/assets/80659091/0c26fefe-afc1-420d-9e24-64848618f50e)


## UI - CONTACT PAGE
- The contact page gices two options by which the user is able to communicate with the admin:
1. Through a simple form
2. Through the admin's Whatsapp chat, using the Whatsapp API embedded url linked to the Whatsapp icon displayed.

# DESIGN CHOICES

## COLORS
- **Oxford Blue** (**_001c3b_**)
  Used for all buttons' font, and background of the header, the footer and the navbar, all set with a slight transparency.
    * ***Dark Mode*** : Used for the questions' container, with a slight transparency, so the background with the starred sky with the milkyway is still visible, but does not affect contrast.
    * ***Light Mode*** : Used for the question's container borders, and each question title with correspondent number.
- **Aquamarine** (**_#7fffd4_**)
  Used as background for all buttons, for the h1 on the header, for the logo, for the favicon.
    * ***Dark Mode*** : Used for the title of each question and correspondent number, the border of the checked radio buttons, the border of the questions' container, and for the final results message's heading.
    * ***Light Mode*** : Is the main color of the background image chosen, of the tropical sea. Aiming for a seamless design between modes. 
- **Palatinate** (**_#550055_**)
  Used for the text shadow of the h1 on the header and the logo (on the navbar), as well as the text shadow of the favicon.
    * ***Dark Mode*** : Used for the text-shadow of the final results message's heading.
    * ***Light Mode*** : Used for the radio buttons' border, and background when these are checked.
- **Whitesmoke** (**_#f5f5f5_**)
  Used for the "Quiz" word from the header and the navbar, and as the background color of the buttons to start and restart quiz. Also used for the background of each question's check message (background of modal triggered when "Check Answer" button is clicked).
  * ***Dark Mode*** : Used for the questions' text and options, as well as for the results paragraph of the  final results message.
  * ***Light Mode*** : Used for the background of the questions' container, and the background of the final results message.
- **Onyx** ***(#393F44)***
Used for font of each question's check message (of modal triggered when "Check Answer" button is clicked).
  * ***Light Mode*** : Used for the font color of the questions, and options.

![History Quiz Color Palette](https://github.com/Ethra8/history-quiz/assets/80659091/f00ef81a-8952-42d9-9d0b-1cd8c2920a4b)



### COLORS RATIONALE OF USE
The dark mode was coded first of all, so all colors selected at firstm aimed to match the Milky Way sky background, such as *Oxford blue*, or bring contrast, such as *aquamarine*, or *whitesmoke*. *Palatinate* purple was combined with aquamarine for main titles and logo, as a nice text-shadow for the aquamarine title and logo.  
Once the light mode was implemented. *onyx* was selected to bring clear contrast on *whitesmoke* background containers used for the questions.

## TYPOGRAPHY

All fonts have been selected from **Gloogle Fonts**.

- [Lobster](https://fonts.google.com/specimen/Lobster?query=lobster), with a fall-back to _sans-serif_ - Has been used for the h1 in the header, that is, the title of the site, for the logo on the top-right of the navigtion bar, for the "Q" of the favicon (initial from quizz), for the text of the buttons, and the main final message, once the quiz is completed.
- [Bad Script](https://fonts.google.com/specimen/Bad+Script?query=bad+script), with a fall-back to _cursive_ - Has been used for the word "quiz" at the header and navbar, for the title of each question displayed, for the text and numbers of incorrect and correct answers displayed, and for the final results.
- [Roboto condensed](https://fonts.google.com/specimen/Roboto+Condensed?query=roboto) - Has been used for each question's text and options.

### TYPOGRAPHY RATIONALE OF USE

To counteract the implied seriousness of a quiz, and make it more appealing to younger users, as well as to adults, fonts like _\*\*Lobster_ and _Bad Script_ have been selected. For the questions' text itself, _Roboto_ has been selected to make the text easily readable.

## IMAGERY

### LANDING PAGE, 404 ERROR PAGE AND DARK MODE
The image used is of the Milky Way, set as the site's background of the ***landing page***, the ***404 error page***, and the ***dark mode*** - (refer to the _credits_ section for more details):

![image](https://github.com/Ethra8/history-quiz/assets/80659091/35cdcf0f-bc05-4935-b1f6-325e7ee8806f)


### LIGHT MODE
The following image has been used for the light mode option, to contrast with the Milky Way image of the dark mode. It has primarily been chosen for its *aquamarine* color shade, aiming at a seamless design for the site, and to match the site's logo, buttons, and features of the navigation bar - (refer to the _credits_ section for more details):

![image](https://github.com/Ethra8/history-quiz/assets/80659091/44dddcc4-b50f-4c2c-8ae2-77d2dad2fd6c)


# FEATURES

## RESPONSIVENESS
This site is fully responsive on all device sizes. Please refer to [Test Recordings and Results](#test-recordings-and-results).

## NAVIGATION BAR FEATURES
Is fully responsive, and is fixed at the top, to allow the user to access its fucntionalities even when scrolling down. Its background has a slight transparency, so that it visually not so intrusive. Its functionalities are the following:
- **LOGO** - By clicking on it, the user gets to the landing page, before the questsions are displayed.
- **SETTINGS** - On smaller devices these are placed underneath the logo. The site's settings are the following:
    * **MODE-SWITCH ICON** - By clkicking on the gear icon, the user can switch from the default dark mode to the light mode, and viceversa, anytime during the quiz.
    * **MUSIC ICONS**  
        + **PLAY ICON** - By clicking on the ***play*** icon, the user triggers the audio mp3 file, which is coded to loop itself seamlessly.
        + **PAUSE ICON** - By clicking on the ***pause*** icon, the user pauses the audio file, which can be continued by clickg again on the play icon.
- **RESTART-QUIZ BUTTON** - By clicking on the button, the user can restart the quiz at anytime. The 1st question is automatically displayed, and the counters are set to 0.

## DARK AND LIGHT MODES 
By clicking on the gear icon placed on the navigation bar, the user can toggle between the default dark mode, and the light mode, all through the quiz:
-

![image](https://github.com/Ethra8/history-quiz/assets/80659091/455f2fb6-4126-44f0-92e9-38f877fa6dbe)



# TESTING
The following code validators have been undertaken to test all the code of this this
-
## VALIDATION TESTING

### HTML5
- No errors nor warnings were returned when passing the HTML Validation Test.
- Used [HTML Validator](https://validator.w3.org/) to validate all this website pages, as follows:

![image](https://github.com/Ethra8/history-quiz/assets/80659091/0732ee40-d6fe-40c1-b72f-55f3175d076e)

### CSS3
- No errors nor warnings were returned when passing the CSS Validation Test.
- Used CSS Validator at [Jigsaw.w3.org](https://jigsaw.w3.org/css-validator/validator)

![image](https://github.com/Ethra8/history-quiz/assets/80659091/a51633de-0383-482d-a6ce-73206a501ab2)

### JS ES6
- No errors nor warnings were returned when passing the JS Validation Test.
- Used JS (ES6) Validator at [JShint](https://jshint.com/)

![image](https://github.com/Ethra8/history-quiz/assets/80659091/2769f08d-bcbe-4c70-9e52-739bf3490909)


## COMPATIBILITY and RESPONSIVE TESTING

### Pre-selection of Testing Targets
- To meaningful testing of site, [Stat Counter](https://gs.statcounter.com) has been used, in order to get an insight of the following:
    
    * **BROWSER MARKET SHARE** - Most commonly used browsers worldwide:

    ![image](https://github.com/Ethra8/history_beyond_myth/assets/80659091/77d7356e-35e0-4fbf-9d28-2e75215bb96b)

     * **BROWSER VERSION MARKET SHARE** - Most commonly used browser versions worldwide:

    ![image](https://github.com/Ethra8/history_beyond_myth/assets/80659091/2cf8b70e-99ba-46f0-bd41-a88fc75d0649)
    
    * **OS MARKET SHARE** - Most commonly used operation systems worldwide:

    ![image](https://github.com/Ethra8/history_beyond_myth/assets/80659091/9373a798-32b1-4e80-95e6-1406bcda0a37)

    * **MOBILE vs DESKTOP vs TABLET MARKET SHARE** - Most commonly used devices worldwide:

    ![image](https://github.com/Ethra8/history_beyond_myth/assets/80659091/57cabf42-8cee-4263-a6c5-ac1f9ac581f5)

    * **SCREEN RESOLUTION STATS** - Most common screen resolution (in pixels) worldwide:

    ![image](https://github.com/Ethra8/history_beyond_myth/assets/80659091/3b4fd7bf-c127-4323-a8d0-efb71b547417)

   
### TABLE for Testing Targets
Following all the above information, compatibility and responsive testing has been done on the most common *browser versions*, *OS*, and *screen resolution* combinations, by using [Browser Stack](https://chrome.google.com/webstore/detail/browserstack/nkihdmlheodkdfojglpcjjmioefjahjb) Chrome extension, which has been downloaded, the *Chrome Dev tool's emulator*, and real devices owned by me. 

Please find the correspondent **compatibility and responsive testing** reflected in the following table:

| TEST no.| TOOL               | DEVICE               | BROWSER            | OS              | VIEWPORT width x height (px) |
|---------|--------------------|----------------------|--------------------|-----------------|------------------------------|
| 1       | Chrome Dev emulator| Samsung Galaxy S20   | Chrome 117         |Windows 10       |360 x 800                     | 
| 3       | BrowserStack       | Samsung Galaxy S22   | Edge               |Android 12.0     |360 x 780                     |
| 4       | BrowserStack       | iPhone 12 Mini       | Safari             | iOS 16.0        |360 x 780                     |
| 5       | Blisk              | iPhone SE 2022       | Chrome             | iOS             |375 x 667                     |
| 6       | REAL mobile device | Samsung Galaxy A22 5G| Chrome             | Android 13.0    |384 x 857                     |
| 7       | BrowserStack       | iPhone 13            | Safari 17.0        | iOS             |390 x 844                     |
| 8       | BrowserStack       | iPhone 14 Pro        | Safari 16.3        | iOS             |393 x 852                     |
| 9       | REAL Laptop Device | PC Notebook HP -15-bs013ns| Chrome 117    |Windows 10 -64bit|1366 x 768                    |
| 10      | Blisk              | MacBook Pro          | Chrome 117         | macOS           |1440 x 900                    |
| 11      | BrowserStack       | Asus ZenBook UX305   | Edge               |Windows 11       |1920 x 1080                   |
| 12      | BrowserStack       | Asus ZenBook UX305   | Firefox 117        |Windows 11       |1920 x 1080                   |
| 13      | BrowserStack       | MacBook              | Safari 16.5        | OS X Ventura    |1920 x 1080                   |

### Test Recordings and Results
#### TEST no. 1
#### TEST no. 2


https://github.com/Ethra8/history-quiz/assets/80659091/7e1b5607-8e57-4b42-978f-839fef9e7d70



## MANUAL TESTING
### QUIZ
The quiz functionality has been manually tested and works seamlessly in both modes (dark and light), even allowing the user to change mode settings at each question, if desired. Please refer to the following table, and video:

## DEFECT TRACKING
### GITHUB ISSUES
- Nav anchor link to contact page is underlined.
- Navbar content does not show in width:768px (1px defect).
## DEFECTS OF NOTE
No defects of note have been detencted on this site.
## OUTSTANDING DEFECTS
No outstanding defects have been detected in this site.
## CORE WEB VITALS

## LIGHTHOUSE REPORTS
### INDEX PAGE
#### DESKTOP
![image](https://github.com/Ethra8/history-quiz/assets/80659091/38367332-df80-497f-8eb9-544e23b83907)

#### MOBILE
![image](https://github.com/Ethra8/history-quiz/assets/80659091/f247482d-b61c-4da8-835a-84d1b15fca90)

### 404 ERROR PAGE
#### DESKTOP
![image](https://github.com/Ethra8/history-quiz/assets/80659091/5c82dfb3-6ac9-4319-99e8-936d0b87b9f7)

#### MOBILE
![image](https://github.com/Ethra8/history-quiz/assets/80659091/3a5da35c-759f-4dea-8221-1912ee4e4421)


## ACCESSIBILITY AUDITS - WCAG 2.1 COMPLIANCE
This site has been tested to be ADA compliant, and has achieved **WCAG 2.1 validation**. Find below the audits from ***Juicy Studio*** website and ***EqualWeb Accessibility Checker*** Chrome extension, which have all achieved positive results. 

### CONTRAST VALIDATION REPORTS
All tests have passed at level AAA. The following reports have been generated by [Juicy Studio](https://juicystudio.com/services/luminositycontrastratio.php)
-
- **LUMINOSITY AND CONTRAST RATIO of 9.79:1** of background in ***whitesmoke (#F5F5F5)*** and font in ***onyx (393F44)*** - As in all questions' containers in the light mode, and modals triggered once user clicks on "check answer" button (both in dark and light mode).

- **DARK MODE**  
    * **LUMINOSITY AND CONTRAST RATIO of 13.96:1**  of background in ***Oxford Blue (#001C3B)*** and font in ***aquamarine (#7FFFD4)*** - used for the h1 in header, the favicon, the Question number titles, and buttons (inverted colours).

    ![image](https://github.com/Ethra8/history-quiz/assets/80659091/02b06bea-b33e-4fab-b9b7-2d847c7e217e)

    ![image](https://github.com/Ethra8/history-quiz/assets/80659091/80810776-bab2-439b-b073-4d6e643dc7a6)


    * **LUMINOSITY AND CONTRAST RATIO of 15.67:1** of background in ***Oxford Blue (#001C3B)*** and font in ***whitesmoke (#F5F5F5)*** - used for the word "Quiz" in header, for the questions' paragraph and options (radio labels), and for the final results.  

    ![image](https://github.com/Ethra8/history-quiz/assets/80659091/8ed6f3e8-602a-4ed5-b0ed-d14b6758372c)


- **LIGHT MODE**
    * **LUMINOSITY AND CONTRAST RATIO of 15.67:1** of background in ***whitesmoke (#F5F5F5)*** and font in ***Oxford Blue (#001C3B)*** - as for each question heading and correspondent number.  

   ![image](https://github.com/Ethra8/history-quiz/assets/80659091/7d6b5ba7-6c83-4d30-93aa-c0633b79135f)

### GENERAL WCAG 2.1 REPORT
This website is compliant with all international standards, as proved after ***EqualWeb Accessibility Checker*** scan of the site.
![image](https://github.com/Ethra8/history-quiz/assets/80659091/eb1d7154-5892-4c90-a091-fe8121ff5d4e)



### KEYBOARD NAVIGATION

### CHROME VOX READER

# TECHNOLOGIES USED

## LANGUAGES

- HTML5
- CSS3
- JS6

## FRAMEWORKS, LIBRARIES AND PROGRAMS USED

- The following have been used:
  - [Visual Studio Code](https://code.visualstudio.com/) - To begin coding the site from scratch. I already had VScode installed previously, due to a previous personal freelance project called englishgrows.com, and I think is a great tool for coding.
  - **Chrome Dev Tools** - To inspect the elements, and be able to spot what element was having an unexpected behaviour, and correct it more efficiently. Also have used **_Lighthouse_** reports to check and improve core web vitals, including accessibility issues.
  - **Paint** - To resize background images.
  - [Remove.bg](https://www.remove.bg/) to remove background from logo image.
  - [Favicon](https://favicon.io/) - To create the logo, and the icon on the title included in each page of this site
  - [Font Awesome](https://fontawesome.com/) - For the icons used
  - [Google Fonts](https://fonts.google.com/) - To select fonts and implement them in the site
  - [Github](https://github.com) - To deploy the site online, and Github desktop app to link _Visual Studio Code_ to Github.com
  - [Coolors](https://coolors.co) - To insert colors selected previously directly through visual studio code, but used this tool to display the palette beautifully, and insert it in this readme file.
  - [Amiresponsive](https://ui.dev/amiresponsive) - To display the site in all types of devices simultaneously.
  - [Balsamiq](https://balsamiq.com/wireframes/desktop/#) - To created wireframes reflecting each page's structure, on all devices.
  - [EqualWeb Accessibility Checker](https://chrome.google.com/webstore/detail/equalweb-accessibility-ch/imemciokfejbnonkkinhcdfigdilcllg/related?utm_source=chrome-ntp-icon) - Google Chrome extension to check general errors and contract errors for optimal accessibility.
  - **Chrome Vox Reader** - This Chrome extension has been downloaded and used for accessibility testing, and to be sure all users are able to use the site, regardless of their current situations.
  - [Browser Stack](https://browserstack.com) - Used for compatibility and responsiveness testing purposes.
  - [Stat Counter](https://gs.statcounter.com/browser-market-share/all/europe) - Used for a meaningful selection of targets for _compatibility and responsive_ testing purposes. Checked which _browsers, browser versions, devices, viewports, and OS_ are most widely used worldwide.
  - [Yesviz](https://yesviz.com/) - To check real device viewport when testing compatitivity & responsiveness.
  - [ScreenSiz](https://screensiz.es/) - To find devices to test depending on their viewport.
  - [Blisk](https://blisk.io/) - Used for _compatibility and responsiveness testing_ purposes.
  - [XRecorder](https://play.google.com/store/apps/details?id=videoeditor.videorecorder.screenrecorder&hl=es_419&gl=US&pli=1) - Downloaded the mobile app on my personal mobile device, to record navigation throughout the site, for _compatibility and responsive testing_ purposes.
  - [Juicy Studio](https://juicystudio.com/services/luminositycontrastratio.php) tool to generate accessibility reports related to contrast, following the **WCAG 2.0**'s luminosity contrast algorithm.

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

# CREDITS & ATTRIBUTIONS

## IMAGERY

- [Milky Way](https://pixabay.com/photos/milky-way-stars-night-sky-2695569/) by <a href="https://pixabay.com/users/felixmittermeier-4397258/" target=_blank >FelixMittermeier</a> from <a href="https://pixabay.com">Pixabay</a>.
- [Tropical sea](https://www.freepik.com/free-photo/lagoon-white-ocean-summer-sand_1044629.htm) by [mrsiraphol](https://www.freepik.com/author/mrsiraphol) at [Freepik](www.freepik.com).

## MEDIA

The following media has been used, and is hereby attributed as follows:
- **AUDIO**
  [Tension orchestra chords](https://freesound.org/people/frankum/sounds/320498/) has been created by [Frankum](https://freesound.org/people/frankum/) at [Freesound.org](https://freesound.org/)
  

## CONTENT

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
  - [Ratial segregation in the US](https://www.senate.gov/artandhistory/history/civil_rights/background.htm#:~:text=Passage%20of%20the%20Civil%20Rights,in%20public%20and%20private%20facilities.) at the [United States Senate](https://www.senate.gov) official site.

# ACKNOWLEDGEMENTS
- [Responsive navigation bar using only HTML and CSS](https://codepen.io/maliahavlicek/pen/LYeBwNY) by Malia Havlicek.
- [How to get value of selected radio button using JS](https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/) at [Geeksforgeeks](www.geeksforgeeks.org) site.
- [How to Toggle Switch in CSS](https://www.w3schools.com/howto/howto_css_switch.asp) at [W3Schools](https://www.w3schools.com/).
- [Playing sound on click event with pure JS](https://stackoverflow.com/questions/51572489/playing-sound-on-click-event-with-pure-javascript) at [Stackoverflow](https://stackoverflow.com).
- [Loop audio with JS](https://stackoverflow.com/questions/3273552/html5-audio-looping) at [Stackoverflow](https://stackoverflow.com).
- [Howto CSS modals](https://www.w3schools.com/howto/howto_css_modals.asp) at [w3schools](https://www.w3schools.com/).
- [W3Schools](https://www.w3schools.com/): Their documentation has been very useful when wanting to implement new features or animations.
- [Mozilla Web Docs](https://developer.mozilla.org/en-US/): Their documentation has been checked to clear some doubts along the way.

## THANK YOU
To my mentor Malia for always challenging me, and pushing me forward in my learning path.
