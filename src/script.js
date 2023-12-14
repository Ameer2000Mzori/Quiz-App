// selecting our elements
var quastionText = document.getElementsByClassName("quastion-Text")[0];
var aText = document.getElementsByClassName("a_Text")[0];
var bText = document.getElementsByClassName("b_Text")[0];
var cText = document.getElementsByClassName("c_Text")[0];
var dText = document.getElementsByClassName("d_Text")[0];
var submitBtn = document.getElementsByClassName("submit-Btn")[0];
var answersEl = document.querySelectorAll(".answer");
var quastionsWrap = document.getElementsByClassName("quastions-Wrap")[0];
// our gelobal variables
var currentIndex = 0;
var goodAnswers = 0;
var wrongAnswers = 0;
// our object Quastions
var QuestionsObject = [
    {
        Questions: "what is red?",
        a: "color",
        b: "name",
        c: "car",
        d: "dance",
        correct: "A",
    },
    {
        Questions: "from what is a car created",
        a: "plastic",
        b: "stone",
        c: "metal",
        d: "scrab",
        correct: "C",
    },
    {
        Questions: "where is The Nehterlands",
        a: "Asia",
        b: "Europe",
        c: "North Amarica",
        d: "South Amarica",
        correct: "B",
    },
    {
        Questions: "What is the capital of France?",
        a: "Berlin",
        b: "Paris",
        c: "Madrid",
        d: "Rome",
        correct: "B",
    },
    {
        Questions: "Which planet is known as the Red Planet?",
        a: "Mars",
        b: "Jupiter",
        c: "Venus",
        d: "Saturn",
        correct: "A",
    },
    {
        Questions: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Giraffe",
        c: "Blue Whale",
        d: "Hippopotamus",
        correct: "C",
    },
    {
        Questions: "In which year did Christopher Columbus reach the Americas?",
        a: "1492",
        b: "1588",
        c: "1776",
        d: "1607",
        correct: "A",
    },
    {
        Questions: "Which element has the chemical symbol 'O'?",
        a: "Osmium",
        b: "Oxygen",
        c: "Oganesson",
        d: "Onium",
        correct: "B",
    },
    {
        Questions: "What is the currency of Japan?",
        a: "Yuan",
        b: "Euro",
        c: "Yen",
        d: "Dollar",
        correct: "C",
    },
    {
        Questions: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Claude Monet",
        correct: "B",
    },
    {
        Questions: "Which ocean is the largest?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Southern Ocean",
        d: "Pacific Ocean",
        correct: "D",
    },
    {
        Questions: "What is the capital of Australia?",
        a: "Wellington",
        b: "Canberra",
        c: "Sydney",
        d: "Melbourne",
        correct: "B",
    },
    {
        Questions: "What is the main ingredient in guacamole?",
        a: "Tomato",
        b: "Onion",
        c: "Avocado",
        d: "Pineapple",
        correct: "C",
    },
];
// our functions
var dataListFunction = function () {
    var questionsCount = QuestionsObject[currentIndex];
    quastionText.textContent = "".concat(questionsCount.Questions);
    aText.textContent = "".concat(questionsCount.a);
    bText.textContent = "".concat(questionsCount.b);
    cText.textContent = "".concat(questionsCount.c);
    dText.textContent = "".concat(questionsCount.d);
};
// check function for questions
var checkQuestions = function (answer) {
    if (answer.checked) {
        if (answer.id === QuestionsObject[currentIndex].correct) {
            console.log("that is right");
            currentIndex += 1;
            goodAnswers += 1;
            checkFinish();
            answer.checked = false;
        }
        else {
            console.log("that is wrong");
            currentIndex += 1;
            wrongAnswers += 1;
            checkFinish();
            answer.checked = false;
        }
    }
};
// check if finished the questions or not
var checkFinish = function () {
    if (currentIndex >= QuestionsObject.length) {
        quastionText.textContent = "finished!!!";
        quastionsWrap.innerHTML = "";
        var goodText = document.createElement("p");
        goodText.textContent = "you got ".concat(goodAnswers, " answers good");
        goodText.classList.add("p-ElText");
        var wrongText = document.createElement("p");
        wrongText.textContent = "you got ".concat(wrongAnswers, " answers Wrong");
        wrongText.classList.add("p-ElText");
        quastionsWrap.appendChild(goodText);
        quastionsWrap.appendChild(wrongText);
    }
    else {
        dataListFunction();
    }
};
// our event linsters
submitBtn.addEventListener("click", function () {
    answersEl.forEach(function (answer) {
        checkQuestions(answer);
    });
});
dataListFunction();
