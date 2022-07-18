import webpackLogo from './webpack.html';
import './webpackstyle.css';

var set_interval;
var interval_delay = 2000;
var interval_running = false;

var i = 0;
var rotateValue1 = 90;
var rotateValue2 = -90;
var topFace = [
  '1px 6px 6px 1px',
  '1px 1px 6px 6px',
  '6px 1px 1px 6px',
  '6px 6px 1px 1px',
];
var side1 = ['1px 6px 6px 1px', '1px 1px 6px 6px', '1px', '1px'];
var side2 = ['1px', '1px', '1px 1px 6px 6px', '1px 6px 6px 1px'];
var side3 = ['1px 6px 6px 1px', '1px', '1px', '1px 1px 6px 6px'];
var side4 = ['1px', '1px 6px 6px 1px', '1px 1px 6px 6px', '1px'];

document.querySelector('body').onload = function () {
  webpackAnimation();
  set_interval = setInterval(webpackAnimation, interval_delay);
};

function webpackAnimation() {
  interval_running = true;

  document.querySelector('.cube1').style.transform =
    'rotateY(' + rotateValue1 + 'deg)';
  if (i > 3) {
    i = 0;
  }

  document.querySelector('.cube1 .face_top').style.borderWidth = topFace[i];
  document.querySelector('.cube1 .face_side_1').style.borderWidth = side1[i];
  document.querySelector('.cube1 .face_side_2').style.borderWidth = side2[i];
  document.querySelector('.cube1 .face_side_3').style.borderWidth = side3[i];
  document.querySelector('.cube1 .face_side_4').style.borderWidth = side4[i];

  rotateValue1 = rotateValue1 + 90;
  i++;

  document.querySelector('.cube2').style.transform =
    'translate(-50%, -50%) scale3d(0.5, 0.5, 0.5) rotateY(' +
    rotateValue2 +
    'deg)';

  rotateValue2 = rotateValue2 - 90;
}

// Set the name of the "hidden" property and the change event for visibility
var hidden, visibilityChange;
if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.mozHidden !== 'undefined') {
  // Firefox up to v17
  hidden = 'mozHidden';
  visibilityChange = 'mozvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  // Chrome up to v32, Android up to v4.4, Blackberry up to v10
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

function handleVisibilityChange() {
  if (document[hidden]) {
    clearInterval(set_interval);
    interval_running = false;
  } else {
    clearInterval(set_interval);
    if (!interval_running)
      set_interval = setInterval(webpackAnimation, interval_delay);
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (
  typeof document.addEventListener === 'undefined' ||
  typeof document[hidden] === 'undefined'
) {
  alert(
    'This demo requires a modern browser that supports the Page Visibility API.'
  );
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

class WebpackLogo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = webpackLogo
  }
}

window.customElements.define('logo-webpack', WebpackLogo);

export default WebpackLogo;
