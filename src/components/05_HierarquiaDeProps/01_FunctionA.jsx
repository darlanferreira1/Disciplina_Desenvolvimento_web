import FunctionB from './02_FunctionB';


const FunctionA = () =>{
     return (
        <div>
            <h1> Componente A </h1>
            <FunctionB x={10} y={5}/>
        </div>
    )
}

export default FunctionA;

//app js

/* function App() {
  return(
    <div>
      <FunctionA />
    </div> 
  )
} */