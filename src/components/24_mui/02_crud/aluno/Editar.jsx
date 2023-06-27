import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"


const Editar = () => {

    let {id} = useParams()
    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState(0.0)


    // ======================= tratar erro do ira ========================

    const [erroIra, setErroIra] = useState(false);


    
    /* const Alunos = [
        {id: 0, nome: "Roger Guedes", curso: "SI", ira: 9.9 },
        {id: 1, nome: "Maria Marques", curso: "CC", ira: 8.5},
        {id: 2, nome: "Eliene Sulivan", curso: "RC", ira: 7.4},
        {id: 3, nome: "Paulo Coelho", curso: "ES", ira: 10.0},
        {id: 4, nome: "José Maria", curso: "CC", ira: 2.4},
        {id: 5, nome: "Maria José", curso: "EC", ira: 4.2}
    ]

    function getAlunoById(id) {
        for (let i = 0; i < Alunos.length; i++) {
            if (Alunos[i].id == id) {
                return Alunos[i];
            }
        }
        return null;
    } */

    useEffect(() => {
        /* let aluno = getAlunoById(id);
        setNome(aluno.nome);
        setCurso(aluno.curso);
        setIra(aluno.ira); */

        axios.get(`http://localhost:3001/alunos/retrieve/${id}`)
        .then(
            (response) => {
                setNome(response.data.nome)
                setCurso(response.data.curso)
                setIra(response.data.ira)
            }
        )
        .catch(
            (error) => console.log(error)
        )


    }, [])

    function handleSubmit(event) {
        event.preventDefault() // essa linha é pra página não recarregar ao vc recolher os dados
        
            if (erroIra) {
                return;
            }
        
            /* console.log(nome);
            console.log(curso);
            console.log(ira); */

            const alunoAtualizado = {nome, curso, ira}
            axios.put(`http://localhost:3001/alunos/update/${id}`,alunoAtualizado)
            .then(
                (response) => {
                     alert(`Aluno ${id} atualizado com sucesso`)
                      navigate("/listarAluno")
                 }
                )
            .catch(
                (error) => console.log(error)
            )


    }


    return(
        
           <>
            <Typography
                variant="h5"
                fontWeight={"bold"}
            >
                Editar Aluno {id}
            </Typography>

            
            <Box
                component="form"
                onSubmit={handleSubmit} //sem o parentese, significa que é uma refeência à função
                /* vai tratar a submissão dos dados ao clicar no botão */
                /* os botões com tipo submit irão chamar o método onSubmit */
                
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome completo"
                    value = {nome}
                    
                    // linkando com a variável de estado
                    onChange={
                        (event) => {
                            setNome(event.target.value)
                        }
                    }
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    name="curso"
                    label="curso"
                    value = {curso}

                    onChange={
                        (event) => {
                            setCurso(event.target.value)
                        }
                    }
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="IRA"
                    name="IRA"
                    label="IRA"
                    value = {ira}

                    onChange={     
                        (event) => {
                            const valor = parseFloat(event.target.value);
                            
                            setIra(event.target.value)
                            
                            if(isNaN(valor) || valor < 0.0 || valor > 10.0){
                                setErroIra(true);
                            }else{
                                setErroIra(false);
                            }
                        }
                    }
                />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        my: 2
                    }}
                >
                    Atualizar
                </Button>
                </Box>

            </Box>

        </> 
        

    )
}

export default Editar