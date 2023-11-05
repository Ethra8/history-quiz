//array of questions, where correctAnswer has value of the index of the correct answer in the array of options.
let questions = [
    {
        question: "In what year was the Universal Declaration of Human Rights (UDHR) first declared by the United Nations?",
        correctAnswerPosition: 0,
        options: ["1948", "1953", "1967"]
    },
    {
        question: `Which event preceded the <i>Magna Carta</i> (Charter of Liberties) signed by King John in 1215? `,
        correctAnswerPosition: 2,
        options: ["Victory against King Philip of France", "King John's coronation", "A revolt of the Barons"]
    },
    {
        question: "Why was the Knights Templars' last Grand Master Jacques de Molay burnt at the stake in 1314?",
        correctAnswerPosition: 1,
        options: ["Because he was accused of treason by the King of France", "Because the Templars had been accused of heresy", "Because he had insulted the King"]
    },
    {
        question: "Who was Hypatia of Alexandria, murdered in 415 AD by a militia of Christian fanatics?",
        correctAnswerPosition: 2,
        options: ["She was the adulterous wife of the Roman Governor of Alexandria", "She was a famous courtisan from the Roman Empire", "She was a famous mathematician, philosopher and astronomer"]
    }, 
    {
        question: "How many member States does the United Nations currently comprise?",
        correctAnswerPosition: 0,
        options: ["193", "122", "168"]
    }, 
    {
        question: "The Egyptian considered Anubis, depicted as a jackal, or a man with the head of a jackal, as the god of ...",
        correctAnswerPosition: 2,
        options: [`the skys, war and hunting, also considered the embodiment of divine kingship.`, `the underworld, symbolizing death, resurrection, and the cycles of the river Nile which brought fertility.`, `funerary rites, guardian of tombs and considered the god of the dead in the Ancient Kingdom.`],
    }, 
    {
        question: "Which was the first self-governing country that granted the vote to all adult women in 1893?",
        correctAnswerPosition: 1,
        options: ["Finland", "New Zealand", "Canada"]
    }, 
    {
        question: "In 1969, when Spanish king Juan Carlos I, grown up in fascist Spain, was appointed by fascist dictator Franco to be his successor, what did Juan Carlos do?",
        correctAnswerPosition: 1,
        options: ["He solemny declared he would reinstore democracy after decades of a murderous fascist regime, fruit of the 1936's military coup supported by the Nazis to the young Spanish Republic.", "He took an oath before the fascist regime, which was never after officially broken.", "He rejected the fascist dictator's appointment, and made a glorious return when the mass-murderer peacefully died at age 83, in 1975."]
    }, 
    {
        question: "In which year was the first provisional government of the freed self-governing Republic of Ireland installed?",
        correctAnswerPosition: 2,
        options: ["1918", "1931", "1922"]
    }, 
    {
        question: "In which year was the Civil Rights Act passed by the US Senate, which extended 'civil, political, and legal rights and protections to African Americans, including former slaves and their descendants, to end segregation in public and private facilities.'?",
        correctAnswerPosition: 0,
        options: ["1964", "1973", "1951"]
    },
];


/**
 * Creates a new array of questions with a random order from the initial one.
 * @param {*} arrays the initial array of arrays that we want to randomize.
 * @param {*} newArraysOfArray new empty array where randomized questions will be pushed.
 * @returns randomArray (question, correcAnswer position inside array of options, options)
 */
function getRandomArrayWithoutRepeats(arrays, newArraysOfArray) {
    // Create a copy of questions arrays to avoid modifying the original array
    const newQuestionsArray = arrays.slice();
    
    // Remove previously selected arrays from the available arrays
    newArraysOfArray.forEach(previousArray => {
      const index = newQuestionsArray.indexOf(previousArray);
      if (index !== -1) {
        newQuestionsArray.splice(index, 1);
      }
      console.log(index)
    });
    
    // If all arrays have been previously selected, reset the newArraysOfArray to length=0
    if (newQuestionsArray.length === 0) {
        newArraysOfArray.length = 0;
      newQuestionsArray.push(...arrays);
    }
    
    // Get a random index from the available arrays to pick a random question from the available in the oiginal array "questions"
    const randomIndex = Math.floor(Math.random() * newQuestionsArray.length);
    
    // Get the random array and remove it from the available arrays, so that questions are not repeated
    const randomArray = newQuestionsArray.splice(randomIndex, 1)[0];
    
    // Add the array (question + answer + optional answers) to the newArraysOfArray
    newArraysOfArray.push(randomArray);
    
    // Return the random array containing the question, correctAnswer and options
    return randomArray;
  }
  
