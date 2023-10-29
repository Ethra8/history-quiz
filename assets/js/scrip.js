
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

document.getElementsByTagName('button')[0].addEventListener('click', displayQuestion);

function displayQuestion() {
    document.getElementsByTagName('button')[0].style.display = "none";

    let questionDiv = document.getElementById('question');
    questionDiv.style.display = "block";

    // let i = Math.floor(Math.random() * 10) ;

    // console.log(i);

   for (question of questions) {
    let i = 0;//Math.floor(Math.random() * 10) ;
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
    
   }
   let btnCheck = document.getElementById('btnCheckAnswer');
   btnCheck.addEventListener('click', displayRadioValue);

   if(displayRadioValue === true){
    i++;
    console.log(i);
   }
}


function displayRadioValue() {
    var option = document.getElementsByName('option');

    for (i = 0; i < option.length; i++) {
        if (option[i].checked){
            if( option[i].id === "answer") {
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
 * adds 1 point to score, disables btn to check answer, avoiding doubling points
 * for the same correct answer, displays btn next question
 */
function addCorrectAnswerToCounter() {

    let oldScore = parseInt(document.getElementById("correct").innerHTML);
    document.getElementById('correct').innerText = ++oldScore;

    let btnCheckAnswer = document.getElementById('btnCheckAnswer');
    btnCheckAnswer.disabled = "true";
    btnCheckAnswer.style.cursor = "auto";

    let btnNextQuestion = document.getElementById('btnNextQuestion');
    btnNextQuestion.style.display = "inline-block";
    btnNextQuestion.addEventListener('click', )
}

function addIncorrectAnswerToCounter() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText); // also .textContent
    document.getElementById('incorrect').innerText = ++oldScore;// also oldScore + 1 -> putting the ++ incrementse by 1, but after the variable doesn't let user see increment, putting ++ before the variable, shows the increment to the user

    document.getElementById('btnNextQuestion').style.display = "inline-block";
}