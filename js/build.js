const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("data/builds.json")
  .then(res => res.json())
  .then(builds => {

    const build = builds.find(b => b.id === id);

    document.getElementById("nome").innerText = build.nome;

    const createIcon = (item) => {
      const img = document.createElement("img");
      img.src = `https://render.albiononline.com/v1/item/${item}.png?quality=1`;
      img.style.width = "60px";
      img.style.margin = "5px";
      img.draggable = false;
      return img;
    };

    // EQUIPAMENTO
    document.getElementById("head").appendChild(createIcon(build.equipamento.head));
    document.getElementById("armor").appendChild(createIcon(build.equipamento.armor));
    document.getElementById("shoes").appendChild(createIcon(build.equipamento.shoes));

    if (build.equipamento.cape)
      document.getElementById("cape").appendChild(createIcon(build.equipamento.cape));

    if (build.equipamento.mainhand)
      document.getElementById("main").appendChild(createIcon(build.equipamento.mainhand));

    if (build.equipamento.offhand)
      document.getElementById("off").appendChild(createIcon(build.equipamento.offhand));

    // CONSUMIVEIS
    const consDiv = document.getElementById("consumiveis");

    if (build.consumiveis) {
      if (build.consumiveis.potion)
        consDiv.appendChild(createIcon(build.consumiveis.potion));

      if (build.consumiveis.food)
        consDiv.appendChild(createIcon(build.consumiveis.food));
    }

    // SWAP (🔥 corrigido)
    const swapDiv = document.getElementById("swap");
    const swapContainer = document.getElementById("swap-container");

    if (build.swap && Object.keys(build.swap).length > 0) {
      Object.values(build.swap).forEach(item => {
        swapDiv.appendChild(createIcon(item));
      });
    } else {
      swapContainer.style.display = "none"; // 🔥 esconde tudo
    }

  });