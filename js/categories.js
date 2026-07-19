const params = new URLSearchParams(window.location.search);

const classId = params.get("class");
const subject = params.get("subject");

document.getElementById("subject-title").textContent =
`Class ${classId} - ${subject}`;

async function loadCategories() {
    const response = await fetch("../data/categories.json");
    const data = await response.json();

    const item = data.find(x => x.subject === subject);
    const grid = document.getElementById("category-grid");

    grid.innerHTML = "";

    if (!item) {
        grid.innerHTML = "<p>No categories found.</p>";
        return;
    }

    item.categories.forEach(category => {
        const card = document.createElement("div");
        card.className = "class-card";
        card.textContent = category;

        card.onclick = () => {
            window.location.href =
                "topics.html?class=" + classId +
                "&subject=" + encodeURIComponent(subject) +
                "&category=" + encodeURIComponent(category);
        };

        grid.appendChild(card);
    });
}

loadCategories();
