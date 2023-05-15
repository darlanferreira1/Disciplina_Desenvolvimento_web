import React, { useState, useEffect } from 'react';


const Cidades = ({id,nome}) => {

    
    function MyButton() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);

        return (
                <button onClick={() => setCount(count + 1)}>
                    <spam> Vote {nome} </spam> 
                </button>
        );
    }

    return(
        <div>
            {nome} {MyButton()}
            
            {/* <h1> Quixadá {MyButton()}</h1>
            <h1> Fortaleza {MyButton()}</h1>
            <h1> Manchester {MyButton()}</h1>
            <h1> São Paulo {MyButton()}</h1> */}
        </div>
    );
    
}

export default Cidades;