// selecting our elements
var quastionText = document.getElementsByClassName("quastion-Text")[0];
var aText = document.getElementsByClassName("a_Text")[0];
var bText = document.getElementsByClassName("b_Text")[0];
var cText = document.getElementsByClassName("c_Text")[0];
var dText = document.getElementsByClassName("d_Text")[0];
var submitBtn = document.getElementsByClassName("submit-Btn")[0];
var answersEl = document.querySelectorAll(".answer");
// our gelobal variables
var currentIndex = 0;
var goodAnswers = 0;
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
];
// our functions
// our event linsters
submitBtn.addEventListener("click", function () {
    answersEl.forEach(function (answer) {
        if (answer.checked) {
            if (answer.id === QuestionsObject[currentIndex].correct) {
                console.log("that is right");
            }
            else {
                console.log("that is wrong");
            }
        }
    });
});
