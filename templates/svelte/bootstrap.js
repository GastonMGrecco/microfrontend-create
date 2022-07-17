import Svelte from './App.svelte' 


const app = new Svelte({
  target: document.querySelector('main'),
  props: {
    name: 'Svelte',
  }, 
})

