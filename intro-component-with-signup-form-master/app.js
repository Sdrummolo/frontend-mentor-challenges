const form = document.querySelector("#form")
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

const inputs = [firstName, lastName, email, password]

const handleSubmit = e => {
  inputs.forEach(input => {
    input.value = ""
  })

  if (firstName.value.length === 0) {
    document.querySelector("#first-name-small").classList.add("error")
    firstName.classList.add("error")
    firstName.setAttribute("placeholder", "")
  }

  e.preventDefault()
}

form.addEventListener("submit", handleSubmit)
