const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        console.log(event.target.value);
    })
}
