const apiKey = ENV.API_KEY;

// API de Openweathermaps

let lat = 42.88;

let lon = -8.54;


function actualizaTempo(lat,lon){

// const apiKey = "a83cd5db22f6b778c1c4c67eef3578bb";
const units = "metric";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

fetch(apiURL)
    .then(response => response.json())

    .then(
        data =>{
            console.log(data);

            document.querySelector(".cabecera__h2").innerHTML = data.name;

            //Data de hoxe

            const timestamp = data.dt * 1000;

            const fecha = new Date(timestamp);

            const meses =['Xan', 'Feb', 'Mar', 'Abr', 'Mai', 'Xuñ', 'Xul', 'Ago', 'Sep','Out','Nov','Dec']

            //Obtener día, mes e ano
            const dia = fecha.getDate();
            const mes = fecha.getMonth();
            const ano = fecha.getFullYear();

           const nomesMes = meses[mes];

           const fechaFormateada = `Hoxe, ${dia} ${nomesMes} ${ano}`;

           document.querySelector(".cabecera__p").innerHTML = fechaFormateada;

           //Icona do tempo de hoxe

           const icono = data.weather[0].icon;
           
           let imgURL;

           switch (icono) {

            case '01d':
                imgURL = 'assets/iconos/01d.png';
            break;

            case '01n':
                imgURL = 'assets/iconos/01n.png';
            break;

            case '02d':
                imgURL = 'assets/iconos/02d.png';
            break;

            case '02n':
                imgURL = 'assets/iconos/02n.png';
            break;

            case '03d':
                imgURL = 'assets/iconos/03d.png';
            break;

            case '03n':
                imgURL = 'assets/iconos/03n.png';
            break;

            case '04d':
                imgURL = 'assets/iconos/04d.png';
            break;

            case '04n':
                imgURL = 'assets/iconos/04n.png';
            break;

            case '09d':
                imgURL = 'assets/iconos/09d.png';
            break;

            case '09n':
                imgURL = 'assets/iconos/09n.png';
            break;

            case '10d':
                imgURL = 'assets/iconos/10d.png';
            break;

            case '10n':
                imgURL = 'assets/iconos/10n.png';
            break;

            case '11d':
                imgURL = 'assets/iconos/11d.png';
            break;

            case '11n':
                imgURL = 'assets/iconos/11n.png';
            break;

            case '13d':
                imgURL = 'assets/iconos/13d.png';
            break;

            case '13n':
                imgURL = 'assets/iconos/13n.png';
            break;

            case '50d':
                imgURL = 'assets/iconos/50d.png';
            break;

            case '50n':
                imgURL = 'assets/iconos/50n.png';
            break;
           }

           document.getElementById("cabecera__img").src = imgURL;

           //Temperatura de hoxe

           document.querySelector(".cabecera__h3").innerHTML = Math.round(data.main.temp) + "ºC";

           //Datos de detalle

           document.getElementById("sensacion").innerHTML = Math.round(data.main.feels_like) + "ºC";

           document.getElementById("temp_max").innerHTML = Math.round(data.main.temp_max) + "ºC";

           document.getElementById("temp_min").innerHTML = Math.round(data.main.temp_min) + "ºC";

           document.getElementById("visibilidade").innerHTML = (data.visibility)/1000 + "km";

           document.getElementById("humidade").innerHTML = data.main.humidity + "%";

           document.getElementById("vento").innerHTML = data.wind.speed + " km/h";


           //Amancer
           const timestampAmancer = data.sys.sunrise *1000;

           const dataAmancer = new Date(timestampAmancer);

           const horaAmancer = dataAmancer.getHours();
           const minutosAmancer = dataAmancer.getMinutes();

           const horaAmancerFormateada = `${horaAmancer}:${minutosAmancer} AM`;

           document.getElementById("amancer").innerHTML = horaAmancerFormateada;

           //Solpor
           const timestampSolpor = data.sys.sunset * 1000;

           const dataSolpor = new Date(timestampSolpor);

           const horaSolpor = dataSolpor.getHours();
           const minutosSolpor = dataSolpor.getMinutes();

           const horaSolporFormateada = `${horaSolpor}:${minutosSolpor} PM`

           document.getElementById("solpor").innerHTML = horaSolporFormateada;



           //Cambiar a cor do fondo en función do día ou noite

           function cambiarColorDeFondo() {
            const agora = new Date();
          
            // Determinar a clase de fondo en función da hora do día
            let claseFondo;
            if (agora >= dataAmancer && agora < dataSolpor) {
              // Estamos no día
              claseFondo = 'fondo-dia';
            } else {
              // Estamos na noite
              claseFondo = 'fondo-noite';
            }
          
            // Eliminar tódaslas clases existentes e engade a clase de fondo actual
            document.body.className = '';
            document.body.classList.add(claseFondo);
          }
          
          cambiarColorDeFondo();
          
          // Configurar un intervalo para verificar e cambiar a cor de fondo cada minuto
          setInterval(cambiarColorDeFondo, 60000); // 60000 milisegundos = 1 minuto

        }

    )
}

actualizaTempo(lat, lon)

//Menu toggle
let navMenu = document.getElementById("navMenu");

function mostrarDropdown(){
    navMenu.style.display = "block";
}

function cerrarDropdown() {
    navMenu.style.display = "none";
}