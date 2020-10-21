const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener('click', function() {
    const pTag = document.createElement('p');
    pTag.textContent = "Hey Guys";
    body.appendChild(pTag);
})
