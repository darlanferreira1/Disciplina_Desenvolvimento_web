import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Cadastrar = () => {

    // capturando os dados do form
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai,setAi] = useState({cg:false,mc:false,al:false,es:false}) //checkbox
    let { cg, mc, al, es} = ai

    const navigate = useNavigate()

    function handleCheckbox(event){
        setAi({
            ...ai,
            [event.target.name]:event.target.checked
        })
    }


    /* testando o submit */
    function handleSubmit(event) {
        event.preventDefault() // essa linha é pra página não recarregar ao vc recolher os dados
            
        /* console.log(nome);
            console.log(curso);
            console.log(titulacao);
            console.log(ai) */
            const novoProfessor = {nome,curso,titulacao,ai}
            axios.post("http://localhost:3001/professores/register", novoProfessor)
            .then(
                (response) => {
                    alert(`Professor ID ${response.data.id} cadastrado com sucesso!`)
                    navigate("/listarProfessor") // quando é navagação na interface, se usa as 
                    // nomeclaturas do react
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )

    }

    return (
        <>
            <Typography
                variant="h5"
                fontWeight={"bold"}
            >
                Cadastrar Professor
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


                <FormControl
                    fullWidth sx={{ mt: 2, }}
                >
                    <InputLabel id="select-tit-label"> Titulação </InputLabel>

                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        
                        //linkando com a variável de estado
                        value = {titulacao}
                        onChange={
                            (event) => {
                                setTitulacao(event.target.value)
                            }
                        }
                    >
                        <MenuItem value="GRAD"> Graduação </MenuItem>
                        <MenuItem value="MEST"> Mestrado </MenuItem>
                        <MenuItem value="DOUT"> Doutorado </MenuItem>

                    </Select>
                </FormControl>

               

                <FormControl sx={{mt:2,ml:2, display: "flex", alignItems: "center"}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize:12,mb:2, display: "flex", justifyContent: "center"}}>Áreas de Interesse</FormLabel>
                    
                    <FormGroup
                    sx = {{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                    >
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onChange={handleCheckbox} />} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox}/>} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox}/>} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox}/>} label="Engenharia de Software"/>
                    </FormGroup>
                </FormControl>

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