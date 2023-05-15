import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

const Questao02 = () => {
    
    const [id, setId] = useState(35)
    const [nome, setNome] = useState('') /* nome do pokemom */
    const [imagem, setImagem] = useState('') /* imagem do pokemom */
    const [imagem2, setImagem2] = useState('') /* imagem do pokemom */
    
    useEffect(() => { 
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) //pegando a api do pokemon
        .then(
            (response) => { 
                setNome(response.data.name)   
                setImagem(response.data.sprites.front_default) 
                setImagem2(response.data.sprites.back_default)  
            }
        )
        .catch(
            (error) => {
                console.log(error) 
            }
        )

    } 
    
    ,
    [id] /* quando o id mudar, ele vai executar o useEffect */
    )

    const turn = () => { //função de virar
        if (imagem === imagem2) {
            setImagem(imagem)
            setImagem2(imagem)
        } else {
            setImagem(imagem2)
            setImagem2(imagem)
        }
    }

    const next = () => { //função de proximo
        setId((prev) => prev + 1)
    }

    const previous = () => { //função de anterior
        setId((prev) => prev - 1)
    }

    return (
        <>
            <h3>Pokemom: {nome} </h3>
            <img src={imagem} style={{width:"400px"}}/> 
            <button
                onClick={
                    //função seta para tirar a imgem da frente e mostrar a das costas do pokemenom
                    () => {
                        turn()
                    } 
                }
            >Virar Pokémom</button> 
            <br></br>
            <span>
            <button
                onClick={
                    () => {
                        setId((prev) => prev - 1)
                        }
                    } 
            >Pokémom Anterior</button> 
            
            <button
                onClick={
                    () => {
                        setId((prev) => prev + 1)
                    }
                    } 
            >Próximo Pokémom </button> 
            </span>
        </>

        
    );
  }
  
export default Questao02;