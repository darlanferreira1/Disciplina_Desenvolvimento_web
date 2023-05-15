import FuncaoD from "./04_FuncaoD";
import{useContext} from "react";
import corContexo from "./00_MeuContexto";

const FuncaoC = () =>{

    const cor = useContext(corContexo); //useContext é uma forma mais moderna de usar o contexto
    return (
        <div>
            <h1 style={{backgroundColor:cor}}>FuncaoC</h1>
            <FuncaoD/>
        </div>
    );
}

export default FuncaoC; 