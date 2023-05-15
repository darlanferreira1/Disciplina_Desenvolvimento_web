const PlacaDeVideo = ({nome,preco}) => {
    return (
        <div>
            <h1>Nome: {nome} Preço: {preco}</h1>
        </div>
    );
}

const PlacaMae = ({nome,preco}) => <h1>Nome: {nome} Preço: {preco}</h1>
const Memoria = ({nome,preco}) => <h1>Nome: {nome} Preço: {preco}</h1>

export {PlacaDeVideo,PlacaMae,Memoria}

//appjs

/* function App() {
    return(
      <div>
        <hr></hr>
        <PC.PlacaDeVideo nome="RTX 3090" preco={10300.99}/>
        <PC.PlacaMae nome="GygaByte" preco={1000.99}/>
        <PC.Memoria nome="DDR4" preco={600.99}/>
  
      </div> 
    )
  } */