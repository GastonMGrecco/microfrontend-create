# microfrontend-create

## Description
This is a microfrontend project builder through webpack v5 (ModuleFederationPlugin). You can create a 'container' or 'child' microfrontend. You will also be able to decide under which development environment to work, be it 'React', 'Vue', 'Angular', 'Svelte' , 'Vanillajs', 'Vanillawc' (web-components) or 'Lit'

<img src="https://avatars.githubusercontent.com/u/61727377?s=280&v=4" height=200/>
<img src=https://miro.medium.com/max/1400/1*KrcqaSrNLLg-Qycd1M_D2A.jpeg height=200/>

### From @1.4.0 version 

Since version @1.4.0 you can create a simple microfrontend without big problems, but I am working to make this a great generator (be patient).

#### Node.js
Required 16.14.2 version or higher

#### Install

`$ npm install microfrontend-create -g`

#### Create project
`$ npx microfrontend-create`

#### Usage
>First

`path/where/you/will/create/project>$ npx microfrontend-create`

> You can create a microfrontend only using one framework multiframework. Default value is "No". I suggest choose "N"(No) if you will only use one frameword, but if you will convine multiples frameworks should choose "y"(Yes).

`? Is this a multiframework project? (y/N) __`

> Write your microfront project name. Avoid write spaces. Default value is "my-microfrontend".

`? What is your micro-frontend´s name? (my-microfrontend) __`

> This opcion will only afect to some ModuleFederationPlugin configuration into "webpack.config.js" file. Default value is "child"

`? What type of micro-frontend do you want to create? __`
`>child`
`>container`

>Choose your framework. Default value is "react"

`? What framework do you want to use? __`
`>react`
`>vue`
`>angular`
`>manilla`

>Choose port to run in development enviroment. Default value is "8080".
By convention port 8080 is used for the container. Either way, you can change this value inside the "webpack.config.js" file whenever you want.

`? What port do you want to use? (8080)`
` CREATE mymicrofrontend `

` CREATE mymicrofrontend/src`

` CREATE mymicrofrontend/src/assets `  

` CREATE mymicrofrontend/public   ` 

` CREATE mymicrofrontend/.eslintrc.json`

` CREATE mymicrofrontend/.gitignore`

` CREATE mymicrofrontend/src/index.js`

` CREATE mymicrofrontend/src/components`

` CREATE mymicrofrontend/src/hooks`

` CREATE mymicrofrontend/src/redux`

` CREATE mymicrofrontend/src/routes`

` CREATE mymicrofrontend/src/components/Logo.js`

` CREATE mymicrofrontend/src/components/stylelogo.module.css`

` CREATE mymicrofrontend/src/assets/logo.svg`

` CREATE mymicrofrontend/src/Mymicrofrontend.js`

` CREATE mymicrofrontend/src/style.module.css`

` CREATE mymicrofrontend/src/webpack.config.js`

` CREATE mymicrofrontend/public/index.html`

` CREATE mymicrofrontend/src/bootstrap.js`


` Your 'mymicrofrontend' microfrontend have been created successfully !!! `


` Next steps:`

`▶️   cd my-microfrontend`

`▶️   npm install or npm i`

`▶️   npm start`

### Contact me
gastonmgrecco@gmail.com