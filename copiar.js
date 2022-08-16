var copiar = document.querySelector("#copiar");

var textoACopiar = document.querySelector(".imgParaMostrar");

copiar.addEventListener("click",function(event){
    navigator.clipboard.writeText(textoACopiar.innerHTML);

});



