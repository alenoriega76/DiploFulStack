const fs = require('fs');

const read =(data)=>{
    const data = fs.readFileSync('./data.json', 'utf-8');
    const dataPased= JSON.parse(data);
    return dataPased
}
module.exports= {read}