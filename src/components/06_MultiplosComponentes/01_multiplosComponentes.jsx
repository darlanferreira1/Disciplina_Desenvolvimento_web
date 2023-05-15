const Header = () => {
    return (
        <div>
            <h1>Isso é um cabeçalho</h1>
        </div>
    );
}

const Body = () => {
    return (
        <div>
            <h1>Isso é um corpo</h1>
        </div>
    );
}

const Footer = () => {
    return (
        <div>
            <h1>Isso é um rodapé</h1>
        </div>
    );
}

//posso colocar o "export" antes de cada componente

export {Header, Body, Footer}


//app js
/* 
function App() {
    return(
      <div>
        <Site.Header 
        
        />
  
        <Site.Body
  
        />
  
        <Site.Footer
  
        />
      </div> 
    )
    } */  