const params = new URLSearchParams(window.location.search);

const classId = Number(params.get("class"));
const subject = params.get("subject");
const category = params.get("category");
const topic = params.get("topic");

let correctAnswers = [];

async function loadQuiz() {

    const response = await fetch("../data/quizzes.json");
    const quizzes = await response.json();

    const quiz = quizzes.find(q =>
        q.class === classId &&
        q.subject === subject &&
        q.category === category &&
        q.topic === topic
    );

    const container = document.getElementById("quiz-container");

    if (!quiz) {
        container.innerHTML = "<h2>No quiz available.</h2>";
        return;
    }

    correctAnswers = quiz.questions.map(q => q.answer);

    quiz.questions.forEach((q, index) => {

        const div = document.createElement("div");

        div.className = "lesson-box";

        div.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label><br>
            `).join("")}
        `;

        container.appendChild(div);

    });

}

document.getElementById("submit-btn").onclick = function () {

    let score = 0;

    correctAnswers.forEach((answer, index) => {

        const selected = document.querySelector(
            `input[name="q${index}"]:checked`
        );

        if (selected && selected.value === answer) {
            score++;
        }

    });

    document.getElementById("score").textContent =
        `Your Score: ${score} / ${correctAnswers.length}`;

};

loadQuiz();
