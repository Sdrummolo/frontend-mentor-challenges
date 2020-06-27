const slides = [
  {
    review: `
            " I've been interested in coding for a while but never taken the jump, until now. I
             couldn't recommend this course enough. I'm now in the job od my dreams and so excited
             about the future. "
             `,
    name: "Tanya Sinclair",
    position: "UX Engineer",
    image: "./images/image-tanya.jpg",
  },
  {
    review: `
            " If you want to lay the best foundation possible i'd recommend taking this course. The
            depth the instructors go into is incredible. I now feel so confident about starting up
            as a professional developer. "
            `,
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    image: "./images/image-john.jpg",
  },
]

const review = document.querySelector("#review")
const name = document.querySelector("#name")
const position = document.querySelector("#position")
const image = document.querySelector("#image")
const previous = document.querySelector("#previous")
const next = document.querySelector("#next")

window.onload = function () {
  LoadSlide(0)
}

previous.addEventListener("click", () => {
  LoadSlide(0)
})

next.addEventListener("click", () => {
  LoadSlide(1)
})

const LoadSlide = index => {
  review.innerText = slides[index].review
  name.innerText = slides[index].name
  position.innerText = slides[index].position
  image.src = slides[index].image
  image.alt = slides[index].name
}
