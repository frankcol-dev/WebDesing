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
        <img src="/img/iconos/github-icon.png" alt="GitHub Logo" style="width:25px; height:25px;">
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
// Datos de cada skill
const skillData = {
  HTML: {
    logo: '/img/iconos/html5.svg',
    description: `HTML es el esqueleto de la web, la estructura que sostiene cada idea.
Cada etiqueta define contenido, jerarquía y sentido para los usuarios y los navegadores.
Dominar HTML es dar forma al mundo digital, creando bases sólidas sobre las que todo lo demás cobra vida.





`
  },
  CSS: {
    logo: '/img/iconos/css3.svg',
    description: `CSS es la magia visual de la web, el arte que convierte estructura en estilo.
Cada color, borde y animación transforma interfaces simples en experiencias atractivas e intuitivas.
Dominar CSS es dar personalidad y vida a cada proyecto, haciendo que la web no solo funcione… sino que también deslumbre.





`
  },
  JavaScript: {
    logo: '/img/iconos/javascript.png',
    description: `JavaScript es la chispa que da vida a la web.
Cada clic, animación y formulario cobra sentido gracias a su lógica.
Con funciones, objetos y promesas, transformo ideas en experiencias interactivas, limpias y modernas.
Dominar JS es dominar la magia que conecta al usuario con tu mundo digital.




`
  },
  'Closures / Destructuring': {
    logo: '💻',
    description: `Los closures guardan estados y controlan la lógica desde dentro, mientras que el destructuring extrae exactamente lo que necesitas de objetos y arrays. Dominar estas técnicas te permite escribir código limpio, elegante y eficiente.
    




    `
  },
  'Async / Await': {
    logo: '⚡',
    description:`Async/Await convierte operaciones asíncronas en flujos claros y comprensibles. Dominarlo te permite manejar datos remotos de forma profesional y sin complicaciones.


    
    

    
    `
  },
  'UX/UI': {
    logo: '🎨',
    description: `UX y UI son la brújula y el pincel de la web. Diseñar pensando en el usuario transforma interfaces en experiencias intuitivas y memorables.

    
    
    
    
    
    
    `
  },
  'Photoshop': {
    logo: '🖌️',
    description: `Photoshop es la herramienta que da forma y detalle a tus ideas visuales, creando elementos que complementan y elevan cada proyecto web.
    
    
    
    



    
    `
  },
  'WordPress': {
    logo: '🌐',
    description: `WordPress permite construir sitios completos y personalizados con eficiencia, combinando creatividad y funcionalidad para usuarios y clientes.
    
    





    
    
    `
  },
  'Flexbox / Grid': {
    logo: '🔧',
    description: `Flexbox y Grid son la base de la maquetación moderna. Dominar estas técnicas te permite organizar contenido de manera flexible y precisa en cualquier pantalla.
    
    
    
    




    
    `
  },
  'Git / GitHub': {
    logo: '📂',
    description: `Git y GitHub son tus aliados en el control de versiones y colaboración. Mantener tu código organizado y sincronizado hace que trabajar en equipo sea fluido y profesional.
    
    
    



    
    
    `
  },
  'Clean Code': {
    logo: '📝',
    description: `Clean Code es la filosofía de escribir código claro, legible y mantenible. Cada línea tiene propósito, haciendo tus proyectos robustos y profesionales.
    
    
    
    


    
    
    `
  }
};

// Selección de elementos
const skills = document.querySelectorAll('.skills__logo');
const modal = document.getElementById('skill-modal');
const modalLogo = modal.querySelector('.skill-modal-logo');
const modalTitle = modal.querySelector('.skill-modal-title');
const modalDesc = modal.querySelector('.skill-modal-description');
const modalClose = document.getElementById('skill-modal-close');

// Función abrir modal
skills.forEach(skill => {
  skill.addEventListener('click', () => {
    const title = skill.querySelector('span').innerText;
    const data = skillData[title];
    if(data){
      modalLogo.innerHTML = data.logo.includes('/') ? `<img src="${data.logo}" alt="${title} Logo">` : `<div style="font-size:60px;">${data.logo}</div>`;
      modalTitle.innerText = title;
      modalDesc.innerText = data.description;
      modal.classList.add('show');
    }
  });
});

// Cerrar modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Cerrar al dar click fuera del contenido
modal.addEventListener('click', e => {
  if(e.target === modal){
    modal.classList.remove('show');
  }
});