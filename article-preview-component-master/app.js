const button = document.getElementById("share")
const menu = document.getElementById("share-menu")

const openMenu = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open")
  } else {
    menu.classList.add("open")
  }
}

button.addEventListener("click", openMenu)
