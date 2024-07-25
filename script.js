function mobileMenu() {
  document.getElementById('close-menu').checked = false;
}

function darkMode() {
  let slider = document.getElementById('darkmode');
  let elements = document.getElementsByClassName('white-bg');
  let menuButtons = document.getElementsByClassName('menu-button')


  if (slider.checked) {
    for (let i = 0; i < elements.length; i++) {
      elements.item(i).style.cssText = "background: #070c26; color: white;";

      elements.item(i).classList.add("span-dark-mode");

      for (let i = 0; i < menuButtons.length; i++) {
        menuButtons.item(i).style.color = 'white';
        menuButtons.item(i).classList.add("menu-button-white");
      }
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      for (let i = 0; i < elements.length; i++) {
        elements.item(i).style.cssText = "background: white; color: black;";

        elements.item(i).classList.remove("span-dark-mode");


        for (let i = 0; i < menuButtons.length; i++) {
          menuButtons.item(i).style.color = 'black';
          menuButtons.item(i).classList.remove("menu-button-white");
        }
      }
    }
  }
}