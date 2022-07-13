#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import shell from 'shelljs';
(async function(){

const answer = await inquirer.prompt([
        {
            type:'confirm',
            name:'multiframework',
            message: 'Is this a multiframework project?',
            default: false
        },
        {
            name:'name',
            message: 'What is your micro-frontend´s name?',
            default: 'my-microfrontend'
        },
        {
            type:'list',
            name:'type',
            message:'What type of micro-frontend do you want to create?',
            default: 'child',
            choices: ['child', 'container']
        },
        {
            type:'list',
            name:'framework',
            message:'What framework do you want to use?',
            default: 'react',
            choices: ['react', 'vue', 'angular','manilla.js']
        },
        {
            type:'input',
            name:'port',
            message:'What port do you want to use?',
            default:'8080'
        }

    ])
    .then(answer=>answer)
    const answers = {
        name: answer.name,
        type: answer.type,
        framework: answer.framework,
        port: answer.port
    }
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    //Creating required folders base
    fs.mkdirSync(`${answer.name}`,'0777',error=>(error))
    fs.mkdirSync(`${answer.name}/src`,'0777',error=>(error))
    fs.mkdirSync(`${answer.name}/src/assets`,'0777',error=>(error))
    fs.mkdirSync(`${answer.name}/public`,'0777',error=>(error))
    //Copyng required files base
    fs.copyFileSync(path.join(__dirname,'templates/base/.eslintrc.json'),`${answer.name}/.eslintrc.json`)
    fs.copyFileSync(path.join(__dirname,'templates/base/gitignore.txt'),`${answer.name}/.gitignore`)
    switch(answer.framework){
      case 'react':
        fs.mkdirSync(path.join(`${answer.name}/src/components`),'0777',error=>(error))
        fs.mkdirSync(path.join(`${answer.name}/src/hooks`),'0777',error=>(error))
        fs.mkdirSync(path.join(`${answer.name}/src/redux`),'0777',error=>(error))
        fs.mkdirSync(path.join(`${answer.name}/src/routes`),'0777',error=>(error))
        fs.copyFileSync(path.join(__dirname,'templates/react/App.js'),`${answer.name}/src/App.js`)
        fs.copyFileSync(path.join(__dirname,'templates/react/bootstrap.js'),`${answer.name}/src/bootstrap.js`)
        fs.copyFileSync(path.join(__dirname,'templates/react/index.js'),`${answer.name}/src/index.js`)
        fs.copyFileSync(path.join(__dirname,'templates/react/style.module.css'),`${answer.name}/src/style.module.css`)
        break;
      case 'vue':
        fs.mkdirSync(`${answer.name}/src/components`,'0777',error=>(error))
        fs.mkdirSync(`${answer.name}/src/router`,'0777',error=>(error))
        fs.mkdirSync(`${answer.name}/src/stores`,'0777',error=>(error))
        fs.mkdirSync(`${answer.name}/src/views`,'0777',error=>(error))
        fs.copyFileSync(path.join(__dirname,'templates/vue/App.vue'),`${answer.name}/src/App.vue`)
        fs.copyFileSync(path.join(__dirname,'templates/vue/bootstrap.js'),`${answer.name}/src/bootstrap.js`)
        fs.copyFileSync(path.join(__dirname,'templates/vue/index.js'),`${answer.name}/src/index.js`)
        fs.copyFileSync(path.join(__dirname,'templates/vue/router/index.js'),`${answer.name}/src/router/index.js`)
        fs.copyFileSync(path.join(__dirname,'templates/vue/stores/counter.js'),`${answer.name}/src/stores/counter.js`)
        
        break;
      case 'angular':
        break;
      case 'manilla.js':
        fs.mkdirSync(`${answer.name}/src/App`,'0777',error=>(error))
        fs.copyFileSync(path.join(__dirname,'templates/manilla.js/App.js'),`${answer.name}/src/App/App.js`)
        fs.copyFileSync(path.join(__dirname,'templates/manilla.js/style.module.css'),`${answer.name}/src/App/style.module.css`)
        fs.copyFileSync(path.join(__dirname,'templates/manilla.js/bootstrap.js'),`${answer.name}/src/bootstrap.js`)
        fs.copyFileSync(path.join(__dirname,'templates/manilla.js/index.js'),`${answer.name}/src/index.js`)
      default:
    }
    
    //Create webpack.config.js 
    const streamDeLectura = fs.createReadStream(path.join(__dirname,`templates/${answer.framework}/webpack.config.js`), {
        autoClose: true,
      });
      const streamDeEscritura = fs.createWriteStream(`${answer.name}/webpack.config.js`);
      streamDeLectura.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial.replace(8081, answer.port).replace("my-microfrontend", answer.name.toLowerCase());
        streamDeEscritura.write(textoParcialReemplazado);
      });
      streamDeEscritura.on("error", err => {
        console.log("Ha ocurrido un error en la escritura del archivo\n", { err });
      });
      streamDeLectura.on("error", err => {
        console.log("Ha ocurrido un error\n", { err });
      });
      
      streamDeLectura.on("end", () => {
        streamDeEscritura.close();
      });
      
      //Create package.json
      const streamPackageJsonR = fs.createReadStream(path.join(__dirname,`templates/${answer.framework}/package.json`), {
        autoClose: true,
      });
      const streamPackageJsonW = fs.createWriteStream(`${answer.name}/package.json`);
      streamPackageJsonR.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial.replace("my-microfrontend", answer.name.toLowerCase());
        streamPackageJsonW.write(textoParcialReemplazado);
      });
      streamPackageJsonW.on("error", err => {
        console.log("Ha ocurrido un error en la escritura del archivo\n", { err });
      });
      streamPackageJsonR.on("error", err => {
        console.log("Ha ocurrido un error\n", { err });
      });
      
      streamPackageJsonR.on("end", () => {
        streamPackageJsonW.close();
      });

      //Create index.html
      const streamHtmlR = fs.createReadStream(path.join(__dirname,`templates/${answer.framework}/index.html`), {
        autoClose: true,
      });
      const streamHtmlW = fs.createWriteStream(`${answer.name}/public/index.html`);
      streamHtmlR.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial.replace("my-microfrontend", answer.name.toLowerCase());
        streamHtmlW.write(textoParcialReemplazado);
      });
      streamHtmlW.on("error", err => {
        console.log("Ha ocurrido un error en la escritura del archivo\n", { err });
      });
      streamHtmlR.on("error", err => {
        console.log("Ha ocurrido un error\n", { err });
      });
      
      streamHtmlR.on("end", () => {
        streamHtmlW.close();
      });

      shell.echo(`
      Your '${answers.name}' project is ready to go.

      Next steps:

      ▶️   cd ${answers.name}
      ▶️   npm install
      ▶️   npm start
      `)

}
)()