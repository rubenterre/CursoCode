
let resultado = document.getElementById("resultado");

function eMaiorDeIdade(idade) {
    if (idade >= 18) {
        return resultado.textContent = "Noraboa! Tes idade para votar";
    } else {
        return resultado.textContent = "Sintoo, pero aínda non tes idade para votar.";
    }
}
