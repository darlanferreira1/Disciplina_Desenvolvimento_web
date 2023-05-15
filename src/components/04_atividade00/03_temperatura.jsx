const Temperatura = () => {
    
    const celsiusParaFahrenheit = (celsius) => (9*celsius + 160)/5;
    const fahrenheitParaCelsius = (farenheit) => (farenheit-32)*5/9;
      
    const kelvin = (kelvin) =>{
        const celsius = kelvin - 273;
        const farenheit = (kelvin - 273)*9/5 + 32;
        
        return{celsius,farenheit}; // propiedade : variável
    }

    //temperatura que quero converter
    const c = 30;
    const f = 67;
    const k = 300;

    ///main
    return(
        <div>
            <h1>Conversor de Temperatura</h1>
            <h1>A temperatura {c} Celsius para Farenheit é: {celsiusParaFahrenheit(c)}</h1>
            <h1>A temperatura {f} Farenheit para Celsius é: {fahrenheitParaCelsius(f)}</h1>
            
            {/* vo */}
            {/* JSON.stringify() converte um objeto JSON para string */}
            {/* <h1>A temperatura {k} Kelvin é: {JSON.stringify(kelvin(k))}</h1> */}

            {/* v1         */}
            {/* tratando o objeto JSON como objeto mesmo usando a notação de ponto */}
            <h1>A temperatura {k} Kelvin em Farenheit é: {kelvin(k).farenheit} e em Celsius é {kelvin(k).celsius}</h1>
        </div>
    );
}

// função no app js
/* function App() {
    return(
      <Temperatura  /> 
    );
} */
  


export default Temperatura;