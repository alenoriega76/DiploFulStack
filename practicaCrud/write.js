const fs=require('fs')
const {read}= require('./read');

const write=(array)=>{
     const data = JSON.stringify(array)
    fs.writeFileSync('./data.jsom',data)
    return data 
}
module.exports={write}