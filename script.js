const links = [
  { nome: "Portfólio", url: "https://nnathalia.github.io/CurriculoDev/" },
  { nome: "GitHub", url: "https://github.com/nnathalia" },
  { nome: "LinkedIn", url: "https://www.linkedin.com/in/nnathallia/" },
];

const lista = document.getElementById("links-list");

links.forEach((link) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="${link.url}" class="bt-link" target="_blank">${link.nome}</a>
  `;
  lista.appendChild(li);
});

const myName = "Nathalia Mariano"
document.getElementById("myName").textContent = myName;