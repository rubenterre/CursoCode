function calificacion(nome, cualificacion) {
    let resultado;
  
    if (cualificacion >= 90) {
      resultado = "Nombre: " + nome + ", Calificación: Sobresaliente";
    } else if (cualificacion >= 80) {
      resultado = "Nombre: " + nome + ", Calificación: Notable";
    } else if (cualificacion >= 70) {
      resultado = "Nombre: " + nome + ", Calificación: Aprobado";
    } else {
      resultado = "Nombre: " + nome + ", Calificación: Suspenso";
    }
  
    document.querySelector(".calificacion__p").textContent = resultado;

  }
  