const newArraysOfArray = []; // Empty array to include all randomized questions from initial "question" array.
// each of the following const run the getRandomArrayWithoutRepeats() and pushes a question to new array "newArrayOfArrays".
const randomArray1 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);  
const randomArray2 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);
const randomArray3 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);
const randomArray4 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);
const randomArray5 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);
const randomArray6 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);
const randomArray7 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);
const randomArray8 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);
const randomArray9 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);
const randomArray10 = getRandomArrayWithoutRepeats(questions, newArraysOfArray);



const body = document.getElementsByTagName('body')[0];
let i = 0; //used to loop through questions in quiz
let questionDiv = document.getElementById('question');
const audio = new Audio("./assets/media/music.mp3");
const gearIcon = document.getElementById("fa-gear");

gearIcon.addEventListener('click', changeMode); // to change from dark/light mode

//this function to loop the audio file was researched in Stack overflow (acknowledged in the README file)
document.getElementById("fa-play").addEventListener('click', function (){
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    audio.loop ? audio.pause() : audio.play();
});

document.getElementById("fa-pause").addEventListener("click", stopAudio);
document.getElementsByTagName('button')[1].addEventListener('click', displayQuestion); //Once user clicks on "Start Quiz" button, function displayQuestion is triggered to show 1st question of quiz
document.getElementById('navRestartBtn').addEventListener('click', startNewQuiz); //user can restart quiz anytime from navbar

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnCheckAnswer");

// When the user clicks anywhere outside of the modal, don't close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "block";
  }
}

/**
 * Once button 'start Quiz' is clicked, 1st question is displayed, and
 * elements in header are reduced in size.
 * Once the button Check Answer is clicked, function displayRadioValue() id triggered
 * to check whether the correct answer was selected through radio btn.
 */
function displayQuestion() {

    let nav = document.getElementsByTagName('nav')[0];
    nav.style.visibility = "visible";
    nav.style.display = "flex";

    document.getElementsByTagName('button')[1].style.display = "none";//hides "Start Quiz" button
    document.getElementsByClassName("startQuiz")[0].style.display = "none";//hides parent div of "Start Quiz" button, to avoid it taking space
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementsByClassName("count")[0].style.visibility = "visible";

    questionDiv.style.display = "block";//displays "question"

    

    questionDiv.innerHTML = `
        <p><span id="questionNum">Question ${i+1}</span><br><br>
         ${newArraysOfArray[i].question}</p>
        <ul>
            <li><input type="radio" name="option" id="${getId(0)}"><label for="${getId(0)}">${newArraysOfArray[i].options[0]}</label></li>
            <li><input type="radio" name="option" id="${getId(1)}"><label for="${getId(1)}">${newArraysOfArray[i].options[1]}</label></li>
            <li><input type="radio" name="option" id="${getId(2)}"><label for="${getId(2)}">${newArraysOfArray[i].options[2]}</label></li>
        </ul>
        <br>
        <div class="btnsDiv">
        <button id="btnCheckAnswer">Check Answer</button>
        </div>
    `;
        let btnCheck = document.getElementById('btnCheckAnswer');
        btnCheck.addEventListener('click', displayRadioValue);
        saveMode();
}


/**
 * Gets value of correctAnswer in questions[i], and
 * compares its value (0-2) to id parameter set in id from input type=radio, which is the same as set to label .options[].
 * If values match, then it must be the correct answer, which exact position in the questions[i].options array is specified hardcoded in questions[i].correctAnswer's integer value.
 */
