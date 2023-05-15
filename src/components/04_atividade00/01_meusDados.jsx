//v0
//usando Function normal
/* function MeusDados(){
    return(
        <div>
            <h1>Darlan Oliveira Ferreira</h1>
            <h1>Ciência Da Computação</h1>
            <h1>UFC - Quixadá</h1>
            <h6>Com função</h6>
        </div>
    );
} */

//v1
//usando Function Arrow(anonima)
/* const MeusDados = () => {
    return(
        <div>
            <h1>Darlan Oliveira Ferreira</h1>
            <h1>Ciência Da Computação</h1>
            <h1>UFC - Quixadá</h1>
            <h6>Com arrow function</h6>
        </div>
    );
} */

//v2
//usando Function Arrow(anonima) sem return
const MeusDados = () => 
    <div>
            <h1>Darlan Oliveira Ferreira</h1>
            <h1>Ciência Da Computação</h1>
            <h1>UFC - Quixadá</h1>
            <h6>Com arrow function sem return</h6>
    </div>


//v3
// /usando classe
/* import React from 'react';
class MeusDados extends React.Component{
    render(){
        return(
            <div>
                <h1>Darlan Oliveira Ferreira</h1>
                <h1>Ciência Da Computação</h1>
                <h1>UFC - Quixadá</h1>
                <h6>Com classe</h6>
            </div>
        );
    }
} */

export default MeusDados;