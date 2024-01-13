<script>

  export let vote_average;

</script>

<div class="puntuacion">
  <div class="puntuacion__barra">
    <progress value={vote_average} max="10"></progress>
    <p class="progress-text">{vote_average}/10</p>
  </div>
  <div class="puntuacion__nombre">
    <p>Puntuación de los usuarios</p>
  </div>
</div>

<style>
  .puntuacion {
    display: flex;
    background: #ffffff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px 0px 10px 10px;
    margin: 10px 0px;
  }

  .puntuacion__barra{
    width: 120px;
  }

  .puntuacion__nombre{
    padding-left: 11px;
  }

  progress {
    width: 100%;
    height: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }

  progress::-webkit-progress-value {
    background-color: #4caf50;
  }

  progress::-webkit-progress-bar {
    background-color: #f2f2f2;
  }

  .progress-text {
    font-size: 1rem;
    color: #333;
  }
</style>
