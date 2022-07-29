const bootstrapFile = (fs, path, __dirname, answer, fileName) => {
    const streamDeLecturaB = fs.createReadStream(path.join(__dirname,`templates/${answer.framework}/bootstrap.${answer.framework === 'angular'? 'ts':'js'}`), {
        autoClose: true,
      });
      const streamDeEscrituraB = fs.createWriteStream(`${answer.name}/src/bootstrap.${answer.framework === 'angular'? 'ts':'js'}`);
      streamDeLecturaB.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial
        .replace("App", fileName)
        .replace("./App",`./${fileName}`)
        .replace("<App />",`<${fileName} />`)
        .replace("root", `app-${answer.name.toLowerCase()}`)
        .replace("./app.module",`./${answer.name.toLowerCase()}.module`)
        .replace(/ModuleAng/g,`${fileName}Module`)
        .replace(/AppVue/g,`${fileName}`)
        .replace('./src/App.vue',`./src/${fileName}.vue`)
        .replace(`create${fileName}`,'createApp')
        .replace('./App.svelte',`./${fileName}.svelte`)
        .replace('main',`${answer.name.toLowerCase()}`)
        .replace(/Svelte/g,`${fileName}`)
        .replace(`<my-app />`,`<${answer.name.toLowerCase()}-app />`)
        .replace('./Lit.js',`./${fileName}.js`)
        .replace('<lit-app></lit-app>',`<${answer.name.toLowerCase()}-app></${answer.name.toLowerCase()}-app>`)
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
      console.log(`${'CREATE'.green} ${answer.name}/src/bootstrap.${answer.framework==='angular'? 'ts':'js'}`)
}
export default bootstrapFile;