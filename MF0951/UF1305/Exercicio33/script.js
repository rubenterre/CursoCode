document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    menuButton.addEventListener("click", function () {
        // Alternar a clase 'oculto' para amosar ou ocultar o menú
        dropdownMenu.classList.toggle("oculto");
    });

    // Opcional: Pechar o menú se se fai clic fóra del mesmo
    // window.addEventListener("click", function (event) {
    //     if (!event.target.matches("#menuButton") && !event.target.closest("#dropdownMenu")) {
    //         dropdownMenu.classList.add("oculto");
    //     }
    // });
});
