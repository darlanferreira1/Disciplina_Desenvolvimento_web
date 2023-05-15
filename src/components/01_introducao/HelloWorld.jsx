//v1 com função

/* function HelloWorld() {
  return(
    <div>
        <h1>Hello World</h1>
    </div>
  );
}  */

//v2 com arrow function(função anônima)

/* const HelloWorld = () => { 
    return(
        <div>
            <h1>Hello World (Anônimo) </h1>
        </div>
    );
} */

//v3 com classe (mais verboso)

import React, { Component } from 'react';
class HelloWorld extends React.Component {
    render() { //método obrigatório
        return(
            <div>
                <h1>Hello World (Classe) </h1>
            </div>
        );
    }
}

export default HelloWorld;