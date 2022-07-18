import './App'
import './style.css'





class Main extends HTMLElement {
  constructor () {
    super();
    this.name;
    this.value;

  }

  static get observedAttributes() {
    return ['name','value']
  }

  attributeClalengeCallback (atribute,oldatribute,newatribute) {
      switch(atribute){
        case 'name':
          this.name = newatribute
          break;
        case 'value':
          this.value = newatribute
          break;
        default:
      }
  }

  connectedCallback () {
    this.innerHTML=`<my-app />`;
   
  }
}

window.customElements.define('principal-app', Main);
