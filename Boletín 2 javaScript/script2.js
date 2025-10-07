

//1.Cambiar el color de un párrafo al hacer clic en un botón.

document.addEventListener('DOMContentLoaded', () => {
    let mainDiv = document.getElementById("title");
    let button = document.getElementById("button");
    button.addEventListener("click", () => {
        mainDiv.style.color = "red";
    });
});


//2.Crear un párrafo nuevo dentro de un div.

let eleccionDiv = document.querySelector(".main-div");
let nuevoDiv = document.createElement("p");
nuevoDiv.innerText = "Este es un div nuevo creado";
eleccionDiv.appendChild(nuevoDiv);


//3.Eliminar el último elemento de una lista con un botón.

document.addEventListener('DOMContentLoaded', () => {
let lista = document.querySelector(".lista");
let eliminarButton = document.createElement("button");
eliminarButton.innerText = "Eliminar último elemento";
document.body.appendChild(eliminarButton);

eliminarButton.addEventListener("click", () => {
    lista.removeChild(lista.lastElementChild);
});

});



//4.Cambiar el texto de un título (h1) cuando el ratón pase por encima.

let titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", () => {
    titulo.innerText = "El ratón está sobre el título";
});
titulo.addEventListener("mouseout", () => {
    titulo.innerText = "Manipulando el DOM en javascript";
});


//5.Ocultar y mostrar un div con un botón.

