const projects = [{
  name: "L2central clone",
  img: "images/l2central.jpg",
  stack: "Stack: HTML / CSS / JavaScript",
  websiteLink: "/l2central-clone",
  githubLink: "https://github.com/CodeineSolm/l2central-clone"
}, {
  name: "Shopping List",
  img: "images/shoppingList.jpg",
  stack: "Stack: HTML / CSS / JavaScript",
  websiteLink: "/shopping-list",
  githubLink: "https://github.com/CodeineSolm/shopping-list"
}, {
  name: "Quote Generator",
  img: "images/quotegenerator.jpg",
  stack: "Stack: HTML / CSS / JavaScript",
  websiteLink: "/quote-generator",
  githubLink: "https://github.com/CodeineSolm/quote-generator"
}, {
  name: "Youtube main page",
  img: "images/youtubeMainPage.jpg",
  stack: "Stack: HTML / CSS / JavaScript",
  websiteLink: "/youtube-html-css-js",
  githubLink: "https://github.com/CodeineSolm/youtube-html-css-js"
}];

const gridElement = document.querySelector('.js-project-grid');
let gridHTML = '';

projects.forEach((project) => {
  gridHTML += `
  <div class="projects-card">
    <div class="project-name">${project.name}</div>
    <div class="project-img-container">
      <img alt="screenshot of projects main page" loading="lazy" class="project-img" src="${project.img}" />
    </div>
    <div class="project-stack">${project.stack}</div>
    <div class="project-link-container">
      <a class="project-link" href="${project.websiteLink}">Website</a>
    </div>
    <div class="project-link-container">
      <a
        class="project-link"
        href="${project.githubLink}"
        >Github</a>
    </div>
  </div>
  `;
});

gridElement.innerHTML = gridHTML;