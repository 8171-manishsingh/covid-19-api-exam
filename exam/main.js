const question = [
    { q:" What is your Name" ,options:["manish","Das","kumar","patel"]},
    { q: "Who is the father of Computers?", options: ["James Gosling", "Charles Babbage", " Dennis Ritchie","Bjarne Stroustrup"]},
    { q: "What is the full form of CPU?", options: ["Computer Processing Unit"," Computer Principle Unit"," Central Processing Unit","Control Processing Unit"], answer: "Central Processing Unit" },
    { q: "Which of the following computer language is written in binary codes only??", options: ["pascal", "machine language", "C", "C#"], answer: "machine language" },
    { q: "What is 10 + 5?", options: ["10", "15", "20", "5"], answer: "15" },
    { q: "Which of the following is the brain of the computer?", options: ["Central Processing Unit", "Memory", "Arithmetic and Logic unit", "Control unit"], answer: " central Processing unit" },
    { q: "Which of the following is not a characteristic of a computer", options: ["Versatility", "Accuracy", "Diligence", " I.Q"], answer: "Pacific" },
    { q: "Which of the following is the smallest unit of data in a computer?", options: ["Bit", "Kb", "Nibble", "Byte"], answer: "Bit" },
]
let currentQuestion = 0;
let score = 0;
let timerend = 60;
let timer ;

const questionE1 =document.getElementById("question");
const optionsE1 =document.getElementById("options");
const timerE1 =document.getElementById("timer");
const resultE1 =document.getElementById("result");


function startQuiz()
{
    showQuestion();

}
function showQuestion ()
{
    if (currentQuestion>= question.length)
    {
        return showresult();
    }
    const q = question[currentQuestion ];
    questionE1.textContent =q.q;
    optionsE1.innerHTML = "";

    q.options.forEach(opt =>{
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () =>checkAnswer(opt);
        optionsE1.appendChild(btn)
    });
    timerend = 60;
    timerE1.textContent = `Time left: ${timerend}s`;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timerend--;
      timerE1.textContent = `Time left: ${timerend}s`;
      if (timerend <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);
  }

  function checkAnswer(selected) {
    if (selected === question[currentQuestion].answer) {
      score++;
    }
    nextQuestion();
  }
  function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;
    showQuestion();
  }
  function showResult() {
    questionE1.style.display = "none";
    optionsE1.style.display = "none";
    timerE1.style.display = "none";
    resultE1.textContent = `You scored ${score}`;
  }
  startQuiz();
