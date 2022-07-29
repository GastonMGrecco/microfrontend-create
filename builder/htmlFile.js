const htmlFile = (fs, path, __dirname, answer) => {
    const streamHtmlR = fs.createReadStream(path.join(__dirname,`templates/${answer.framework}/index.html`), {
        autoClose: true,
      });
      const streamHtmlW = fs.createWriteStream(`${answer.name}/public/index.html`);
      streamHtmlR.on("data", chunk => {
        const textoParcial = chunk.toString();
        const textoParcialReemplazado = textoParcial.replace("my-microfrontend", answer.name.toLowerCase())
        .replace("root", `app-${answer.name.toLowerCase()}`)
        .replace("<app-angular>",`<app-${answer.name.toLowerCase()}>`)
        .replace("</app-angular>",`</app-${answer.name.toLowerCase()}>`)
        .replace('<main></main>',`<${answer.name.toLowerCase()}></${answer.name.toLowerCase()}>`)
        
        
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
      console.log(`${'CREATE'.green} ${answer.name}/public/index.html`)
}

export default htmlFile;