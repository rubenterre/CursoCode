<script>
import Puntuacion from "./Puntuacion.svelte";
  
  export let title;
  export let poster_path;
  export let vote_average;
  export let release_date;
  export let genre_ids;
  
  const genres = [
    {
      id: 28,
      name: "Acción",
    },
    {
      id: 12,
      name: "Aventura",
    },
    {
      id: 16,
      name: "Animación",
    },
    {
      id: 35,
      name: "Comedia",
    },
    {
      id: 80,
      name: "Crimen",
    },
    {
      id: 99,
      name: "Documental",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Familia",
    },
    {
      id: 14,
      name: "Fantasía",
    },
    {
      id: 36,
      name: "Historia",
    },
    {
      id: 27,
      name: "Terror",
    },
    {
      id: 10402,
      name: "Música",
    },
    {
      id: 9648,
      name: "Misterio",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Ciencia ficción",
    },
    {
      id: 10770,
      name: "Película de TV",
    },
    {
      id: 53,
      name: "Suspense",
    },
    {
      id: 10752,
      name: "Bélica",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

    //Identificar los generos con sus nombres, ya que la API proporciona unos códigos
    let generos = genre_ids.map(id => {
    let genre = genres.find(g => g.id === id);
    return genre ? ' ' + genre.name : `Género con ID ${id} no encontrado`;
  });

</script>

<div class="card">
  <div class="card__img">
    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
  </div>
  <div class="card__detalle">
    <div class="card__datos">
    <h4>{title}</h4>
    <p class="card__genero">{generos}</p>
    <p class="card__fecha">{release_date}</p>
    </div>
    <Puntuacion vote_average={vote_average} />
  </div>
</div>

<style>
  .card {
    display: flex;
    padding: 12px;
    background: #ffffff;
    border: 1px solid #e3e3e3;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 420px;
    height: 244px;
  position: relative;
  transform: scale(1, 1) translateZ(0px);
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  -webkit-font-smoothing: subpixel-antialiased;
  }

  .card:hover {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 2px 58px -16px;
  transform: scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px);
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  border-radius: 6px;
  border: 2px solid white;
}

  .card__img img {
    border-radius: 8px;
    width: 148px;
  }

  .card__detalle{
    margin-left: 10px;
  }

  .card__datos{
    height: 140px;
  }

  h4 {
    font-family: var(--fuente-principal);
    font-size: 1.2rem;
    font-weight: 500;
  }

  .card__genero {
    font-family: var(--fuente-principal);
    font-size: 1rem;
    font-weight: 400;
    word-wrap: break-word;
  }

  .card__fecha{
    font-family: var(--fuente-principal);
    font-size: 1rem;
    font-weight: 300;
  }

</style>
