
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
];

document.getElementsByTagName('button')[0].addEventListener('click', displayQuestion);

function displayQuestion() {
    document.getElementsByTagName('button')[0].style.display = "none";

    let questionDiv = document.getElementById('question');
    questionDiv.style.display = "block";

    // let i = Math.floor(Math.random() * 3) ;

    // console.log(i);

   for (let i = 0; i < questions.length; i++) {
    questionDiv.innerHTML = `
        <p>${questions[i].question}</p>
        <ul>
            <li><input type="radio" name="question" id="answer"><label name="answer">${questions[i].answer}</label></li>
            <li><input type="radio" name="question" id="option2"><label name="option2">${questions[i].option1}</label></li>
            <li><input type="radio" name="question" id="option3"><label name="option3">${questions[i].option2}</label></li>
        </ul>
        <br>
        <button id="check">Check Answer</button>
    `;
    
   }

   let btnCheck = document.getElementById('check');
    btnCheck.addEventListener('click', checkAnswer)

}

// function checkAnswer() {

//     if()
// }