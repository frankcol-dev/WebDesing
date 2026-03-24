// Navbar scroll suave
const links = document.querySelectorAll('.header__nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Cargar repos de GitHub
const githubList = document.getElementById('github-list');

async function cargarRepos() {
  const username = 'frankcol-dev';
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await response.json();

  repos.forEach(repo => {
    const item = document.createElement('div');
    item.classList.add('projects__item');

    item.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <img src="/img/github-icon.png" alt="GitHub Logo" style="width:25px; height:25px;">
        <h3 class="projects__item-title">${repo.name}</h3>
      </div>
      <p>${repo.description ? repo.description : "Sin descripción"}</p>
      <a class="projects__item-link" href="${repo.html_url}" target="_blank">Ver en GitHub</a>
    `;

    githubList.appendChild(item);
  });
}

cargarRepos();
window.addEventListener("load", () => {
  const app = document.getElementById("app");
  app.classList.add("show");
});
