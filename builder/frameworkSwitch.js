



const frameworkSwitch = (fs, path, __dirname, answer, fileName) => {

    switch(answer.framework){
        case 'react':
          fs.mkdirSync(path.join(`${answer.name}/src/components`),'0777',error=>(error))
          fs.mkdirSync(path.join(`${answer.name}/src/hooks`),'0777',error=>(error))
          fs.mkdirSync(path.join(`${answer.name}/src/redux`),'0777',error=>(error))
          fs.mkdirSync(path.join(`${answer.name}/src/redux/slices`),'0777',error=>(error))
          fs.mkdirSync(path.join(`${answer.name}/src/redux/slices/counter`),'0777',error=>(error))
          fs.mkdirSync(path.join(`${answer.name}/src/redux/store`),'0777',error=>(error))
          fs.mkdirSync(path.join(`${answer.name}/src/routes`),'0777',error=>(error))
          fs.copyFileSync(path.join(__dirname,'templates/react/redux/slices/counter/counterSlice.js'),`${answer.name}/src/redux/slices/counter/counterSlice.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/redux/slices/counter/index.js'),`${answer.name}/src/redux/slices/counter/index.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/redux/slices/counter/thunk.js'),`${answer.name}/src/redux/slices/counter/thunk.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/redux/store/index.js'),`${answer.name}/src/redux/store/index.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/hooks/useHook.js'),`${answer.name}/src/hooks/useHook.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/routes/Home.js'),`${answer.name}/src/routes/Home.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/routes/stylehome.module.css'),`${answer.name}/src/routes/stylehome.module.css`)
          fs.copyFileSync(path.join(__dirname,'templates/react/components/Logo.js'),`${answer.name}/src/components/Logo.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/components/Webpack.js'),`${answer.name}/src/components/Webpack.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/components/stylelogo.module.css'),`${answer.name}/src/components/stylelogo.module.css`)
          fs.copyFileSync(path.join(__dirname,'templates/react/components/stylewebpack.module.css'),`${answer.name}/src/components/stylewebpack.module.css`)
          fs.copyFileSync(path.join(__dirname,'templates/react/logo.svg'),`${answer.name}/src/assets/logo.svg`)
          fs.copyFileSync(path.join(__dirname,'templates/react/App.js'),`${answer.name}/src/${fileName}.js`)
          fs.copyFileSync(path.join(__dirname,'templates/react/style.module.css'),`${answer.name}/src/style.module.css`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components`)
          console.log(`${'CREATE'.green} ${answer.name}/src/hooks`)
          console.log(`${'CREATE'.green} ${answer.name}/src/redux`)
          console.log(`${'CREATE'.green} ${answer.name}/src/redux/slices`)
          console.log(`${'CREATE'.green} ${answer.name}/src/redux/slices/counter`)
          console.log(`${'CREATE'.green} ${answer.name}/src/redux/store`)
          console.log(`${'CREATE'.green} ${answer.name}/src/routes`)
          console.log(`${'CREATE'.green} ${answer.name}/src/redux/slices/counter/counterSlice.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/redux/slices/counter/index.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/redux/slices/counter/thunk.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/redux/store/index.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/hooks/useHook.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/Logo.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/Webpack.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/stylelogo.module.css`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/stylewebpack.module.css`)
          console.log(`${'CREATE'.green} ${answer.name}/src/routes/Home.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/routes/stylehome.module.css`)
          console.log(`${'CREATE'.green} ${answer.name}/src/assets/logo.svg`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${fileName}.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/style.module.css`)
          break;
        case 'vue':
          fs.mkdirSync(`${answer.name}/src/components`,'0777',error=>(error))
          fs.mkdirSync(`${answer.name}/src/router`,'0777',error=>(error))
          fs.mkdirSync(`${answer.name}/src/stores`,'0777',error=>(error))
          fs.mkdirSync(`${answer.name}/src/views`,'0777',error=>(error))
          fs.copyFileSync(path.join(__dirname,'templates/vue/App.vue'),`${answer.name}/src/${fileName}.vue`)
          fs.copyFileSync(path.join(__dirname,'templates/vue/router/index.js'),`${answer.name}/src/router/index.js`)
          fs.copyFileSync(path.join(__dirname,'templates/vue/stores/counter.js'),`${answer.name}/src/stores/counter.js`)
          fs.copyFileSync(path.join(__dirname,'templates/vue/logo.svg'),`${answer.name}/src/assets/logo.svg`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components`)
          console.log(`${'CREATE'.green} ${answer.name}/src/router`)
          console.log(`${'CREATE'.green} ${answer.name}/src/stores`)
          console.log(`${'CREATE'.green} ${answer.name}/src/src/views`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${fileName}.vue`)
          console.log(`${'CREATE'.green} ${answer.name}/src/router/index.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/stores/counter.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/assets/logo.svg`)
          break;
        case 'angular':
          fs.copyFileSync(path.join(__dirname,'templates/angular/.babelrc'),`${answer.name}/.babelrc`)
          fs.copyFileSync(path.join(__dirname,'templates/angular/tsconfig.json'),`${answer.name}/tsconfig.json`)
          fs.copyFileSync(path.join(__dirname,'templates/angular/index.html'),`${answer.name}/public/index.html`)
          fs.copyFileSync(path.join(__dirname,'templates/angular/app.component.css'),`${answer.name}/src/${answer.name.toLowerCase()}.component.css`)
          fs.copyFileSync(path.join(__dirname,'templates/angular/app.component.html'),`${answer.name}/src/${answer.name.toLowerCase()}.component.html`)
    
          //Create app.module.ts
          const streamMC = fs.createReadStream(path.join(__dirname,`templates/angular/app.module.ts`), {
            autoClose: true,
          });
          const streamMR = fs.createWriteStream(`${answer.name}/src/${answer.name.toLowerCase()}.module.ts`);
          streamMC.on("data", chunk => {
            const textoParcial = chunk.toString();
            const textoParcialReemplazado = textoParcial.replace(/AppModule/g, `${fileName}Module`)
            .replace(/AppComponent/g, `${fileName}Component`)
            .replace('./app.component', `./${answer.name.toLowerCase()}.component`)
            streamMR.write(textoParcialReemplazado);
          });
          streamMR.on("error", err => {
            console.log("Ha ocurrido un error en la escritura del archivo\n", { err });
          });
          streamMC.on("error", err => {
            console.log("Ha ocurrido un error\n", { err });
          });
          
          streamMC.on("end", () => {
            streamMR.close();
          });
          //Create app.component.ts
          const streamCR = fs.createReadStream(path.join(__dirname,`templates/angular/app.component.ts`), {
            autoClose: true,
          });
          const streamCC = fs.createWriteStream(`${answer.name}/src/${answer.name.toLowerCase()}.component.ts`);
          streamCR.on("data", chunk => {
            const textoParcial = chunk.toString();
            const textoParcialReemplazado = textoParcial.replace("app-angular", `app-${answer.name.toLowerCase()}`)
            .replace(/AppComponent/, `${fileName}Component`)
            .replace('./app.component.html', `./${answer.name.toLowerCase()}.component.html`)
            .replace('./app.component.css', `./${answer.name.toLowerCase()}.component.css`)
            streamCC.write(textoParcialReemplazado);
          });
          streamCC.on("error", err => {
            console.log("Ha ocurrido un error en la escritura del archivo\n", { err });
          });
          streamCR.on("error", err => {
            console.log("Ha ocurrido un error\n", { err });
          });
          
          streamCR.on("end", () => {
            streamCC.close();
          });
          console.log(`${'CREATE'.green} ${answer.name}/.babelrc`)
          console.log(`${'CREATE'.green} ${answer.name}/tsconfig.json`)
          console.log(`${'CREATE'.green} ${answer.name}/public/index.html`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${answer.name.toLowerCase()}.component.css`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${answer.name.toLowerCase()}.component.html`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${answer.name.toLowerCase()}.module.ts`)
          
          break;
        case 'vanillajs':
          fs.mkdirSync(`${answer.name}/src/Component`,'0777',error=>(error))
          fs.copyFileSync(path.join(__dirname,'templates/vanillajs/ComponentCreatedWithJS.js'),`${answer.name}/src/Component/ComponentCreatedWithJS.js`)
          fs.copyFileSync(path.join(__dirname,'templates/vanillajs/componentByHtmlLoader.html'),`${answer.name}/src/Component/componentByHtmlLoader.html`)
          fs.copyFileSync(path.join(__dirname,'templates/vanillajs/style.module.css'),`${answer.name}/src/Component/style.module.css`)
        
          console.log(`${'CREATE'.green} ${answer.name}/src/Component`)
          console.log(`${'CREATE'.green} ${answer.name}/src/Component/ComponentCreatedWithJS.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/Component/componentByHtmlLoader.html`)
          console.log(`${'CREATE'.green} ${answer.name}/src/Component/style.module.css`)
          
          break;
        case 'svelte':
          fs.copyFileSync(path.join(__dirname,'templates/svelte/App.svelte'),`${answer.name}/src/${fileName}.svelte`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${fileName}.svelte`)
          break;
        case 'vanillawc':
          fs.mkdirSync(`${answer.name}/src/components`,'0777',error=>(error))
          fs.mkdirSync(`${answer.name}/src/components/JS`,'0777',error=>(error))
          fs.mkdirSync(`${answer.name}/src/components/Webpack`,'0777',error=>(error))
          fs.copyFileSync(path.join(__dirname,'templates/vanillawc/JS/js.html'),`${answer.name}/src/components/JS/js.html`)
          fs.copyFileSync(path.join(__dirname,'templates/vanillawc/JS/Js.js'),`${answer.name}/src/components/JS/Js.js`)
          fs.copyFileSync(path.join(__dirname,'templates/vanillawc/Webpack/webpack.html'),`${answer.name}/src/components/Webpack/webpack.html`)
          fs.copyFileSync(path.join(__dirname,'templates/vanillawc/Webpack/Webpack.js'),`${answer.name}/src/components/Webpack/Webpack.js`)
          fs.copyFileSync(path.join(__dirname,'templates/vanillawc/Webpack/webpackstyle.css'),`${answer.name}/src/components/Webpack/webpackstyle.css`)
          fs.copyFileSync(path.join(__dirname,'templates/vanillawc/App.html'),`${answer.name}/src/${fileName}.html`)
          fs.copyFileSync(path.join(__dirname,'templates/vanillawc/style.css'),`${answer.name}/src/style.css`)
          
          
          //Create App.js 
      const streamDeLectura = fs.createReadStream(path.join(__dirname,`templates/${answer.framework}/App.js`), {
        autoClose: true,
      });
      const streamDeEscritura = fs.createWriteStream(`${answer.name}/src/${fileName}.js`);
      streamDeLectura.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial.replace(/app/g,`${answer.name.toLowerCase()}`)
        .replace('./App.html', `./${fileName}.html`)
        .replace(/App/g, `${fileName}`)
        .replace(/name/g,`${answer.name.toLowerCase()}-app`)
  
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

          console.log(`${'CREATE'.green} ${answer.name}/src/components`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/JS`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/Webpack`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/JS/js.html`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/JS/Js.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/Webpack/webpack.html`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/Webpack/Webpack.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/Webpack/webpackstyle.css`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${fileName}.html`)
          console.log(`${'CREATE'.green} ${answer.name}/src/style.css`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${fileName}.js`)
  
          break;
        case 'lit':
          fs.mkdirSync(`${answer.name}/src/components`,'0777',error=>(error))
          fs.mkdirSync(`${answer.name}/src/components/JS`,'0777',error=>(error))
          fs.mkdirSync(`${answer.name}/src/components/Webpack`,'0777',error=>(error))
          fs.copyFileSync(path.join(__dirname,'templates/lit/Webpack/Webpack.js'),`${answer.name}/src/components/Webpack/Webpack.js`)
          fs.copyFileSync(path.join(__dirname,'templates/lit/JS/Js.js'),`${answer.name}/src/components/JS/Js.js`)
          fs.copyFileSync(path.join(__dirname,'templates/lit/stylesheet.css'),`${answer.name}/src/stylesheet.css`)

          
          //Create App.js 
      const streamDeLecturaLit = fs.createReadStream(path.join(__dirname,`templates/lit/Lit.js`), {
        autoClose: true,
      });
      const streamDeEscrituraLit = fs.createWriteStream(`${answer.name}/src/${fileName}.js`);
      streamDeLecturaLit.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial.replace('lit-app',`${answer.name.toLowerCase()}-app`)
        .replace(/LitApp/g,`${fileName}`)
        streamDeEscrituraLit.write(textoParcialReemplazado);
      });
      streamDeEscrituraLit.on("error", err => {
        console.log("Ha ocurrido un error en la escritura del archivo\n", { err });
      });
      streamDeLecturaLit.on("error", err => {
        console.log("Ha ocurrido un error\n", { err });
      });
      
      streamDeLecturaLit.on("end", () => {
        streamDeEscrituraLit.close();
      });

          console.log(`${'CREATE'.green} ${answer.name}/src/components`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/JS`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/Webpack`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/Webpack/Webpack.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/components/JS/Js.js`)
          console.log(`${'CREATE'.green} ${answer.name}/src/stylesheet.css`)
          console.log(`${'CREATE'.green} ${answer.name}/src/${fileName}.js`)
        break;
  
        default:
      }





}

export default frameworkSwitch;