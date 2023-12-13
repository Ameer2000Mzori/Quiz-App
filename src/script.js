// selecting our elements
var quastionText = document.getElementsByClassName("quastion-Text")[0];
var aText = document.getElementsByClassName("a_Text")[0];
var inputA = document.getElementById("A");
var bText = document.getElementsByClassName("b_Text")[0];
var inputB = document.getElementById("B");
var cText = document.getElementsByClassName("c_Text")[0];
var inputC = document.getElementById("C");
var dText = document.getElementsByClassName("d_Text")[0];
var inputD = document.getElementById("D");
var submitBtn = document.getElementsByClassName("submit-Btn")[0];
// our gelobal variables
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
submitBtn.addEventListener("click", function () { });
