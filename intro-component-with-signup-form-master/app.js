const form = document.querySelector("#form")
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const handleSubmit = e => {
  if (firstName.value.length === 0) {
    document.querySelector("#first-name-error-icon").classList.add("error")
    document.querySelector("#first-name-small").classList.add("error")
    firstName.classList.add("error")
    firstName.setAttribute("placeholder", "")
  } else {
    document.querySelector("#first-name-error-icon").classList.remove("error")
    document.querySelector("#first-name-small").classList.remove("error")
    firstName.classList.remove("error")
  }

  if (lastName.value.length === 0) {
    document.querySelector("#last-name-error-icon").classList.add("error")
    document.querySelector("#last-name-small").classList.add("error")
    lastName.classList.add("error")
    lastName.setAttribute("placeholder", "")
  } else {
    document.querySelector("#last-name-error-icon").classList.remove("error")
    document.querySelector("#last-name-small").classList.remove("error")
    lastName.classList.remove("error")
  }

  if (validateEmail(email.value) === false) {
    document.querySelector("#email-error-icon").classList.add("error")
    document.querySelector("#email-small").classList.add("error")
    email.classList.add("error")
    email.setAttribute("placeholder", "")
  } else {
    document.querySelector("#email-error-icon").classList.remove("error")
    document.querySelector("#email-small").classList.remove("error")
    email.classList.remove("error")
  }

  if (password.value.length === 0) {
    document.querySelector("#password-error-icon").classList.add("error")
    document.querySelector("#password-small").classList.add("error")
    password.classList.add("error")
    password.setAttribute("placeholder", "")
  } else {
    document.querySelector("#password-error-icon").classList.remove("error")
    document.querySelector("#password-small").classList.remove("error")
    password.classList.remove("error")
  }
  e.preventDefault()
}

form.addEventListener("submit", handleSubmit)
