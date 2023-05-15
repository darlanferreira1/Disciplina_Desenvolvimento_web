const Filho = ({altura,peso}) => {
    
    
    const calcularIMC = () => peso / (altura * altura);

    const RenderizarMensagem = (imc) => {
        if(imc < 18 ){ 
            return(
                <h1> Abaixo Do Peso</h1>
            );
        }else if(imc >25){
            return(
                <h1>Acima Do Peso</h1>
            );
        }else{
            return(
                <h1>Peso Ideal</h1>
            );
        }
    }
    
    const imc = calcularIMC(altura,peso);
    
    //main
    return(
        <div>
            <h1>Meu IMC é: {imc.toFixed(2)}</h1>
            {RenderizarMensagem(imc)}
        </div>
    );
}

export default Filho;