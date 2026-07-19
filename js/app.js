async function loadClasses() {
    const response = await fetch("data/classes.json");
    const classes = await response.json();

    const container = document.getElementById("class-grid");
    container.innerHTML = "";

    classes.forEach(item => {
        const card = document.createElement("div");
        card.className = "class-card";
        card.textContent = item.name;

        card.onclick = () => {
            alert(item.name + " page will be built next.");
        };

        container.appendChild(card);
    });
}

loadClasses();
