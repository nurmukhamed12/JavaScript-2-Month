const buyButtobuyButton = document.getElementById ("buyButton")
const modal = document.getElementById ("modal")
const yesButton = document.getElementById ("yesButton")
const noButton = document.getElementById ("noButton")

buyButton.addEventListener("click", function () {
    modal.style.display = "block"
})

yesButton.addEventListener("click", function () {
    modal.style.display = "none"
})

noButton.addEventListener("click", function () {
    modal.style.display = "none"
})