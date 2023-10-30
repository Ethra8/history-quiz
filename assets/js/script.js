//array of questions, where correctAnswer has value of the index of the correct answer in array of options.
let questions = [
    {
        question: "In what year was the Universal Declaration of Human Rights (UDHR) first declared by the United Nations?",
        correctAnswer: 0,
        options: ["1948", "1953", "1967"]
    },
    {
        question: `Which event preceded the <i>Magna Carta</i> (Charter of Liberties) signed by King John in 1215? `,
        correctAnswer: 2,
        options: ["Victory against King Philip of France", "King John's coronation", "A revolt of the Barons"]
    },
    {
        question: "Why was the Knights Templars' last Grand Master Jacques de Molay burnt at the stake in 1314?",
        correctAnswer: 1,
        options: ["Because he was accused of treason by the King of France", "Because the Templars had been accused of heresy", "Because he had insulted the King"]
    },
    {
        question: "Who was Hypatia of Alexandria, murdered in 415 AD by a Christian monks' militia?",
        correctAnswer: 2,
        options: ["She was the wife of the Roman Governor of Alexandria", "She was a famous courtisan from the Roman Empire", "She was a famous mathematician, phisolopher and astronomer"]
    }, {
        question: "question5",
        correctAnswer: 0,
        options: ["answer", "option1", "option2"]
    }, {
        question: "question6",
        correctAnswer: 2,
        options: ["option1", "option2", "answer"]
    }, {
        question: "question7",
        option1: "option1.7",
        correctAnswer: 1,
        options: ["option1", "answer", "option2"]
    }, {
        question: "question8",
        correctAnswer: 1,
        options: ["option1", "answer", "option2"]
    }, {
        question: "question9",
        correctAnswer: 2,
        options: ["option1", "option2", "answer"]
    }, {
        question: "question10",
        correctAnswer: 0,
        options: ["answer", "option1", "option2"]
    },];


document.getElementsByTagName('button')[0].addEventListener('click', displayQuestion);//Once user clicks on "Start Quiz" button, function displayQuestion is triggered to show 1st question of quiz
let i =0;//pre-sets value of i (used for questions in quiz) to 0

/**
 * Once button 'start Quiz' is clicked, 1st question is displayed,
 * elements is header reduce in size,
 * Once the button Check Answer is clicked, tfunction displayRadioValue id triggered
 * To check whether the correct answer was selected through radio btn.
 */
function displayQuestion() {
    
    document.getElementsByTagName('button')[0].style.display = "none";//hides "Start Quiz" button
    document.getElementsByClassName("startQuiz")[0].style.display = "none";//hides parent div of "Start Quiz" button, to avoid it taking space
    document.getElementsByTagName("h1")[0].style.fontSize = "300%";//reduce font-size of h1 in header
    document.getElementsByTagName("p")[0].style.fontSize = "200%";// reduce font-size of header p
    document.getElementsByClassName("count")[0].style.visibility = "visible";

    let questionDiv = document.getElementById('question');
    questionDiv.style.display = "block";//displays "question"


    questionDiv.innerHTML = `
        <p>${questions[i].question}</p>
        <ul>
            <li><input type="radio" name="option" id="${getId(0)}"><label for="${getId(0)}">${questions[i].options[0]}</label></li>
            <li><input type="radio" name="option" id="${getId(1)}"><label for="${getId(1)}">${questions[i].options[1]}</label></li>
            <li><input type="radio" name="option" id="${getId(2)}"><label for="${getId(2)}">${questions[i].options[2]}</label></li>
        </ul>
        <br>
        <button id="btnCheckAnswer">Check Answer</button><button id="btnNextQuestion" style="display:none;">Next Question</button>
    `;
    
        let btnCheck = document.getElementById('btnCheckAnswer');
        btnCheck.addEventListener('click', displayRadioValue);
        
}

/**
 * Gets value of correctAnswer in questions[i], and
 * compares its value (0-2) to id parameter set in id from input type=radio, which is the same as set in label for .options[].
 * If values match, then it must be the correct answer, which exact position in the questions[i].options array is specified hardcoded in questions[i].correctAnswer's integer value.
 */
function getId(id){
    let correctAnswer = questions[i].correctAnswer;
    
    if(correctAnswer === id){
        return "answer";
    } else{
        return `option-${id}`;
    }
}


/**
 * checks if correct answer radio btn was selected
 * returns boolean, and triggers function addCorrectAnswerToCounter().
 */
function displayRadioValue() {
    let option = document.getElementsByName('option');

    for (let x = 0; x < option.length; x++) {
        if (option[x].checked){
            if(option[x].id === "answer") {
                alert("That's right! You've got it!!");
                addCorrectAnswerToCounter();
                return true;
            } else {
                alert(`Awwwwww ... you got it wrong this time!`);
                addIncorrectAnswerToCounter();
                return false;
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
    btnNextQuestion.addEventListener('click', displayNextQuestion);// Once "Next Question" btn is clicked, function displayNextQuestion() is triggered
}


function displayNextQuestion() {
    ++i;
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
            <h1 style="font-size:300%">Wow! Great score!!</h1>
            <p class="finalMsg">Your final score is ${oldScore} / 10</p>
        `;
        }
        
        let restartQuiz = document.getElementsByClassName('restartQuiz')[0];
        restartQuiz.style.visibility = "visible";
        restartQuiz.style.display = "block";
        let restartQuizBtn = restartQuiz.children[0];

        restartQuizBtn.addEventListener('click', startNewQuiz);

    }
   

}


function addIncorrectAnswerToCounter() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText); // also .textContent
    document.getElementById('incorrect').innerText = ++oldScore;// also oldScore + 1 -> putting the ++ incrementse by 1, but after the variable doesn't let user see increment, putting ++ before the variable, shows the increment to the user
    
    let btnNextQuestion = document.getElementById('btnNextQuestion');
    btnNextQuestion.addEventListener('click', displayNextQuestion)// Once "Next Question" btn is clicked, function displayNextQuestion() is triggered
    

    let btnCheckAnswer = document.getElementById('btnCheckAnswer');
    btnCheckAnswer.disabled = "true";//disables btn to check answer, avoiding users to hit it a second time and get more points for same correct answer
    btnCheckAnswer.style.cursor = "auto";//changes cursor:pointer which implies an action to the user, to "auto" (default mouse arrow)
    btnCheckAnswer.id = "btnCheckAnswerDisabled";

    // btnNextQuestion.addEventListener('click', displayNextQuestion)// Once "Next Question" btn is clicked, function displayNextQuestion() is triggered
    // let btnNextQuestion = document.getElementById('btnNextQuestion');
    btnNextQuestion.style.display = "inline-block";//displays button "Next Question", and activates it
}

function startNewQuiz() {

    i = 0;

    document.getElementById('correct').innerHTML = "0";
    document.getElementById('incorrect').innerHTML = "0";

    displayQuestion();

}