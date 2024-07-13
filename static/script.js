// Add JavaScript functions for interactivity here

function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
}

document.querySelector('nav').addEventListener('click', toggleNav);

