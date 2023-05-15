//vo
// props clássico

/* const MeusDados = (props) => {
    return (
        <div>
            <h1>{props.nome}</h1>
            <h1>{props.curso} </h1>
            <h1>{props.universidade}</h1>  
        </div>
    );
} */
//v1 
//props com desestruturação

/* const MeusDados = (props) => {
    const {nome, curso, universidade} = props;

    return (
        <div>
            <h1>{nome}</h1>
            <h1>{curso} </h1>
            <h1>{universidade}</h1> 
            <h6> props desconstruído </h6> 
        </div>
    );
} */

//v2
// props com desestruturação e parâmetro
const MeusDados = ({nome, curso, universidade} ) => {
    return (
        <div>
            <h1>{nome}</h1>
            <h1>{curso} </h1>
            <h1>{universidade}</h1> 
            <h6> props desestruturação de parâmetros</h6> 
        </div>
    );
}


//função no app js

/* function App() {
    return(
      <MeusDados 
      nome="Darlan Oliveira Ferreira"
      curso="Ciência da computação"
      universidade="UFCQXD"
      />
    );
  } */

export default MeusDados;