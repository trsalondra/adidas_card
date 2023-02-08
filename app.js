const card = document.querySelector(".card")

const sneaker = document.querySelector(".sneaker img")

const sizes = document.querySelector(".sizes")

const size1 = document.querySelector("#size1")
const size2 = document.querySelector("#size2")
const size3 = document.querySelector("#size3")
const size4 = document.querySelector("#size4")

// animate in
card.addEventListener("mouseenter", (e) => {
    sneaker.style.transform = "rotateZ(-45deg)"

})

// animate out
card.addEventListener("mouseleave", (e) => {
    sneaker.style.transform = "rotateZ(0deg)"
})

function selectSize(size) {
    for (child of sizes.children) {
        child.classList.remove("active")
    }

    size.classList.add("active")
}

size1.addEventListener("click", () => selectSize(size1))

size2.addEventListener("click", () => selectSize(size2))

size3.addEventListener("click", () => selectSize(size3))

size4.addEventListener("click", () => selectSize(size4))