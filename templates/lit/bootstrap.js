import { LitElement, html, css } from 'lit';
import './Lit.js';
import './stylesheet.css';
export class MyElement extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
  }
  static styles = css`
    
  `;
  render() {
    return html` <lit-app></lit-app> `;
  }
}
customElements.define('my-element', MyElement);
