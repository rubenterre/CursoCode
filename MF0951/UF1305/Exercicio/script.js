document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo (puedes sustituirlo con tu propia lista de productos)
    const productos = [
        { nombre: 'Mercurio', descripcion: 'Mercurio é o planeta do sistema solar máis próximo ao Sol e o máis pequeno. Forma parte dos denominados planetas interiores e carece de satélites naturais, igual que Venus.', numero_planeta: 1 },
        { nombre: 'Venus', descripcion: 'Venus é o segundo planeta do sistema solar en orde de proximidade ao Sol e o terceiro máis pequeno despois de Mercurio e Marte. Ao igual que Mercurio, carece de satélites naturais. Recibe o seu nome en honra a Venus, a deusa romana do amor.', numero_planeta: 2 },
        { nombre: 'Terra', descripcion: 'A Terra é un planeta terrestre. É pequeno e rochoso. A atmosfera terrestre ten o grosor perfecto para manter a temperatura temperada do planeta, para que seres vivos como nós poidamos vivir nel.', numero_planeta: 3 },
        // Agrega más productos según sea necesario
    ];

    // Obtener elementos del DOM
    const planetaList = document.getElementById('planetaList');
    const planetaDetails = document.getElementById('planetaDetails');

    // Generar la lista de productos
    productos.forEach(planeta => {
        const button = document.createElement('button');
        button.textContent = planeta.nombre;
        button.addEventListener('click', () => mostrarDetalles(planeta));
        planetaList.appendChild(button);
    });

    // Función para mostrar los detalles del planeta seleccionado
    function mostrarDetalles(planeta) {
        // Limpiar detalles anteriores
        planetaDetails.innerHTML = '';

        // Crear elementos para mostrar los detalles
        const titulo = document.createElement('h2');
        titulo.textContent = planeta.nombre;

        const descripcion = document.createElement('p');
        descripcion.textContent = planeta.descripcion;

        const numero_planeta = document.createElement('p');
        numero_planeta.textContent = `Posición no Sistema Solar: ${planeta.numero_planeta}`;

        // Agregar elementos al contenedor de detalles
        planetaDetails.appendChild(titulo);
        planetaDetails.appendChild(descripcion);
        planetaDetails.appendChild(numero_planeta);
    }
});
