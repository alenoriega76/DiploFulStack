const dividir= ( (num1,num2)=>{
    if ( num1 == 0  || num2 == 0  ){
        return console.log(" NO  se puede dividir  por  0 ")
    }else{
        let resultado = num1 / num2
        console.log( "El resultado de la division es. "+ resultado)
    }
})

dividir(8,0);

module.exports = { dividir };