function getId(id){
    let correctAnswerPosition = newArraysOfArray[i].correctAnswerPosition;

    if(correctAnswerPosition === id){
        return "answer";
    } else{
        return `option-${id}`;
    }
}




/**
 * Checks if correctAnswer radio btn was selected
 * returns boolean, and triggers function addCorrectAnswerToCounter().
 */
function displayRadioValue() {
    let option = document.getElementsByName('option'); //gets radio elements by attribute name=option
    let correctAnswerPosition = newArraysOfArray[i].correctAnswerPosition;//gets hard-coded value of the correct "answer" position inside array of options
    let a = correctAnswerPosition; //simplified 

    let correctAnswer = newArraysOfArray[i].options[a];// the atring of the correct "answer"

    //for loop to get radio button checked by user, and check if it is the correct "asnwer"
    for (let x = 0; x < option.length; x++) {
        if (option[x].checked){
            if(option[x].id === "answer") {
                
                modal.style.display = "block";
                let modalContent = document.getElementsByClassName('modal-content')[0];

                modalContent.innerHTML = `
                <div>
                <h2>That's right! ... You've got it!!</h2>
                <br>
                <button id="btnNextQuestion">Next Question</button>
                </div>
                `;
                
                btnNextQuestion.addEventListener('click', function() {
                    modal.style.display = "none";
               });

               addCorrectAnswerToCounter();
            
            } else {
                // alert(`Awwwwww ... you got it wrong this time.\n\n The correct answer is:\n ${correctAnswer}`);
                modal.style.display = "block";
                let modalContent = document.getElementsByClassName('modal-content')[0];

                modalContent.innerHTML = `
                <div>
                <h2>Awww . . . you got it wrong this time .</h2>
                <br><br>
                <p>The correct answer is:
                <br><strong> ${correctAnswer}</strong></p>
                <button id="btnNextQuestion">Next Question</button>
                </div>
                `;
                
                btnNextQuestion.addEventListener('click', function() {
                    modal.style.display = "none";
               });

                addIncorrectAnswerToCounter();
            }
        }
    }
}


/**
 * Adds 1 point to score, disables btn "Check Answer", avoiding doubling points
 * for the same correct answer. Displays btn "Next Question" with
 * event listener "click" which triggers displayNextQuestion().
 */
function addCorrectAnswerToCounter() {

    let oldScore = parseInt(document.getElementById("correct").innerHTML);
    document.getElementById("correct").innerHTML = ++oldScore;//adds score to counter of correct answers

    let btnCheckAnswer = document.getElementById('btnCheckAnswer');
    btnCheckAnswer.disabled = "true";//disables btn to check answer, avoiding users to hit it a second time and get more points for same correct answer
    btnCheckAnswer.style.cursor = "auto";//changes cursor:pointer which implies an action to the user, to "auto" (default mouse arrow)
    btnCheckAnswer.id = "btnCheckAnswerDisabled";

    // let btnNextQuestion = document.getElementById('btnNextQuestion');
    // btnNextQuestion.style.display = "inline-block";//displays button "Next Question", and activates it
    
    //changes text of "nextQuestion" btn to "Final Results" once last question is reached
    if (i === newArraysOfArray.length - 1){
        btnNextQuestion.innerText = "Final Results";
    }

    btnNextQuestion.addEventListener('click', displayNextQuestion);// Once "Next Question" btn is clicked, function displayNextQuestion() is triggered
}

/**
 * Adds +1 to i, and displays next question if i< total number of Qs, or displays final message when i === to final question.
 */
