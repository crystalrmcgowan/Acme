let portfolioData = [
  {
    img: "img/boat.jpg",
    h2: "Boats"
  },
  {
    img: "img/hair.jpg",
    h2: "Hair Styles"
  },
  {
    img: "img/shirts.jpg",
    h2: "t Shirts"
  },
  {
    img: "img/dirt.jpg",
    h2: "Dirt"
  }
]
/***************************************************/
/* 1. Add Hero Content *****************************/
/***************************************************/
let heroHeadline = document.createElement("h1")
heroHeadline = document.createTextNode("ACME Design Studio")
hero.appendChild(heroHeadline)

let breakBetween = document.createElement("br")
hero.appendChild(breakBetween)

let heroContent = document.createElement("p")
heroContent = document.createTextNode(
  "We are dedicated to producing the best designs in the world."
)
hero.appendChild(heroContent)

/***************************************************/
/* 2. Add Portfolio Content ************************/
/***************************************************/
const list = document.querySelector("ul")

for (var i = 0; i < portfolioData.length; i++) {
  let box = document.createElement("li")
  let image = document.createElement("img")
  let headline = document.createElement("h2")

  list.appendChild(box)
  box.appendChild(image)
  box.appendChild(headline)
}
