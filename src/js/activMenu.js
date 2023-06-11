const navHeader = document.getElementById('nav-header');
const currentPath = window.location.pathname;

if (currentPath === '/project-neverland/index.html') {
  navHeader.children[0].children[0].classList.add('nav_list-current');
} else if (currentPath === '/project-neverland/catalog.html') {
  navHeader.children[1].children[0].classList.add('nav_list-current');
} else if (currentPath === 'project-neverland/library.html') {
  navHeader.children[2].children[0].classList.add('nav_list-current');
} else {
  navHeader.children[0].children[0].classList.add('nav_list-current');
}
