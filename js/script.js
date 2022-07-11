questions = [
    {
        question: "Programlama Dili ?",
        blank: "_ _ _ _ _ _ _ _ _ _",
        correctAnswer: "JAVASCRIPT",
    },
    {
        question: "Programlama Dili ?",
        blank: "_ _ _",
        correctAnswer: "PHP",
    },
    {
        question: "Programlama Dili ?",
        blank: "_ _ _ _",
        correctAnswer: "JAVA",
    },
    {
        question: "Programlama Dili ?",
        blank: "_ _ _",
        correctAnswer: "LUA",
    },
    {
        question: "Programlama Dili ?",
        blank: "_ _ _ _",
        correctAnswer: "RUST",
    },
    {
        question: "Bilgisayar Markası ?",
        blank: "_ _ _ _ _ _",
        correctAnswer: "LENOVO",
    },
    {
        question: "Bilgisayar Markası ?",
        blank: "_ _",
        correctAnswer: "HP",
    },
    {
        question: "Bilgisayar Markası ?",
        blank: "_ _ _ _",
        correctAnswer: "ASUS",
    },
];

let userAnswer = "";
let answerArea = "";
let wrongAnswer = 0;
let defaultAnswerArea = "";
let questionAnswer = "";
const usableCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "BACKSPACE",
]

function getRandomQuestion() {
    return question = questions[Math.floor(Math.random() * questions.length)];
}

function clearBackground() {
    return document.getElementById("answer-area").style.backgroundColor = "";
}

function setPlayGround() {
    getRandomQuestion();
    clearBackground();
    defaultAnswerArea = question.blank;
    wrongAnswer = 0;
    questionAnswer = question.correctAnswer;
    userAnswer = "";
    document.getElementById("wrong-answer").innerHTML = wrongAnswer;
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("answer-area").innerHTML = question.blank;
}

function setWrongAnswer() {
    wrongAnswer++;
    console.log(wrongAnswer);
    document.getElementById("wrong-img").src = `img/${wrongAnswer}.jpg`;
    if (wrongAnswer == 6) {
        document.getElementById("wrong-answer").innerHTML = wrongAnswer;
        setTimeout(areYouWantNewGame, 300);
    }
    document.getElementById("wrong-answer").innerHTML = wrongAnswer;
}

function handleKeyPress(key) {
    answerArea = document.getElementById("answer-area").innerText;
    let index = usableCharacters.indexOf(key);

    if (key == "BACKSPACE") {
        document.getElementById("answer-area").innerHTML = defaultAnswerArea;
        userAnswer = "";
        clearBackground();
    } else {
        if ((userAnswer.length < answerArea.split(" ").length) && index !== -1) {
            userAnswer += key;
            answerArea = answerArea.replace("_", key);
            document.getElementById("answer-area").innerHTML = answerArea;
        }
    }

    if (userAnswer.length == answerArea.split(" ").length) {
        checkAnswerAndSetNextQuestion();
    }
}

function checkAnswerAndSetNextQuestion() {
    if (userAnswer == questionAnswer) {
        document.getElementById("answer-area").style.backgroundColor = "palegreen";
        setTimeout(areYouWantNewGame, 100);
    } else {
        setWrongAnswer();
        document.getElementById("answer-area").style.backgroundColor = "red";
    }
}

function areYouWantNewGame() {
    if (confirm("Yeni Oyun İster Misin ?")) {
        setPlayGround();
    }
}

document.addEventListener('keydown', function (event) {
    handleKeyPress(event.key.toUpperCase())
});

setPlayGround();