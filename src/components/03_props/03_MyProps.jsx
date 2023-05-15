
//v0

/* const MyProps = (props) => { //props é um objeto que segue a estrutura de chave e valor
//mesma estrututra de um objeto json

    const renderizarMeuNome = () => {
        return(
            <span> Darlan </span>
        );
    }
    
    return (
        <div>
            <h1>
                Meu nome é: {renderizarMeuNome()}
            </h1>
            <h1>
                Meu nome, com props, é: {props.nome}
            </h1>
        </div>
    );
} */

//v1

/* const MyProps = (props) => { 
    
    //desconstrução
    const {nome, idade, curso} = props;

    return (
        <div>
            <h1>Meu nome é: {nome}</h1>
            <h1>Minha idade é: {idade}</h1>
            <h1>Meu curso é: {curso}</h1>
        </div>
    );     
} */

//v2
const MyProps = ({nome,idade,curso}) => {    //n pode deixar espaço entra as virgulas 
    return (
        <div>
            <h1>Meu nome é: {nome}</h1>
            <h1>Minha idade é: {idade}</h1>
            <h1>Meu curso é: {curso}</h1>
        </div>
    );     
}

//função no app js

/* function App() {
    return (
      <MyProps 
        nome="Darlan Ferreira" 
        idade={22}
        curso={'Ciência da computação'}
      />
    );
} */

export default MyProps;
