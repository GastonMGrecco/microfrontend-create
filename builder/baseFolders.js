const baseFolders = (fs, answer) => {

     //Creating required folders base
     fs.mkdirSync(`${answer.name}`,'0777',error=>(error))
     fs.mkdirSync(`${answer.name}/src`,'0777',error=>(error))
     fs.mkdirSync(`${answer.name}/src/assets`,'0777',error=>(error))
     fs.mkdirSync(`${answer.name}/public`,'0777',error=>(error))
     console.log(`${'\nCREATE'.green} ${answer.name}`)
     console.log(`${'CREATE'.green} ${answer.name}/src`)
     console.log(`${'CREATE'.green} ${answer.name}/src/assets`)
     console.log(`${'CREATE'.green} ${answer.name}/public`)
}

export default baseFolders;