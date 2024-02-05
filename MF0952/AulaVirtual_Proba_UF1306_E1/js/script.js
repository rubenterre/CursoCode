
let popupContenedor = document.getElementById("popupContenedor");

function mostrarPopup(imagen) {
    switch (imagen) {
        case "bodas":
            popupContenedor.innerHTML = `<div id="popup" class="popup">
            <div class="popup__img">
                <img src="assets/popup/boda_1000px.webp" alt="Foto dunha boda">
                <button onclick="popupCerrar()" class="popup__cerrar">
                <p>Cerrar</p>    
                </button>
            </div>
        </div> `
            break;
            case "comida":
                popupContenedor.innerHTML = `<div id="popup" class="popup">
                <div class="popup__img">
                    <img src="assets/popup/comida_1000px.webp" alt="Foto dunha comida">
                    <button onclick="popupCerrar()" class="popup__cerrar">
                    <p>Cerrar</p>    
                    </button>
                </div>
            </div> `
                break;
            case "eventos":
                    popupContenedor.innerHTML = `<div id="popup" class="popup">
                    <div class="popup__img">
                        <img src="assets/popup/eventos_1000px.webp" alt="Foto dunha conferencia">
                        <button onclick="popupCerrar()" class="popup__cerrar">
                        <p>Cerrar</p>    
                        </button>
                    </div>
                </div> `
                    break;
            case "interiores":
                popupContenedor.innerHTML = `<div id="popup" class="popup">
                <div class="popup__img">
                    <img src="assets/popup/interiores_1000px.webp" alt="Foto da sala de estar dun piso">
                    <button onclick="popupCerrar()" class="popup__cerrar">
                    <p>Cerrar</p>    
                    </button>
                </div>
            </div> `
                break;
                case "naturaleza":
                    popupContenedor.innerHTML = `<div id="popup" class="popup">
                    <div class="popup__img">
                        <img src="assets/popup/naturaleza_1000px.webp" alt="Foto da sala de estar dun piso">
                        <button onclick="popupCerrar()" class="popup__cerrar">
                        <p>Cerrar</p>    
                        </button>
                    </div>
                </div> `
                    break;
                    case "retratos":
                        popupContenedor.innerHTML = `<div id="popup" class="popup">
                        <div class="popup__img">
                            <img src="assets/popup/retratos_1000px.webp" alt="Foto da sala de estar dun piso">
                            <button onclick="popupCerrar()" class="popup__cerrar">
                            <p>Cerrar</p>    
                            </button>
                        </div>
                    </div> `
                        break;
        default:
            break;
    }

}

function popupCerrar(){
    let popup = document.getElementById("popup");
    popup.remove()
}