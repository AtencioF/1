// esto captura los datos del textarea y los desenctripta

var desencriptar = document.querySelector("#desencriptar");
var img = document.querySelector("#imgPerrito")
var textarea = document.querySelector(".imgParaMostrar");


desencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var textoBruto = document.querySelector("#textoVARIABLE");
    var contenido = textoBruto.value;

    contenido = contenido.replace(/enter/igm, "e");
    contenido = contenido.replace(/imes/igm, "i");
    contenido = contenido.replace(/ai/igm, "a");
    contenido = contenido.replace(/ober/igm, "o");
    contenido = contenido.replace(/ufat/igm, "u");

    img.classList.add("borrar");

    console.log(contenido);

    textarea.innerHTML = contenido;
});
