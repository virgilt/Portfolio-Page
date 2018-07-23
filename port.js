function classToggle() {
  const navs = document.querySelectorAll('.mobileToggle')

  navs.forEach(nav => nav.classList.toggle('mobileShow'));
}
document.querySelector('#toggle').addEventListener('click', classToggle);
