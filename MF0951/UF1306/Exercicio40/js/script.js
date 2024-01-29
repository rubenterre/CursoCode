const series = {
    "Loki": {
        "fondo": "url(assets/fondo_Loki.png)",
        "logo": "assets/Logos/logo_loki.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2021 - 2023",
        "tempadas": "2 tempadas",
        "categorías": "Ciencia ficción, Fantástica, Superhéroe, Acción e aventura",
        "descricion": "A nova serie Loki, de Marvel Studios, empeza alí onde terminou Vengadores: Endgame. Nela, o voluble vilán Loki (Tom Hiddleston) volve gañarse o alcume de Dios do Engano. Kate Herron é a súa directora e Michael Waldron o guionista principal.",
        "trailer": `<button onclick="mostrarPopupLoki()" class="informacion__trailer">
        TRAILER
        </button>`
    },
    "Percy": {
        "fondo": "url(assets/fondo_percy.png)",
        "logo": "assets/Logos/logo_percy.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2023",
        "tempadas": "1 tempada",
        "categorías": "Familiar, Fantástica, Acción e aventura",
        "descricion": "Percy Jackson emprende unha perigosa misión. Deixando atrás aos monstros e burlando aos deuses, percorrerá Estados Unidos para devolver o Raio Mestre de Zeus e evitar a guerra. Con axuda dos seus compañeiros de misión, Annabeth e Grover, a viaxe de Percy achegarao máis ás respostas que busca: como encaixar nun mundo que lle é ajenoy se logrará entender o seu destino.",
        "trailer": `
        <button onclick="mostrarPopupPercy()" class="informacion__trailer">
        TRAILER
        </button>`
    },
    "Mandalorian": {
        "fondo": "url(assets/fondo_mandalorian.png)",
        "logo": "assets/Logos/logo_mandalorian.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2019 - 2023",
        "tempadas": "3 tempadas",
        "categorías": "Ciencia ficción, Acción e aventura",
        "descricion": "Tras a caída do Imperio, un solitario Mandaloriano viaxa por unha galaxia sen lei co seu protexido: Grogu.",
        "trailer": `
        <button onclick="mostrarPopupMandalorian()" class="informacion__trailer">
        TRAILER
        </button>`

    },
    "Solo": {
        "fondo": "url(assets/fondo_asesinatos.png)",
        "logo": "assets/Logos/logo_solo_asesinatos.png",
        "iconos": {
            "idade": "assets/iconos/16+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2021 - 2023",
        "tempadas": "3 tempadas",
        "categorías": "Misterio, Drama, Comedia, Policiaca",
        "descricion": "Aos veciños do Upper West Side Charles, Oliver e Mabel únelles a súa paixón polos crimes reais. Cando un residente do seu edificio morre, o trío decide resolver o misterio e gravar un podcast relatándoo.",
        "trailer": `
        <button onclick="mostrarPopupSolo()" class="informacion__trailer">
        TRAILER
        </button>`
    }
}

let body = document.querySelector("body");
let informacionLogo = document.getElementById("informacionLogo");
let informacionIdade = document.getElementById("informacionIdade");
let informacionAnos = document.getElementById("informacionAnos");
let informacionTempada = document.getElementById("informacionTempada");
let informacionCategorias = document.getElementById("informacionCategorias");
let informacionDescripcion = document.getElementById("informacionDescripcion");
let informacionBoton = document.getElementById("informacionBoton");

function botonSeries(serie) {
    switch (serie) {
        case "Loki":
            body.style.background = series.Loki.fondo;
            informacionLogo.src = series.Loki.logo;
            informacionLogo.alt = "Logo de la serie Loki";
            informacionIdade.src = series.Loki.iconos.idade;
            informacionIdade.alt = "A partir de 12 anos";
            informacionAnos.textContent = series.Loki.ano;
            informacionTempada.textContent = series.Loki.tempadas;
            informacionCategorias.textContent = series.Loki.categorías;
            informacionDescripcion.textContent = series.Loki.descricion;
            informacionBoton.innerHTML = series.Loki.trailer;
            break;
        case "Percy":
            body.style.background = series.Percy.fondo;
            informacionLogo.src = series.Percy.logo;
            informacionLogo.alt = "Logo de la serie Percy Jackson";
            informacionIdade.src = series.Percy.iconos.idade;
            informacionIdade.alt = "A partir de 12 anos";
            informacionAnos.textContent = series.Percy.ano;
            informacionTempada.textContent = series.Percy.tempadas;
            informacionCategorias.textContent = series.Percy.categorías;
            informacionDescripcion.textContent = series.Percy.descricion;
            informacionBoton.innerHTML = series.Percy.trailer;
            break;
        case "Mandalorian":
            body.style.background = series.Mandalorian.fondo;
            informacionLogo.src = series.Mandalorian.logo;
            informacionLogo.alt = "Logo de la serie Star Wars Mandalorian";
            informacionIdade.src = series.Mandalorian.iconos.idade;
            informacionIdade.alt = "A partir de 12 anos";
            informacionAnos.textContent = series.Mandalorian.ano;
            informacionTempada.textContent = series.Mandalorian.tempadas;
            informacionCategorias.textContent = series.Mandalorian.categorías;
            informacionDescripcion.textContent = series.Mandalorian.descricion;
            informacionBoton.innerHTML = series.Mandalorian.trailer;
            break;
        case "Solo":
            body.style.background = series.Solo.fondo;
            informacionLogo.src = series.Solo.logo;
            informacionLogo.alt = "Logo de la serie Sólo asesinatos en el edificio";
            informacionIdade.src = series.Solo.iconos.idade;
            informacionIdade.alt = "A partir de 16 anos";
            informacionAnos.textContent = series.Solo.ano;
            informacionTempada.textContent = series.Solo.tempadas;
            informacionCategorias.textContent = series.Solo.categorías;
            informacionDescripcion.textContent = series.Solo.descricion;
            informacionBoton.innerHTML = series.Solo.trailer;
            break;
        default:
            Error
            break;
    }
}

function mostrarPopupLoki() {
    let popupPai = document.getElementById("popupPai");
    popupPai.innerHTML =
        `      <div id="popup" class="popup">
        <div class="popup__contenedor">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/RdGHx7U4DR8?si=gjhcMEqJ4N4155xS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="popup__pechar">
            <button onclick="botonPechar()" class="popup__button">CERRAR</button>
          </div>
        </div>
      </div>`;
}

function mostrarPopupPercy() {
    let popupPai = document.getElementById("popupPai");
    popupPai.innerHTML =
        `      <div id="popup" class="popup">
        <div class="popup__contenedor">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/0P1sDTOLtEw?si=grIjl3HMUsbA0_Sn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div class="popup__pechar">
            <button onclick="botonPechar()" class="popup__button">CERRAR</button>
          </div>
        </div>
      </div>`;
}

function mostrarPopupMandalorian() {
    let popupPai = document.getElementById("popupPai");
    popupPai.innerHTML =
        `<div id="popup" class="popup">
        <div class="popup__contenedor">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/piXRBQCKzQI?si=hn3Tmvm65FvOk2yy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div class="popup__pechar">
            <button onclick="botonPechar()" class="popup__button">CERRAR</button>
          </div>
        </div>
      </div>`;
}

function mostrarPopupSolo() {
    let popupPai = document.getElementById("popupPai");
    popupPai.innerHTML =
        `      <div id="popup" class="popup">
        <div class="popup__contenedor">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/kmgT20OXV1o?si=PryiYo5qkMmSCWD9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div class="popup__pechar">
            <button onclick="botonPechar()" class="popup__button">CERRAR</button>
          </div>
        </div>
      </div>`;
}

function botonPechar() {
    let popup = document.getElementById("popup")
    popup.remove()
}