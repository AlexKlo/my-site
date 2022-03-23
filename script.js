let page=document.querySelector('.page');
let themeButton = document.querySelector('.chage-theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-theme');
}
