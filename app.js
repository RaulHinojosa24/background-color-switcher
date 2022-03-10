// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(element => {
    element.addEventListener("click", function (event) {
        let color = getComputedStyle(event.target).backgroundColor;
        body.style.backgroundColor = color;
    });
});