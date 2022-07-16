import style from './style.module.css'

//Create html tags

const div = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');    
const img = document.createElement('img');


//Add values 

h1.innerHTML = 'This is my Microfrontend VanillaJS';
h2.innerHTML = 'Hello!, I am a component created through JavaScript'
//add properties to tags

img.src="https://wickedev.com/wp-content/uploads/2021/12/javascript-1080x675.jpg";

//Add clasName to be able to use style.modules

div.className = style.div
h1.className = style.h1
h2.className = style.h2
img.className = style.img

//Join tags with container tag

div.appendChild(h1)
div.appendChild(h2)
div.appendChild(img)

export { div }