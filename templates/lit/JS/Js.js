import {LitElement, html, css} from 'lit';

export class Js extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }
  static styles = css`
  img{
    width: 25vw;
    height: 25vw;
  }
  `;
  render() {
    return html`
    <img src="https://seeklogo.com/images/L/lit-logo-6B43868CDC-seeklogo.com.png"/>
    `;
  }
}
customElements.define('js-image', Js);
