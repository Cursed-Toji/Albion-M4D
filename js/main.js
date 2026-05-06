let todasBuilds = [];

fetch("data/builds.json")
  .then(res => res.json())
  .then(builds => {
    todasBuilds = builds;
    render(builds);
  });

function render(builds) {
  const container = document.getElementById("builds");
  container.innerHTML = "";

  builds.forEach(build => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `build.html?id=${build.id}`;

    card.innerHTML = `
      <h2>${build.nome}</h2>
      <p>${build.role}</p>
    `;

    container.appendChild(card);
  });
}

function filtrar(role) {
  if (role === "all") {
    render(todasBuilds);
  } else {
    const filtradas = todasBuilds.filter(b => b.role === role);
    render(filtradas);
  }
}