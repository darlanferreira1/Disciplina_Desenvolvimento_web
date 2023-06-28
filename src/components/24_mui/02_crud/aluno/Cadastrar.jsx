import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Cadastrar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState(0.0)

    const navigate = useNavigate()
    // ======================= tratar erro do ira ========================

    const [erroIra, setErroIra] = useState(false);


    function handleSubmit(event) {
        event.preventDefault() // essa linha é pra página não recarregar ao vc recolher os dados
        
            if (erroIra) {
                return;
            }
        
            /* console.log(nome);
            console.log(curso);
            console.log(ira); */

            const novoAluno = {nome,curso,ira}
            axios.post("http://localhost:3001/alunos/register", novoAluno)
            .then(
                (response) => {
                    alert(`Aluno ID ${response.data._id} cadastrado com sucesso!`)
                    navigate("/listarAluno") // quando é navagação na interface, se usa as
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
                
            
    }

    return(
        
           <>
            <Typography
                variant="h5"
                fontWeight={"bold"}
            >
                Cadastrar Aluno
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
                    Cadastrar
                </Button>
                </Box>

            </Box>

        </> 
        

    )
}

export default Cadastrar