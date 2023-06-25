import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"

const Cadastrar = () => {

    const [nomeA, setNomeA] = useState("")
    const [cursoA, setCursoA] = useState("")
    const [ira, setIra] = useState(0.0)


    // ======================= tratar erro do ira ========================

    const [erroIra, setErroIra] = useState(false);


    function handleSubmit(event) {
        event.preventDefault() // essa linha é pra página não recarregar ao vc recolher os dados
        
            if (erroIra) {
                return;
            }
        
            console.log(nomeA);
            console.log(cursoA);
            console.log(ira);
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
                            setNomeA(event.target.value)
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
                            setCursoA(event.target.value)
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