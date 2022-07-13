//import tags created by JavaScript
import { div } from './App/AppCreatedWithJS'

//import html file converted to string by html-loader from webpack.config.js
import example from './App/componentByHtmlLoader.html'

//create a DOMparser proptype 
const parser = new DOMParser();

//create a tag from string
const tag = parser.parseFromString(example, "text/html").querySelector('div');

//Append tag created into div
div.appendChild(tag)
const mount = (element) => {
  return (
            element.appendChild(div) 
         )
};
mount(root);
export { mount };