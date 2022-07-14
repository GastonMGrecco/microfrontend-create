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
          ///regular expresion = /^[a-zA-Z0-9_]+$/g 
            name:'name',
            message: 'What is your micro-frontend´s name?',
            default: 'mymicrofrontend',
            validate: function(input){
              if(!input.match(/^[a-zA-Z0-9_]+$/g)){
                console.log('\t You can`t use spaces or special characters')
                return false
              }else{
                return true
              }
            }
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
            default:'8080',
            validate: function(input){
              if(!input.match(/^[0-9]+$/g)){
                console.log('\t You only can use numbers')
                return false
              }else{
                return true
              }
            }
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
    const fileName = answer.name[0].toUpperCase()+answer.name.toLowerCase().slice(1,answer.name.length)
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
        fs.copyFileSync(path.join(__dirname,'templates/react/App.js'),`${answer.name}/src/${fileName}.js`)
        fs.copyFileSync(path.join(__dirname,'templates/react/index.js'),`${answer.name}/src/index.js`)
        fs.copyFileSync(path.join(__dirname,'templates/react/style.module.css'),`${answer.name}/src/style.module.css`)
        break;
      case 'vue':
        fs.mkdirSync(`${answer.name}/src/components`,'0777',error=>(error))
        fs.mkdirSync(`${answer.name}/src/router`,'0777',error=>(error))
        fs.mkdirSync(`${answer.name}/src/stores`,'0777',error=>(error))
        fs.mkdirSync(`${answer.name}/src/views`,'0777',error=>(error))
        fs.copyFileSync(path.join(__dirname,'templates/vue/App.vue'),`${answer.name}/src/App.vue`)
        fs.copyFileSync(path.join(__dirname,'templates/vue/index.js'),`${answer.name}/src/index.js`)
        fs.copyFileSync(path.join(__dirname,'templates/vue/router/index.js'),`${answer.name}/src/router/index.js`)
        fs.copyFileSync(path.join(__dirname,'templates/vue/stores/counter.js'),`${answer.name}/src/stores/counter.js`)
        
        break;
      case 'angular':
        fs.copyFileSync(path.join(__dirname,'templates/angular/.babelrc'),`${answer.name}/.babelrc`)
        fs.copyFileSync(path.join(__dirname,'templates/angular/tsconfig.json'),`${answer.name}/tsconfig.json`)
        fs.copyFileSync(path.join(__dirname,'templates/angular/index.html'),`${answer.name}/public/index.html`)
        fs.copyFileSync(path.join(__dirname,'templates/angular/app.component.css'),`${answer.name}/src/app.component.css`)
        fs.copyFileSync(path.join(__dirname,'templates/angular/app.component.html'),`${answer.name}/src/app.component.html`)
        fs.copyFileSync(path.join(__dirname,'templates/angular/app.component.ts'),`${answer.name}/src/app.component.ts`)
        fs.copyFileSync(path.join(__dirname,'templates/angular/app.module.ts'),`${answer.name}/src/app.module.ts`)
        fs.copyFileSync(path.join(__dirname,'templates/angular/index.ts'),`${answer.name}/src/index.ts`)

        
        break;
      case 'manilla.js':
        fs.mkdirSync(`${answer.name}/src/App`,'0777',error=>(error))
        fs.copyFileSync(path.join(__dirname,'templates/manilla.js/AppCreatedWithJS.js'),`${answer.name}/src/App/AppCreatedWithJS.js`)
        fs.copyFileSync(path.join(__dirname,'templates/manilla.js/componentByHtmlLoader.html'),`${answer.name}/src/App/componentByHtmlLoader.html`)
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
        const textoParcialReemplazado = textoParcial.replace(8081, answer.port)
        .replace("my-microfrontend", answer.name.toLowerCase())
        .replace("./my-microfrontend",`./${fileName}`)
        .replace("./src/App.js",`./src/${fileName}.js`);
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
        const textoParcialReemplazado = textoParcial.replace("my-microfrontend", answer.name.toLowerCase())
        .replace("root", `app-${answer.name.toLowerCase()}`);
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

      //Create bootstrap.js or bootstrap.ts
    const streamDeLecturaB = fs.createReadStream(path.join(__dirname,`templates/${answer.framework}/bootstrap.${answer.framework === 'angular'? 'ts':'js'}`), {
      autoClose: true,
    });
    const streamDeEscrituraB = fs.createWriteStream(`${answer.name}/src/bootstrap.${answer.framework === 'angular'? 'ts':'js'}`);
    streamDeLecturaB.on("data", chunk => {
      const textoParcial = chunk.toString();
      const textoParcialReemplazado = textoParcial
      .replace("App", fileName)
      .replace("./App",`./${fileName}`)
      .replace("<App />",`<${answer.name} />`)
      .replace("root", `app-${answer.name.toLowerCase()}`)
      streamDeEscrituraB.write(textoParcialReemplazado);
    });
    streamDeEscrituraB.on("error", err => {
      console.log("Ha ocurrido un error en la escritura del archivo\n", { err });
    });
    streamDeLecturaB.on("error", err => {
      console.log("Ha ocurrido un error\n", { err });
    });
    
    streamDeLecturaB.on("end", () => {
      streamDeEscrituraB.close();
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