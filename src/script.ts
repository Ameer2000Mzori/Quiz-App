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
  {
    Questions: `What is the capital of France?`,
    a: `Berlin`,
    b: `Paris`,
    c: `Madrid`,
    d: `Rome`,
    correct: "B",
  },
  {
    Questions: `Which planet is known as the Red Planet?`,
    a: `Mars`,
    b: `Jupiter`,
    c: `Venus`,
    d: `Saturn`,
    correct: "A",
  },
  {
    Questions: `What is the largest mammal in the world?`,
    a: `Elephant`,
    b: `Giraffe`,
    c: `Blue Whale`,
    d: `Hippopotamus`,
    correct: "C",
  },
  {
    Questions: `In which year did Christopher Columbus reach the Americas?`,
    a: `1492`,
    b: `1588`,
    c: `1776`,
    d: `1607`,
    correct: "A",
  },
  {
    Questions: `Which element has the chemical symbol 'O'?`,
    a: `Osmium`,
    b: `Oxygen`,
    c: `Oganesson`,
    d: `Onium`,
    correct: "B",
  },
  {
    Questions: `What is the currency of Japan?`,
    a: `Yuan`,
    b: `Euro`,
    c: `Yen`,
    d: `Dollar`,
    correct: "C",
  },
  {
    Questions: `Who painted the Mona Lisa?`,
    a: `Vincent van Gogh`,
    b: `Leonardo da Vinci`,
    c: `Pablo Picasso`,
    d: `Claude Monet`,
    correct: "B",
  },
  {
    Questions: `Which ocean is the largest?`,
    a: `Indian Ocean`,
    b: `Atlantic Ocean`,
    c: `Southern Ocean`,
    d: `Pacific Ocean`,
    correct: "D",
  },
  {
    Questions: `What is the capital of Australia?`,
    a: `Wellington`,
    b: `Canberra`,
    c: `Sydney`,
    d: `Melbourne`,
    correct: "B",
  },
  {
    Questions: `What is the main ingredient in guacamole?`,
    a: `Tomato`,
    b: `Onion`,
    c: `Avocado`,
    d: `Pineapple`,
    correct: "C",
  },
];
