const form = document.querySelector("#form")
const input = document.querySelector("#email")
const errorMsg = document.querySelector("#error-message")

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const handleSubmit = e => {
  if (!validateEmail(input.value)) {
    errorMsg.classList.add("error")
    input.classList.add("error")
  } else {
    errorMsg.classList.remove("error")
    input.classList.remove("error")
  }
  e.preventDefault()
}

form.addEventListener("submit", handleSubmit)
