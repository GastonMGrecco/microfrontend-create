import { LitElement, html, css } from 'lit';

export class WebpackLogo extends LitElement {
  static properties = {
    
  };
  constructor() {
    super();
  }

  static styles = css`
    #ptop{
      visibility: hidden;
    }
    #pbottom{
      visibility: hidden;
    }
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap:45px;
      align-items: center;
      position: relative;
      width: 22vw;
      height: 22vw;
    }
    .containerCubo{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      position: relative;
      width: 22vw;
      height: 22vw;
      zoom:50%;
    }
    .cube {
      position: absolute;
      margin: 200px;
      height: 200px;
      width: 200px;
      transform-style: preserve-3d;
      transform: rotateX(-33.5deg) rotateY(45deg);
    }
    .cube_inner,
    .cube_outer {
      position: absolute;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
    .cube_outer {
      animation: outerspin 5s ease 2s infinite;
    }
    .cube_inner {
      top: -2px;
      transform: scale3d(0.5, 0.5, 0.5);
      animation: innerspin 5s ease 2s infinite;
    }

    .cube_inner > div,
    .cube_outer > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 2px solid #fff;
    }
    .cube_outer > div {
      background: rgba(141, 214, 249, 0.5);
      animation-fill-mode: none !important;
    }
    .cube_inner > div {
      background: #1d78c1;
      backface-visibility: hidden;
    }
    .front {
      transform: translateZ(100px);
    }
    .back {
      transform: rotateX(180deg) translateZ(100px);
    }
    .left {
      transform: rotateY(-90deg) translateZ(100px);
    }
    .right {
      transform: rotateY(90deg) translateZ(100px);
    }
    .top {
      transform: rotateX(90deg) translateZ(100px);
    }
    .bottom {
      transform: rotateX(-90deg) translateZ(100px);
    }
    @keyframes outerspin {
      from {
        transform: rotateY(0deg);
      }
      20%,
      to {
        transform: rotateY(90deg);
      }
    }
    @keyframes innerspin {
      from {
        transform: rotateY(0deg) scale3d(0.5, 0.5, 0.5);
      }
      20%,
      to {
        transform: rotateY(-90deg) scale3d(0.5, 0.5, 0.5);
      }
    }
    .cube_outer > .front {
      border-width: 1px 6px 6px 1px;
      animation: frontborder 5s ease 2s infinite;
    }

    .cube_outer > .back {
      border-width: 1px 1px 6px 6px;
      animation: backborder 5s ease 2s infinite;
    }
    .cube_outer > .left {
      border-width: 1px 1px 6px 6px;
      animation: sideborder 5s ease 2s infinite;
    }
    .cube_outer > .right {
      border-width: 6px 1px 1px 6px;
      animation: sideborder 5s ease 2s infinite;
    }
    .cube_outer > .top {
      border-width: 6px 6px 1px 1px;
      animation: topborder 5s ease 2s infinite;
    }
    .cube_outer > .bottom {
      border-width: 6px 1px 1px 6px;
      animation: topborder 5s ease 2s infinite;
    }
    @keyframes frontborder {
      from {
        border-width: 1px 6px 6px 1px;
      }
      20%,
      to {
        border-width: 6px 1px 1px 6px;
      }
    }
    @keyframes backborder {
      from {
        border-width: 1px 1px 6px 6px;
      }
      20%,
      to {
        border-width: 6px 6px 1px 1px;
      }
    }
    @keyframes sideborder {
      from {
        border-right-width: 1px;
        border-left-width: 6px;
      }
      20%,
      to {
        border-right-width: 6px;
        border-left-width: 1px;
      }
    }
    @keyframes topborder {
      from {
        border-top-width: 6px;
        border-bottom-width: 1px;
      }
      20%,
      to {
        border-top-width: 1px;
        border-bottom-width: 6px;
      }
    }
    @media (min-width: 768px) {
      .containerCubo{
        zoom:100%;
      }
      .container{
        gap:115px;
      }
      #ptop{
        visibility:visible;
      }
      #pbottom{
        visibility:visible;
      }
    }
  `;

  render() {
    return html`
      <div style="position:relative">
        <div class="container">
          <p
            id="ptop"
            style="color:white; font-size:30px;margin-bottom: 50px;text-align: center;"
          >
            Webpack 5
          </p>
          <div class="containerCubo">
            <div class="cube">
              <div class="cube_inner">
                <div class="front"></div>
                <div class="back"></div>
                <div class="left"></div>
                <div class="right"></div>
                <div class="top"></div>
                <div class="bottom"></div>
              </div>
              <div class="cube_outer">
                <div class="front"></div>
                <div class="back"></div>
                <div class="left"></div>
                <div class="right"></div>
                <div class="top"></div>
                <div class="bottom"></div>
              </div>
            </div>
          </div>

          <p
            id="pbottom"
            style="color:white; font-size:30px;margin-top: 50px;text-align: center;"
          >
            ModuleFederationPlugin
          </p>
        </div>
      </div>
    `;
  }
}
customElements.define('logo-webpack', WebpackLogo);
