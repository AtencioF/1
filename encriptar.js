// esto captura los datos del textarea y los enctripta
var encriptar = document.querySelector("#encriptar");
var img = document.querySelector("#imgPerrito")
var textarea = document.querySelector(".imgParaMostrar");

encriptar.addEventListener("click",function(event){
    event.preventDefault();
    
    var textoBruto = document.querySelector("#textoVARIABLE");

    var contenido = textoBruto.value;
    contenido = contenido.replaceAll(/e/igm, "enter");
    contenido = contenido.replaceAll(/i/igm, "imes");
    contenido = contenido.replaceAll(/a/igm, "ai");
    contenido = contenido.replaceAll(/o/igm, "ober");
    contenido = contenido.replaceAll(/u/igm, "ufat");
    
    img.classList.add("borrar");

    console.log(contenido);

    textarea.innerHTML = contenido;
});

