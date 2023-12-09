var entradaLista;
var listaHTML;

entradaLista=document.getElementById("novaEntrada")
listaHTML=document.getElementById("lista")

ultimoTexto=localStorage.getItem("ultimoTexto")
entradaLista.value=ultimoTexto;
console.log(ultimoTexto)

var listaGuardada = localStorage.getItem("listaGuardada");

if (listaGuardada) {
  listaHTML.innerHTML = listaGuardada;
}

 function agregarElemento () {
 var novoTexto;
 var novoElemento;
 novoTexto=entradaLista.value
 novoElemento=document.createElement("li");
 novoElemento.innerText=novoTexto;
 listaHTML.appendChild(novoElemento);
 localStorage.setItem("listaGuardada", listaHTML.innerHTML);
 entradaLista.value = "";
 } 