document.addEventListener('DOMContentLoaded', function () {
    // Datos de exemplo (podes sustituirlo coa túa propia lista de planetas)
    const planetas = [
        { nome: 'Mercurio', descricion: 'Mercurio é o planeta do sistema solar máis próximo ao Sol e o máis pequeno. Forma parte dos denominados planetas interiores e carece de satélites naturais, igual que Venus.', numero: '1', video: 'assets/video/Mercurio_mod.mp4' },
        { nome: 'Venus', descricion: 'Venus é o segundo planeta do sistema solar en orde de proximidade ao Sol e o terceiro máis pequeno despois de Mercurio e Marte. Ao igual que Mercurio, carece de satélites naturais. Recibe o seu nome en honra a Venus, a deusa romana do amor.', numero: '2', video: 'assets/video/Venus_mod.mp4' },
        { nome: 'Terra', descricion: 'A Terra é un planeta terrestre. É pequeno e rochoso. A atmosfera terrestre ten o grosor perfecto para manter a temperatura temperada do planeta, para que seres vivos como nós poidamos vivir nel.', numero: '3', video: 'assets/video/Terra_mod.mp4' },
        { nome: 'Marte', descricion: 'Marte é o cuarto planeta en orde de distancia ao Sol e o segundo máis pequeno do sistema solar, despois de Mercurio.', numero: '4', video: 'assets/video/Marte_mod.mp4'},
        { nome: 'Xúpiter', descricion: 'Xúpiter é o quinto planeta do noso sistema solar e é un xigante gaseoso. É o máis grande de todos os planetas e ten unha masa moito maior que a da Terra', numero: '5', video: 'assets/video/Xupiter_mod.mp4'},
        { nome: 'Saturno', descricion: 'Saturno é o sexto planeta do noso sistema solar e tamén é un xigante gaseoso. É coñecido polos seus impresionantes aneis, que son un dos aspectos máis distintivos do planeta. Estes aneis están compostos principalmente de partículas de xeo, rocha e po que orbitan ao redor de Saturno en numerosos aneis concéntricos', numero: '6', video: 'assets/video/Saturno_mod.mp4'},
        { nome: 'Urano', descricion: 'Urano é o sétimo planeta do sistema solar e é un xigante de xeo. É único pola súa inclinación extrema, xirando de lado en comparación con os outros planetas. Este movemento de inclinación fai que os seus polos reciban directamente a luz solar, mentres que os seus ecuadores están en escuridade durante boa parte do ano.', numero: '7', video: 'assets/video/Urano_mod.mp4'},
        { nome: 'Neptuno', descricion: 'Neptuno é o oitavo e último planeta do sistema solar, situado máis aló de Urano. É tamén un xigante de xeo, semellante a Urano, e foi descuberto en 1846 por Johann Galle e Urbain Le Verrier a través de cálculos matemáticos que predixeron a súa existencia.', numero: '8', video: 'assets/video/Neptuno_mod.mp4'}
    ];

    // Obtener elementos do DOM
    const planetaList = document.getElementById('planetaList');
    const planetaDetalles = document.getElementById('planetaDetalles');

    // Xenera a lista de planetas
    planetas.forEach(planeta => {
        const button = document.createElement('button');
        button.classList.add('planetas__boton');
        button.textContent = planeta.nome;
        button.addEventListener('click', () => mostrarDetalles(planeta));
        planetaList.appendChild(button);
    });

    // Función para mostrar os detalles do planeta seleccionado
    function mostrarDetalles(planeta) {
        // Limpa detalles anteriores
        planetaDetalles.innerHTML = '';

        // Crear elementos para mostrar os detalles

        const video = document.createElement('video');
        video.src = `${planeta.video}`;
        video.setAttribute("loop", "true");
        video.setAttribute("autoplay", "true");

        const titulo = document.createElement('h2');
        titulo.classList.add('planetas__h2');
        titulo.textContent = planeta.nome;

        const descricion = document.createElement('p');
        descricion.classList.add('planetas__p');
        descricion.textContent = planeta.descricion;

        const numero = document.createElement('p');
        numero.classList.add('planetas__p');
        numero.innerHTML = `Posición no Sistema Solar: <span class="planetas__span">${planeta.numero}</span>`;

        // Agregar elementos ao contedor de detalles
        planetaDetalles.appendChild(video);
        planetaDetalles.appendChild(titulo);
        planetaDetalles.appendChild(descricion);
        planetaDetalles.appendChild(numero);
    }
});
