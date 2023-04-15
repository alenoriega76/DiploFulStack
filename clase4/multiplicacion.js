const multiplicar = ((num1,num2)=>{
    if(num2 == 0){
        return console.log (" No es posible realizar la operacion")
    }else{
        let resultado = num1 *num2
         console.log ( "El reusltado de la multiplicaion es: " + resultado)
    }

});

multiplicar(0,0);

module.exports= {multiplicar};