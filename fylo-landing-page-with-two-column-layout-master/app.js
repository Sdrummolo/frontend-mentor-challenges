const curve = document.getElementById("curve")

const setCurve = () => {
  if (window.innerWidth <= 1050) {
    curve.src = "./images/bg-curve-mobile.svg"
  } else {
    curve.src = "./images/bg-curve-desktop.svg"
  }
}

window.addEventListener("resize", setCurve)
