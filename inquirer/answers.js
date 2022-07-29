import inquirer from 'inquirer';
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
        choices: ['react', 'vue', 'angular','svelte','vanillajs','vanillawc','lit']
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

export default answer;