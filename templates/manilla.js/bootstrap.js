const app = `<div style="display: column; 
                justify-content: center; 
                align-content: center">
                    <h1 style="text-align: center; 
                    font-size: 50px; color: gray">
                    This is my Microfrontend Manilla
                    </h1>
                    <img
                    style="
                        width: 50vw;
                        text-align: center;
                        border-radius: 10px;
                        box-shadow: 5px 5px 5px 5px gray;
                        margin-left: 25%;
                    "
                    src="https://th.bing.com/th/id/R.a69a6cf8afb4027e2352b871e0b95ad0?rik=iGHrUigS4tapKQ&pid=ImgRaw&r=0"
                    />
            </div>`
const root = document.getElementById('root');

const mount = (element) => {
  return (
            element.innerHTML = app
         )
};
mount(root);
export { mount };
