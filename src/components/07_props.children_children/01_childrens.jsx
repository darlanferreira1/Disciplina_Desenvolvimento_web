const Supermercardo = ({children,nome}) => {
    return (
        <div>
            <h1> Supermercado {nome} </h1>   
            {children}       
        </div>
    );
}

const Legume = ({nome}) => {
    return (
        <div>
            <h3> Legume: {nome} </h3>
        </div>
    );
} 

const Fruta = ({nome}) => {
    return (
        <div>
            <h3> Fruta {nome} </h3>
        </div>
    );
} 


const Bebida = ({nome}) => {
    return (
        <div>
            <h3> Bebida {nome} </h3>
        </div>
    );
} 

export {Supermercardo, Legume, Fruta, Bebida};

//appJS
/* 
<Supermercardo nome="Supermercado DuPovu">
            <Legume nome="Batata" />
            <Fruta nome="Maçã" />
            <Bebida nome="Coca-cola" />
</Supermercardo> */