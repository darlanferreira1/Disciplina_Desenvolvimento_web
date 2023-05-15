import FuncaoB from "./02_FuncaoB";
import FuncaoC from "./03_FuncaoC";

import corContexo from "./00_MeuContexto";

const FuncaoA = () =>{
    
    const cor = "red";
    
    return ( //na hora distribuir o contexto devo colocar todos em uma tag autocontida.provider
        <div>
            <corContexo.Provider value={cor}>  {/* porem essa forma é legacy, agora se usa p o (use context)*/}
                <h1 style={{backgroundColor:cor}}>FuncaoA</h1>
                <FuncaoB/>
                <FuncaoC/>
            </corContexo.Provider>
            
        </div>
    );
}

export default FuncaoA; 