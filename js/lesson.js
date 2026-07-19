const params = new URLSearchParams(window.location.search);

const classId = Number(params.get("class"));
const subject = params.get("subject");
const category = params.get("category");
const topic = params.get("topic");

async function loadLesson() {

    const response = await fetch("../data/lessons.json");
    const lessons = await response.json();

    const lesson = lessons.find(l =>
        l.class === classId &&
        l.subject === subject &&
        l.category === category &&
        l.topic === topic
    );

    if (!lesson) {
        document.getElementById("lesson-title").textContent = "Lesson Not Found";
        document.getElementById("lesson-content").textContent =
            "This lesson has not been added yet.";
        return;
    }

    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-content").textContent = lesson.content;
    document.getElementById("lesson-video").src = lesson.video;
    const simulationButton = document.getElementById("simulationButton");
const simulationMessage = document.getElementById("simulationMessage");

if (lesson.simulation && lesson.simulation !== "") {

    simulationButton.style.display = "inline-block";
    simulationMessage.style.display = "none";

    simulationButton.onclick = () => {
        window.location.href = "../" + lesson.simulation;
    };

}
}

loadLesson()
    document.getElementById("quizButton").onclick = () => {

    window.location.href =
        "quiz.html?class=" + classId +
        "&subject=" + encodeURIComponent(subject) +
        "&category=" + encodeURIComponent(category) +
        "&topic=" + encodeURIComponent(topic);

};
