import './components/JS/Js'
import './components/Webpack/Webpack'
import app from './App.html'
class App extends HTMLElement {
    constructor () {
      super();
    }
  
    connectedCallback () {
      this.innerHTML = app
    }
  }
  
  window.customElements.define('name', App);

export default App;