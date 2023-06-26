import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Editar = () => {

    let {id} = useParams()

    // capturando os dados do form
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai,setAi] = useState({cg:false,mc:false,al:false,es:false}) //checkbox
    let { cg, mc, al, es} = ai

    function handleCheckbox(event){
        setAi({
            ...ai,
            [event.target.name]:event.target.checked
        })
    }

    const professores = [
        {id: 0, nome: "Michael Corleone", curso: "SI", titulacao: "MEST", ai:{cg:true,mc:false,al:false,es:false}},
        {id: 1, nome: "Darlan Ferreira", curso: "CC", titulacao: "MEST", ai:{cg:false,mc:true,al:false,es:false}},
        {id: 2, nome: "Miles Morales", curso: "RC", titulacao: "MEST", ai:{cg:false,mc:false,al:true,es:false}},
        {id: 3, nome: "Penny Parker", curso: "ES", titulacao: "DOUT", ai:{cg:false,mc:false,al:false,es:true}},
        {id: 4, nome: "Gabriel Barbosa", curso: "CC", titulacao: "DOUT", ai:{cg:false,mc:false,al:true,es:false}},
        {id: 5, nome: "Bruna Lima", curso: "EC", titulacao: "GRAD", ai:{cg:false,mc:true,al:false,es:false}}
    ]
   
    function getProfessorById(id){
        for(let i = 0; i < professores.length; i++){
            if (id == professores[i].id){
                return professores[i]
            }
        }
        return null
    }
    
    // como está vazio o use efct funciona como um construtor
    useEffect(() => {
        let professor = getProfessorById(id)
        setNome(professor.nome)
        setCurso(professor.curso)
        setTitulacao(professor.titulacao)
        setAi(professor.ai)
    }
    ,
    [])

    
    /* testando o submit */
    function handleSubmit(event) {
        event.preventDefault() // essa linha é pra página não recarregar ao vc recolher os dados
            console.log(nome);
            console.log(curso);
            console.log(titulacao);
            console.log(ai)
    }

    return (
        <>
            <Typography
                variant="h5"
                fontWeight={"bold"}
            >
                Editar Professor {id}
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


                <FormControl
                    fullWidth sx={{ mt: 2, }}
                >
                    <InputLabel id="select-tit-label"> Titulação </InputLabel>

                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value = {titulacao}
                        
                        //linkando com a variável de estado
                        
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
                    Atualizar
                </Button>
                </Box>

            </Box>

        </>

    )
}

export default Editar