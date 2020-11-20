const fooButton = document.getElementById("fooButton");
const barButton = document.getElementById("barButton");
const fooBarButton = document.getElementById("fooBarButton");
const body = document.querySelector("body");

    fooButton.addEventListener("click", function(event) {
        const h3 = document.createElement('h3');
        h3.textContent = "Foo";
        body.appendChild(h3);
    })
    barButton.addEventListener("click", function(event) {
        const h31 = document.createElement('h3');
        h31.textContent = "Bar";
        body.appendChild(h31);
    })    
    fooBarButton.addEventListener("click", function(event) {
        const h2 = document.createElement('h2');
        h2.textContent = "FooBar";
        body.appendChild(h2);
    })
