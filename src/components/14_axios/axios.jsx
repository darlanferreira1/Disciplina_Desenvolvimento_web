/* como eles podem mudar o caminho de uma api, o jeito certo de acessá-la é com axios e não pelo link direto 
instalar o axios: npm i axios
*/

/* criar um componente que eu acesso a api do pokemom e retorno a imagem dele */
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const PokemomAxios = () => {
    
    const [id, setId] = useState(1) /* id do pokemom */ /* useState é um array, o primeiro é o valor e o segundo é a função que vai alterar esse valor */
    const [nome, setNome] = useState('') /* nome do pokemom */
    const [imagem, setImagem] = useState('') /* imagem do pokemom */
    const [imagem2, setImagem2] = useState('') /* imagem do pokemom */ 
    
    useEffect(() => { /* assim que o componente redenrizar eu vou pegar da api */
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) /* get recebe uma promesssa */
        /* promessa pode não ser cumprida, então tem que usar o then e o catch */
        .then(
            (response) => { /* quando da certo usa esse */
                setNome(response.data.name) /* response é o que a api retorna, data é o que eu quero, name é o que eu quero */  
                setImagem(response.data.sprites.front_default) /* front_default é a imagem do pokemom */
                setImagem2(response.data.sprites.back_default) /* back_default é a imagem do pokemom */ 
            }
        )
        .catch(
            (error) => {
                console.log(error) /* quando da erro usa esse */
            }
        )
    } 
    
    ,
    [id] /* quando o id mudar, ele vai executar o useEffect */
    )
    /*    métodos redux
    get: pegar dados
    post: enviar dados
    put: atualizar dados
    delete: deletar dados */
    
    return (
        <>
            <h1>Pokemom: {nome} </h1>
            <h1> ID: {id}</h1>
            <img src={imagem} style={{width:"400px"}}/> 
            <img src={imagem2} style={{width:"400px"}}/> 
            
            <button
                onClick={
                    () => {
                        setId((prev) => prev - 1)
                    }
                    } 
            >
                Anterior  Pokémom 
            </button> 
            

            <button
                onClick={
                    () => {
                        setId((prev) => prev + 1)
                    }
                    } 
            >
                Próximo Pokémom 
            </button> 
        </>
    )
}

export default PokemomAxios
