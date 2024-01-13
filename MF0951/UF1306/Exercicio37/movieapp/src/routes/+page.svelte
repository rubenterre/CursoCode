<script>
  export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  import Card from "./components/Card.svelte";
  import { fly } from 'svelte/transition';

  let searchTerm = "";
  let movies = [];

  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=es-ES`
    );
    const data = await response.json();
    movies = data.results;
    searchTerm = " ";
  };
</script>

<main>
  <div class="cabecera">
    <h1>Bienvenidos</h1>
    <h2>
      Millones de películas, programas de televisión y personas por descubrir.
      Explora ahora.
    </h2>
  </div>

  <section>
    <div class="buscador">
      <input
        bind:value={searchTerm}
        placeholder="Escribe el nombre de una película"
      />
      <button on:click={searchMovies}>Buscar</button>
    </div>

    {#if movies.length > 0}
      <div class="resultados" transition:fly={{ y: 200, duration: 2000 }}>
        {#each movies as movie (movie.id)}
        <Card title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} release_date={movie.release_date} genre_ids={movie.genre_ids}/>
        {/each}
      </div>
    {:else}
      <p>No hay películas encontradas</p>
    {/if}
  </section>
</main>

<style>
  .cabecera {
    padding: 40px 0px;
  }

  section{
    margin: 0px 20px;
  }

  .buscador {
    display: flex;
    place-content: center;
    padding: 20px 0px;
    margin-bottom: 40px;
  }

  .buscador input {
    background: #ffffff;
    border: 1px solid #e3e3e3;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 15px 10px;
    width: 386px;
  }

  input::placeholder {
    color: var(--color-principal);
  }

  .buscador button {
    background-image: linear-gradient(90deg, #8fcea1 0%, #01b4e5 100%);
    border: 1px solid #e3e3e3;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 15px 10px;
    color: white;
    font-family: var(--fuente-principal);
    font-weight: 500;
    margin-left: 15px;
    width: 99px;
  }

  h1 {
    font-family: var(--fuente-principal);
    font-weight: 600;
    text-align: center;
    font-size: 2rem;
  }

  h2 {
    font-family: var(--fuente-principal);
    font-weight: 400;
    text-align: center;
    font-size: 1.4rem;
  }

  .resultados{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
</style>
