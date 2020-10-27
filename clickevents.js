const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener("click", event => {

document.getElementById('1');
document.getElementById('2');
document.getElementById('3');
if (event.button == 0) {
    document.getElementById("demo1").innerHTML = "Foo";
    };

document.getElementById('2');
if (event.button == 1) {
    document.getElementById("demo2").innerHTML = "Bar";
    };

if (event.button == 2) {
    document.getElementById("demo3").innerHTML = "FooBar";
    };
});
