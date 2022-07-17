<script>
  export let name; 
</script>


<div class="main">
  <h1>This is my Microfrontend {name}!</h1>
  <img src="https://raw.githubusercontent.com/fiorelorenzo/svelte-splide/HEAD/images/svelte-logo.png" alt='logo svelte'/>
</div>

<style>
  :global(body) {
    background-color:  rgb(32,35,42);
    color: white;
  }
  .main {
   
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
    
  }
  h1 {
    font-size: 50px;
    
}
img {
    width: 30vw;
    height: 50vh;
    
   
}
</style>
