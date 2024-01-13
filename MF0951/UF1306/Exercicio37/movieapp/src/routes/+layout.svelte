<script>
  import Header from "./components/Header.svelte";
</script>

<Header/>
<slot/>

<style>
    :global(*) {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    
    :global(body) {
     background: white;
     color: black;
     -webkit-font-smoothing: antialiased;
    }
    
    :global(body,input, button) {
     font-size: 16px;
     font-family: var(--fuente-principal);
    }
    
    :global(button) {
     cursor: pointer;
    }

    @font-face {
    font-family: 'Source Sans';
    src: url(/fonts/SourceSans3-VariableFont_wght.ttf);
    }

    :root{
        --color-principal: #032541;
        --color-secundario: #8FCEA1;
        --color-terciario:#01B4E5;
        --fuente-principal: Source Sans;
    }

</style>