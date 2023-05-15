import Imagem from './Imagem'
import BotaoDecrementar from './BotaoDecrementar'
import BotaoIncrementar from './BotaoIncrementar'
import { useState } from 'react'
const TelaPrincipal = () => {
    
    
    const [id, setId] = useState(100);

    const incrementar = () => {
        setId((prev)=>prev+1) // prev é o valor anterior de id (prev é um nome qualquer)
    }

    const decrementar = () => {
        setId((prev)=>prev-1) // prev é o valor anterior de id (prev é um nome qualquer)
    }
     
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Imagem id={id}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <BotaoDecrementar decrementar={decrementar}/>                   
                        </td>

                        <td>
                        <BotaoIncrementar incrementar={incrementar}/> {/* sem parentese é a referencia da função */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default TelaPrincipal