function displayNextQuestion() {
    //increments i so that next question (or final results div with message) is displayed
    ++i;

    //if question index (i) is still less than total length of array of questions
    if (i < newArraysOfArray.length) {  
        displayQuestion();
    } 
    
    if (i === newArraysOfArray.length) {
        let bgBody = body.getAttribute("class");

        var questionDiv = document.getElementById('question');
        questionDiv.style.display = "block";//displays "question"
        var oldScore = parseInt(document.getElementById("correct").innerHTML);

        //determines whether user is on dark or light mode, to display final message accordingly
        if (bgBody === "bgLightMode"){

            if (oldScore <= 3) {
                questionDiv.innerHTML = `
                <h1 id="hFinalMsgLightMode">You could do much better...</h1>
                <p id="pFinalMsgLightMode">Your final score is ${oldScore} / 10</p>
                `;     
              
            } else if (oldScore <= 5) {
                questionDiv.innerHTML = `
                <h1 id="hFinalMsgLightMode">You could do better...</h1>
                <p id="pFinalMsgLightMode">Your final score is ${oldScore} / 10</p>
                `;          
                    
            } else if (oldScore <= 8) {
                questionDiv.innerHTML = `
                <h1 id="hFinalMsgLightMode">Well done!</h1>
                <p id="pFinalMsgLightMode">Your final score is ${oldScore} / 10</p>
                `;
        
            } else if (oldScore >= 9) {
                questionDiv.innerHTML = `
                <h1 id="hFinalMsgLightMode">Wow! Do you have a PhD in history?</h1>
                <p id="pFinalMsgLightMode">Your final score is ${oldScore} / 10</p>
                `;
            }
    
        } else {
            if (oldScore <= 3) {
                questionDiv.innerHTML = `
                <h1 id="hFinalMsg">You could do much better...</h1>
                <p id="pFinalMsg">Your final score is ${oldScore} / 10</p>
                `;     
              
            } else if (oldScore <= 5) {
                questionDiv.innerHTML = `
                <h1 id="hFinalMsg">You could do better...</h1>
                <p id="pFinalMsg">Your final score is ${oldScore} / 10</p>
                `;          
                    
            } else if (oldScore <= 8) {
                questionDiv.innerHTML = `
                <h1 id="hFinalMsg">Well done!</h1>
                <p id="pFinalMsg">Your final score is ${oldScore} / 10</p>
                `;
        
            } else if (oldScore >= 9) {
                questionDiv.innerHTML = `
                <h1 id="hFinalMsg">Wow! Do you have a PhD in history?</h1>
                <p id="pFinalMsg">Your final score is ${oldScore} / 10</p>
                `;
        
            }
        }
        document.getElementById("fa-gear").style.display = "none"; // hides icon to change mode once final msg w. final results is shown
    }
}


function addIncorrectAnswerToCounter() {

    let oldScore = parseInt(document.getElementById('incorrect').innerText); // also .textContent
    document.getElementById('incorrect').innerText = ++oldScore;// also oldScore + 1 -> putting the ++ incrementse by 1, but after the variable doesn't let user see increment, putting ++ before the variable, shows the increment to the user
    
    let btnNextQuestion = document.getElementById('btnNextQuestion');
    btnNextQuestion.addEventListener('click', displayNextQuestion);// Once "Next Question" btn is clicked, function displayNextQuestion() is triggered
    

    let btnCheckAnswer = document.getElementById('btnCheckAnswer');
    btnCheckAnswer.disabled = "true";//disables btn to check answer, avoiding users to hit it a second time and get more points for same correct answer
    btnCheckAnswer.style.cursor = "auto";//changes cursor:pointer which implies an action to the user, to "auto" (default mouse arrow)
    btnCheckAnswer.id = "btnCheckAnswerDisabled";

    btnNextQuestion.style.display = "inline-block";//displays button "Next Question", and activates it
   
    if(i === 9){
        btnNextQuestion.innerText = "Final Results";
    }
}

/**
 * resets scores to 0 and displays 1st question to restart quiz
 */
function startNewQuiz() {
    i = 0;

    document.getElementById('correct').innerHTML = "0";
    document.getElementById('incorrect').innerHTML = "0";
    gearIcon.style.display = "inline-flex";

    displayQuestion();
}

/**
 * displays nav on 404.html
 */
function displayNav() {
    let nav = document.getElementsByTagName('nav')[0];
    nav.style.visibility = "visible";
    nav.style.display = "flex"; 
}

/**
 * Switches from dark mode to light mode, and viceversa
 */
