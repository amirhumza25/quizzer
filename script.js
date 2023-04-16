const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the capital of ?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the capital?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest country in the world?",
    options: ["Canada", "China", "Russia", "USA"],
    answer: "Russia"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Euro", "Yen", "Dollar", "Pound"],
    answer: "Yen"
  }
];

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const option1 = document.getElementById("option1-label");
const option2 = document.getElementById("option2-label");
const option3 = document.getElementById("option3-label");
const option4 = document.getElementById("option4-label");


const options = document.querySelectorAll("li label");
const submitBtn = document.getElementById("submit-btn");
const scoreText = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  question.innerText = currentQuizData.question;
  option1.innerText = currentQuizData.options[0];
  option2.innerText = currentQuizData.options[1];
  option3.innerText = currentQuizData.options[2];
  option4.innerText = currentQuizData.options[3];
}

loadQuiz();

function getSelected() {
  let answer;
  options.forEach((option) => {
    if (option.previousElementSibling.checked) {
      answer = option.innerText;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const selectedAnswer = getSelected();
  if (selectedAnswer) {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
    }
  }
});
