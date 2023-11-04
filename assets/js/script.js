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
    },];

document.getElementById("fa-gear").addEventListener('click', changeLightMode);
document.getElementsByTagName('button')[1].addEventListener('click', displayQuestion);//Once user clicks on "Start Quiz" button, function displayQuestion is triggered to show 1st question of quiz

document.getElementById('navRestartBtn').addEventListener('click', startNewQuiz);//user can restart quiz anytime from navbar

let i = 0;//pre-sets value of i (used for questions in quiz) to 0

/**
 * Once button 'start Quiz' is clicked, 1st question is displayed, and
 * elements in header are reduced in size.
 * Once the button Check Answer is clicked, function displayRadioValue() id triggered
 * to check whether the correct answer was selected through radio btn.
 */
function displayQuestion() {
    //after completing quiz once, if user clicks on "Restart Quiz" btn, turn the "restart Quiz" button invisible again once quiz is restarted.
    let restartQuiz = document.getElementsByClassName('restartQuiz')[0];
    let nav = document.getElementsByTagName('nav')[0];
    restartQuiz.style.visibility = "invisible";
    restartQuiz.style.display = "none";
    nav.style.visibility = "visible";
    nav.style.display = "flex";

    document.getElementsByTagName('button')[1].style.display = "none";//hides "Start Quiz" button
    document.getElementsByClassName("startQuiz")[0].style.display = "none";//hides parent div of "Start Quiz" button, to avoid it taking space
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementsByClassName("count")[0].style.visibility = "visible";

    let questionDiv = document.getElementById('question');
    questionDiv.style.display = "block";//displays "question"

    questionDiv.innerHTML = `
        <p><span id="questionNum">Question ${i+1}</span><br><br>
         ${questions[i].question}</p>
        <ul>
            <li><input type="radio" name="option" id="${getId(0)}"><label for="${getId(0)}">${questions[i].options[0]}</label></li>
            <li><input type="radio" name="option" id="${getId(1)}"><label for="${getId(1)}">${questions[i].options[1]}</label></li>
            <li><input type="radio" name="option" id="${getId(2)}"><label for="${getId(2)}">${questions[i].options[2]}</label></li>
        </ul>
        <br>
        <div class="btnsDiv">
        <button id="btnCheckAnswer">Check Answer</button><button id="btnNextQuestion">Next Question</button>
        </div>
    `;
    
        let btnCheck = document.getElementById('btnCheckAnswer');
        btnCheck.addEventListener('click', displayRadioValue);
        
}



/**
 * Gets value of correctAnswer in questions[i], and
 * compares its value (0-2) to id parameter set in id from input type=radio, which is the same as set to label .options[].
 * If values match, then it must be the correct answer, which exact position in the questions[i].options array is specified hardcoded in questions[i].correctAnswer's integer value.
 */
function getId(id){
    let correctAnswerPosition = questions[i].correctAnswerPosition;

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
    let option = document.getElementsByName('option');
    
    let correctAnswerPosition = questions[i].correctAnswerPosition;
    let a = correctAnswerPosition;

    let correctAnswer = questions[i].options[a];

    for (let x = 0; x < option.length; x++) {
        if (option[x].checked){
            if(option[x].id === "answer") {
                alert("That's right! You've got it!!");
                addCorrectAnswerToCounter();
            } else {
                alert(`Awwwwww ... you got it wrong this time.\n\n The correct answer is:\n ${correctAnswer}`);
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

    let btnNextQuestion = document.getElementById('btnNextQuestion');
    btnNextQuestion.style.display = "inline-block";//displays button "Next Question", and activates it
    
    if(i === 9){
        btnNextQuestion.innerText = "Final Results";
    }

    btnNextQuestion.addEventListener('click', displayNextQuestion);// Once "Next Question" btn is clicked, function displayNextQuestion() is triggered
}

/**
 * Adds +1 to i, and displays next question if i< total number of Qs, or displays final message when i === to final question.
 */
function displayNextQuestion() {

    ++i; //increments i so that next question (or final results div with message) is displayed
    
    if(i < 10) {
        displayQuestion();
    } else if(i === 10){
        let questionDiv = document.getElementById('question');
        questionDiv.style.display = "block";//displays "question"
        questionDiv.style.backgroundColor = "rgba(2, 24, 83, 0.6)";
        let oldScore = parseInt(document.getElementById("correct").innerHTML);

        if(oldScore <= 3){
            questionDiv.innerHTML = `
            <h1 style="font-size:300%">You could do much better...</h1>
             <p class="finalMsg">Your final score is ${oldScore} / 10</p>
            `;
        } else if(oldScore <= 5){
            questionDiv.innerHTML = `
            <h1 style="font-size:300%">You could do better...</h1>
            <p class="finalMsg">Your final score is ${oldScore} / 10</p>
            `;
        } else if (oldScore <= 8){
            questionDiv.innerHTML = `
            <h1 style="font-size:300%">Well done!</h1>
            <p class="finalMsg">Your final score is ${oldScore} / 10</p>
        `;
        } else if (oldScore >= 9){
            questionDiv.innerHTML = `
            <h1 style="font-size:300%">Wow! Do you have a PhD in history?</h1>
            <p class="finalMsg">Your final score is ${oldScore} / 10</p>
        `;
        }


        
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

const body = document.getElementsByTagName('body')[0];


function changeLightMode() {
// bodyBg = "url('../images/bg-image.jpg')";
    
    if(body.style.background === "whitesmoke"){
        // === "url('../images/bg-image.jpg')"){ 
        body.style.background = "red";

    } else {
        body.style.background = "whitesmoke";
    }
}


function hideNav() {
    let nav = document.getElementsByTagName('nav')[0];
    nav.style.visibility = "invisible";
    nav.style.display = "none"; 
}
