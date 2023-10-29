
let questions = [
    {
        question: "question1",
        answer: "answer1",
        option1: "option1.1",
        option2: "option2.1"
    },
    {
        question: "question2",
        answer: "answer2",
        option1: "option1.2",
        option2: "option2.2"
    },
    {
        question: "question3",
        answer: "answer3",
        option1: "option1.3",
        option2: "option2.3"
    },
    {
        question: "question4",
        answer: "answer4",
        option1: "option1.4",
        option2: "option2.4"
    }, {
        question: "question5",
        answer: "answer5",
        option1: "option1.5",
        option2: "option2.5"
    }, {
        question: "question6",
        answer: "answer6",
        option1: "option1.6",
        option2: "option2.6"
    }, {
        question: "question7",
        answer: "answer7",
        option1: "option1.7",
        option2: "option2.7"
    }, {
        question: "question8",
        answer: "answer8",
        option1: "option1.8",
        option2: "option2.8"
    }, {
        question: "question9",
        answer: "answer9",
        option1: "option1.9",
        option2: "option2.9"
    }, {
        question: "question10",
        answer: "answer10",
        option1: "option1.10",
        option2: "option2.10"
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

    let questionDiv = document.getElementById('question');
    questionDiv.style.display = "block";//displays "question"

    questionDiv.innerHTML = `
        <p>${questions[i].question}</p>
        <ul>
            <li><input type="radio" name="option" id="answer"><label name="answer">${questions[i].answer}</label></li>
            <li><input type="radio" name="option" id="option2"><label name="option2">${questions[i].option1}</label></li>
            <li><input type="radio" name="option" id="option3"><label name="option3">${questions[i].option2}</label></li>
        </ul>
        <br>
        <button id="btnCheckAnswer">Check Answer</button><button id="btnNextQuestion" style="display:none;">Next Question</button>
    `;
    
        let btnCheck = document.getElementById('btnCheckAnswer');
        btnCheck.addEventListener('click', displayRadioValue);
        
}

/**
 * checks if correct answer radio btn was selected
 * returns boolean, and triggers function addCorrectAnswerToCounter().
 */
function displayRadioValue() {
    var option = document.getElementsByName('option');

    for (x = 0; x < option.length; i++) {
        if (option[x].checked){
            if(option[x].id === "answer") {
                alert("That's right! You've got it!!");
                addCorrectAnswerToCounter();
                return true;
            } else {
                alert("Awwwwww ... you got it wrong this time!");
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

    let btnNextQuestion = document.getElementById('btnNextQuestion');
    btnNextQuestion.style.display = "inline-block";//displays button "Next Question", and activates it
    btnNextQuestion.addEventListener('click', displayNextQuestion)// Once "Next Question" btn is clicked, function displayNextQuestion() is triggered
}


function displayNextQuestion() {
    ++i;
    displayQuestion();

//     document.getElementsByTagName('button')[0].style.display = "none";

//     let questionDiv = document.getElementById('question');
//     questionDiv.style.display = "block";

//     // for (question of questions) {
//     i++;//Math.floor(Math.random() * 10) ;
//     questionDiv.innerHTML = `
//         <p>${questions[i].question}</p>
//         <ul>
//             <li><input type="radio" name="option" id="answer"><label name="answer">${questions[i].answer}</label></li>
//             <li><input type="radio" name="option" id="option2"><label name="option2">${questions[i].option1}</label></li>
//             <li><input type="radio" name="option" id="option3"><label name="option3">${questions[i].option2}</label></li>
//         </ul>
//         <br>
//         <button id="btnCheckAnswer">Check Answer</button><button id="btnNextQuestion" style="display:none;">Next Question</button>
//     `;
    
// //    }
//    let btnCheck = document.getElementById('btnCheckAnswer');
//    btnCheck.addEventListener('click', displayRadioValue);

//    if(displayRadioValue === true){
//     i++;
//     console.log(i);
//    }
}

function addIncorrectAnswerToCounter() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText); // also .textContent
    document.getElementById('incorrect').innerText = ++oldScore;// also oldScore + 1 -> putting the ++ incrementse by 1, but after the variable doesn't let user see increment, putting ++ before the variable, shows the increment to the user

    document.getElementById('btnNextQuestion').style.display = "inline-block";
}