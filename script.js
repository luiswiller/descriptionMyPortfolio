function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // e substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar1Light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  
}
