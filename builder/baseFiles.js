const baseFiles = (fs, path, __dirname, answer) => {

     //Copyng required files base
     fs.copyFileSync(path.join(__dirname,'templates/base/.eslintrc.json'),`${answer.name}/.eslintrc.json`)
     fs.copyFileSync(path.join(__dirname,'templates/base/gitignore.txt'),`${answer.name}/.gitignore`)
     fs.copyFileSync(path.join(__dirname,'templates/base/index.js'),answer.framework==='angular'?`${answer.name}/src/index.ts`:`${answer.name}/src/index.js`)
     console.log(`${'CREATE'.green} ${answer.name}/.eslintrc.json`)
     console.log(`${'CREATE'.green} ${answer.name}/.gitignore`)
     console.log(`${'CREATE'.green} ${answer.name}/src/index.${answer.framework==='angular'? 'ts':'js'}`)
}

export default baseFiles;