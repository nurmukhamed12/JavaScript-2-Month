const input = document.getElementById("test-input");
const title = document.getElementById("title")
const buutonium = document.getElementById("test")
const form = document.getElementById("form")

function sayHello() {
    alert("hello");
}

// buutonium.addEventListener("click", sayHello);

title.addEventListener("click", sayHello);

title.addEventListener("mouseenter", function () {
    title.innerText = " mouse move ";
});

title.addEventListener("mouseleave", () => {
    title.innerText = " mouse out ";
});

input.addEventListener("input", function (event) {
    console.log(event);
    title.innerText = event.target.value;
});

form.addEventListener("submit", function (event){
    event.preventDefault();
    alert(input.value);
});

const array = ["foo", "bar", "baz"];
const newArray = array.map((item) => item + "bee" + item);
console.log(newArray);