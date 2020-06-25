const form = document.querySelector("#form")
const input = document.querySelector("#email")
const errorIcon = document.querySelector("#error")
const small = document.querySelector("#error-msg")

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const handleSubmit = e => {
  if (!validateEmail(input.value)) {
    small.classList.add("block")
    errorIcon.classList.add("block")
    input.classList.add("error")
  } else {
    small.classList.remove("block")
    errorIcon.classList.remove("block")
    input.classList.remove("error")
  }
  e.preventDefault()
}

form.addEventListener("submit", handleSubmit)