function changeMode() {
    let y;
    let z;
    let lis = document.getElementsByTagName('li');
    let bgBody = body.getAttribute("class");
    let questionNum = document.getElementById('questionNum');
    let countDiv = document.getElementsByClassName('count')[0];
    let radioBtns = document.getElementsByTagName('input');
    let radioBtn = document.getElementsByTagName('input[type="radio"]')[z];

    if (bgBody === "bgDarkMode"){
            body.setAttribute("class", "bgLightMode");
            questionDiv.style.backgroundColor = "rgb(245,245,245)";
            questionDiv.style.borderColor = "#001c3b";
            countDiv.style.borderColor = "#001c3b";
            questionNum.style.color = "#001c3b";
            questionNum.style.fontWeight = "bold";
            questionDiv.style.color = "rgb(57, 63, 68)";

            for(z = 0; z< radioBtns.length; z++){
                radioBtn = radioBtns[z];
                radioBtn.style.border = "2px solid rgb(85, 0, 85)";
            }

            for(y = 0; y< lis.length; y++){
                let li = lis[y];
                li.style.color = "rgb(57, 63, 68)";
            }

    } else {
        body.setAttribute("class", "bgDarkMode");

        questionDiv.style.backgroundColor = "rgba(0, 28, 59, 0.8)";
        questionDiv.style.borderColor = "aquamarine";
        countDiv.style.borderColor = "aquamarine";
        questionNum.style.color = "aquamarine";
        questionNum.style.fontWeight = "400";
        questionDiv.style.color = "whitesmoke";

        for(z = 0; z< radioBtns.length; z++){
            radioBtn = radioBtns[z];
            radioBtn.style.border = "2px solid aquamarine";
        }

        for(y = 0; y< lis.length; y++){
            let li = lis[y];
            li.style.color = "whitesmoke";
        }
    }
}


/**
 * Preserves the mode (dark/light) that the user has selected throught the whole quiz, or until user switches again
 */
function saveMode(){
    let y;
    let z;
    let lis = document.getElementsByTagName('li');
    let bgBody = body.getAttribute("class");
    let questionNum = document.getElementById('questionNum');
    let countDiv = document.getElementsByClassName('count')[0];
    let radioBtns = document.getElementsByTagName('input');
    let radioBtn = document.getElementsByTagName('input[type="radio"]')[z];

    if(bgBody === "bgDarkMode") {
        body.setAttribute("class", "bgDarkMode");

        questionDiv.style.backgroundColor = "rgba(0, 28, 59, 0.8)";
        questionDiv.style.borderColor = "aquamarine";
        countDiv.style.borderColor = "aquamarine";
        questionNum.style.color = "aquamarine";
        questionNum.style.fontWeight = "400";
        questionDiv.style.color = "whitesmoke";

        for(z = 0; z< radioBtns.length; z++){
            radioBtn = radioBtns[z];
            radioBtn.style.border = "2px solid aquamarine";
        }

        for(y = 0; y< lis.length; y++){
            let li = lis[y];
            li.style.color = "whitesmoke";
        }

    } else  {
        body.setAttribute("class", "bgLightMode");

        questionDiv.style.backgroundColor = "rgb(245,245,245)";
        questionDiv.style.borderColor = "#001c3b";
        countDiv.style.borderColor = "#001c3b";
        questionNum.style.color = "#001c3b";
        questionNum.style.fontWeight = "bold";
        questionDiv.style.color = "rgb(57, 63, 68)";

        for(z = 0; z< radioBtns.length; z++){
            radioBtn = radioBtns[z];
            radioBtn.style.border = "2px solid rgb(85, 0, 85)";
        }

        for(y = 0; y< lis.length; y++){
            let li = lis[y];
            li.style.color = "rgb(57, 63, 68)";
        }
    }
}


/**
 * Hides Navbar
 */
function hideNav() {
    let nav = document.getElementsByTagName('nav')[0];
    nav.style.visibility = "invisible";
    nav.style.display = "none"; 
}


function stopAudio() {
    audio.pause();
}


