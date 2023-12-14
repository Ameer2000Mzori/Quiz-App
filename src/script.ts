// selecting our elements
const quastionText = document.getElementsByClassName("quastion-Text")[0];
const aText = document.getElementsByClassName("a_Text")[0];
const bText = document.getElementsByClassName("b_Text")[0];
const cText = document.getElementsByClassName("c_Text")[0];
const dText = document.getElementsByClassName("d_Text")[0];
const submitBtn = document.getElementsByClassName("submit-Btn")[0];
const answersEl = document.querySelectorAll(".answer");

// our gelobal variables
let currentIndex = 0;
let goodAnswers = 0;

// our object Quastions

const QuestionsObject = [
  {
    Questions: `what is red?`,
    a: `color`,
    b: `name`,
    c: `car`,
    d: `dance`,
    correct: "A",
  },
  {
    Questions: `from what is a car created`,
    a: `plastic`,
    b: `stone`,
    c: `metal`,
    d: `scrab`,
    correct: "C",
  },
  {
    Questions: `where is The Nehterlands`,
    a: `Asia`,
    b: `Europe`,
    c: `North Amarica`,
    d: `South Amarica`,
    correct: "B",
  },
];

// our functions
const dataListFunction = (): void => {
  let questionsCount = QuestionsObject[currentIndex];
  quastionText.textContent = `${questionsCount.Questions}`;
  aText.textContent = `${questionsCount.a}`;
  bText.textContent = `${questionsCount.b}`;
  cText.textContent = `${questionsCount.c}`;
  dText.textContent = `${questionsCount.d}`;
};

// check function for questions
const checkQuestions = (answer): void => {
  if (answer.checked) {
    if (answer.id === QuestionsObject[currentIndex].correct) {
      console.log("that is right");
      currentIndex += 1;
      goodAnswers += 1;
      dataListFunction();
      answer.checked = false;
    } else {
      console.log("that is wrong");
      currentIndex += 1;
      dataListFunction();
      answer.checked = false;
    }
  }
};

// our event linsters
submitBtn.addEventListener("click", () => {
  answersEl.forEach((answer: any) => {
    checkQuestions(answer);
  });
});

dataListFunction();
