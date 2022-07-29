const webpackFile = (fs, path, __dirname, answer, fileName ) => {
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
        .replace("./src/App.js",`./src/${fileName}.js`)
        .replace("./src/App.vue",`./src/${fileName}.vue`)
        .replace("./src/App.svelte",`./src/${fileName}.svelte`);
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
      console.log(`${'CREATE'.green} ${answer.name}/src/webpack.config.js`)
}

export default webpackFile;