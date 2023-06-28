import {Typography, TableContainer, Table, TableHead, TableRow, TableBody, Paper, Box, IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import	{styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Listar = () => {

    

    /* const Alunos = [
        {id: 0, nome: "Roger Guedes", curso: "SI", ira: 9.9 },
        {id: 1, nome: "Maria Marques", curso: "CC", ira: 8.5},
        {id: 2, nome: "Eliene Sulivan", curso: "RC", ira: 7.4},
        {id: 3, nome: "Paulo Coelho", curso: "ES", ira: 10.0},
        {id: 4, nome: "José Maria", curso: "CC", ira: 2.4},
        {id: 5, nome: "Maria José", curso: "EC", ira: 4.2}
    ] */


    // ================= hora do express =================
    const [Alunos, setAlunos] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            axios.get("http://localhost:3001/alunos/listar")
            .then(
                (response) => {
                    //console.log(response)

                    setAlunos(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        }, []
    )
    

    /* function deleteAlunoById(id){
        if(window.confirm("Deseja realmente excluir?")){
            alert("Aluno " + id + " excluído com sucesso!")
        }
    } */

    function deleteAluno(id){
        if(window.confirm("Deseja realmente excluir?")){
            axios.delete(`http://localhost:3001/alunos/delete/${id}`)
            .then(
                (response) => {
                    navigate("/listarAluno")
                    const resultado = Alunos.filter(
                        (Aluno) => {                        
                            return Aluno._id !== id
                        }
                    )
                    setAlunos(resultado)

                    alert("Aluno " + id + " excluído com sucesso!")

                    
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        }
    }













    return(
        <>
            <Typography
                variant = "h5"
                fontWeight= "bold"
            >Listar Aluno
            </Typography>

            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell align="center">AÇÕES</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                   
                    <TableBody>
                        {
                            Alunos.map(
                                (Aluno) => {
                                    return(
                                        <TableRow>
                                            <StyledTableCell align="center" key = {Aluno._id}>{Aluno._id}</StyledTableCell>
                                            <StyledTableCell>{Aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{Aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{Aluno.ira}</StyledTableCell>
                                        
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton
                                                        aria-label="delete"
                                                        color="primary"

                                                        component = {Link}
                                                        to = {`/editarAluno/${Aluno._id}`}
                                                    >
                                                        <EditIcon />
                                                    </IconButton>

                                                    <IconButton
                                                        aria-label="delete"
                                                        color="error"

                                                        onClick = {() => deleteAluno(Aluno._id)}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </TableRow>
                                    )
                                }
                            )

                        }     
                   
                    </TableBody>
                </Table>
            </TableContainer>


        </>

    )
}


//================================== beautiful tables ;-; ==================================

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

//===============================================================================



export default Listar

