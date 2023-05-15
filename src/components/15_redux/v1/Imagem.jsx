const Imagem = ({id}) => {
    
    
    return (
        // <img src={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} style={{width:"400px"}}/>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
        style={{width:"400px"}}
        />   
    )
}
export default Imagem