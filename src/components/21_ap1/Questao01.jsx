import { useEffect } from "react"
import { useState } from "react"

function Questao01X (){ //function
    
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
      ];
    
      const [medias, setMedias] = useState([]);
      const [loading, setLoading] = useState(true);
      
      //implemntação dica 1
      function calcularMedias(alunos) {
        const mediasAlunos = alunos.map((aluno) => {
          const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
          return media;
        });
    
        return mediasAlunos;
      }
    
      useEffect(() => {
        const mediasCalculadas = calcularMedias(alunos);
        setMedias(mediasCalculadas);
        setLoading(false);
      }, [alunos]);
    
      //implementação dica 2
      function renderAlunosAprovados() {
            const alunosAprovados = alunos.filter((aluno, index) => {
                return medias[index] >= 6;
            });
            return alunosAprovados.map((aluno) => {
                return aluno.nome;
            });
        }
    
      return (
        <div>
            <h3>Alunos Aprovados:</h3>
            {/* implementação dica 3 */}
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <ul
                style={{
                    listStyle: "none",
                    textAlign: "center",
                    padding: "0"
                }}
                >
                    {renderAlunosAprovados().map((aluno) => {
                        return <li>{aluno}</li>;
                    })}
                </ul>
            )}
            
        </div>
      );

}

const Questão01Y = ({alunos}) =>{ //arrow function
    const [medias, setMedias] = useState([]);

    useEffect(() => {
      const calcularMedias = () => {
        const mediasAlunos = alunos.map((aluno) => {
          const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
          return media;
        });
  
        setMedias(mediasAlunos);
      };
  
      calcularMedias();
    }, [alunos]);
  
    return medias;
}



export default Questao01X;