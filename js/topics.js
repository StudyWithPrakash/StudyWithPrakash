
const params = new URLSearchParams(window.location.search);

const classId = params.get("class");
const subject = params.get("subject");
const category = params.get("category");

document.getElementById("page-title").textContent =
`Class ${classId} - ${subject} - ${category}`;

async function loadTopics() {

    const response = await fetch("../data/topics.json");
    const data = await response.json();

    const item = data.find(x =>
        x.subject === subject &&
        x.category === category
    );

    const grid = document.getElementById("topic-grid");

    grid.innerHTML = "";

    if (!item) {
        grid.innerHTML = "<p>No topics found.</p>";
        return;
    }

    item.topics.forEach(topic => {

        const card = document.createElement("div");

        card.className = "class-card";

        card.textContent = topic;

        card.onclick = () => {

            window.location.href =
                "lesson.html?class=" + classId +
                "&subject=" + encodeURIComponent(subject) +
                "&category=" + encodeURIComponent(category) +
                "&topic=" + encodeURIComponent(topic);

        };

        grid.appendChild(card);

    });

}

loadTopics();
