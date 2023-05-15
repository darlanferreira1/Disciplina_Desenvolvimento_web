import './styles.css'
import Questao02 from './Questao02'
import Questao03 from './Questao03'
import Questao01X from './Questao01'
const Avaliacao1 = () => {
    
    return(
        <prova class="container">
            <div class="qt1">
                <h1>Questão 1</h1>
                <Questao01X/>
            </div>
                
            <div class="qt2">
                <h1>Questão 2</h1>
                <Questao02/>
            </div>

            <div class="qt3">
                <h1>Questão 3</h1>
                <Questao03/>
            </div>
        </prova>
    )
}

export default Avaliacao1