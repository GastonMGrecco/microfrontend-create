import { div } from './App/App'

const mount = (element) => {
  return (
            element.appendChild(div) 
         )
};
mount(root);
export { mount };
