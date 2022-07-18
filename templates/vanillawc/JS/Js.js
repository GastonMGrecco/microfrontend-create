import js from './js.html';

class Js extends HTMLElement {
    constructor () {
      super();
    }
  
    connectedCallback () {
      this.innerHTML =js
    }
  }
  
  window.customElements.define('js-image', Js);

export default Js;