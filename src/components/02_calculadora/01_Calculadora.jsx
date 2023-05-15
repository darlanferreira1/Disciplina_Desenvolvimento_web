const Calculadora = () => {
    
    const somar = (x,y) => {
        return x+y;
    }

    // arrow function com return implicito
    const subtrair = (x,y) => x - y; 

    function multiplicar(x,y){
        return x*y;
    }

    const dividir = (x,y) => x / y;  
 
    
    return(
        <div>
            <h1>O resultado da soma é: {somar(10,5)}</h1>
            <h1>O resulttado da subtração é: {subtrair(10,5)}</h1>
            <h1>O resulttado da multiplicação é: {multiplicar(10,5)}</h1>
            <h1>O resulttado da divisão é: {dividir(10,5)}</h1>
        </div>
    );
}

export default Calculadora;