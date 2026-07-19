const params = new URLSearchParams(window.location.search);
const classId = Number(params.get("id"));

async function loadSubjects() {

    const response = await fetch("../data/subjects.json");
    const data = await response.json();

    const selected = data.find(c => c.class === classId);

    document.getElementById("class-title").textContent =
        "Class " + classId;

    const grid = document.getElementById("subject-grid");

    if (!selected) {
        grid.innerHTML = "<p>No subjects found.</p>";
        return;
    }

    selected.subjects.forEach(subject => {

        const card = document.createElement("div");

        card.className = "class-card";

        card.textContent = subject;

        grid.appendChild(card);

    });

}

loadSubjects();
