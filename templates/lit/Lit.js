import { LitElement, html, css } from 'lit';
import './components/JS/Js';
import './components/Webpack/Webpack';

export class LitApp extends LitElement {
  static properties = {
    version: {}
  };

  constructor () {
    super();
    this.version = 'STARTING';
  }
  static styles = css`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(32, 32, 32);
}
  .container{
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
  }
  h1{
    font-size: 30px;
    color:white;
    text-align:center;
  }
  .container2{
    width:100vw;
    height:50vh;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
  }
  @media (min-width: 768px) {
   .container2{
     flex-direction:row;
   } 
   h1{
    font-size: 50px;
   }
  }
  `;
  render () {
    return html`
    <div class="container">
        <h1>This is my Microfrontend Lit</h1>
        <div class="container2">
            <js-image></js-image> 
            <logo-webpack></logo-webpack> 
        </div>
    </div>
    `;
  }
}
customElements.define('lit-app', LitApp);
