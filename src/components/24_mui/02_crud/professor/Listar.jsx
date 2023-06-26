import {Typography, TableContainer, Table, TableHead, TableRow, TableBody, Paper, Box, IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import	{styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {Link} from "react-router-dom";
const Listar = () => {

    

    const professores = [
        {id: 0, nome: "Michael Corleone", curso: "SI", titulacao: "MEST"},
        {id: 1, nome: "Darlan Ferreira", curso: "CC", titulacao: "MEST"},
        {id: 2, nome: "Miles Morales", curso: "RC", titulacao: "MEST"},
        {id: 3, nome: "Penny Parker", curso: "ES", titulacao: "DOUT"},
        {id: 4, nome: "Gabriel Barbosa", curso: "CC", titulacao: "DOUT"},
        {id: 5, nome: "Bruna Lima", curso: "EC", titulacao: "GRAD"}
    ]

    function deleteProfessorById(id){
        if(window.confirm("Deseja realmente excluir?")){
            alert("Professor " + id + " excluído com sucesso!")
        }
    }

    return(
        <>
            <Typography
                variant = "h5"
                fontWeight= "bold"
            >Listar Professor
            </Typography>

            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell align="center">AÇÕES</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                   
                    <TableBody>
                        {
                            professores.map(
                                (professor) => {
                                    return(
                                        <TableRow>
                                            <StyledTableCell align="center" key = {professor.id}>{professor.id}</StyledTableCell>
                                            <StyledTableCell>{professor.nome}</StyledTableCell>
                                            <StyledTableCell>{professor.curso}</StyledTableCell>
                                            <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                        
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton
                                                        aria-label="delete"
                                                        color="primary"

                                                        /* linkando: */
                                                        component = {Link}
                                                        to = {`/editarProfessor/${professor.id}`}

                                                    >
                                                        <EditIcon 
                                                        

                                                        />
                                                    </IconButton>

                                                    <IconButton
                                                        aria-label="delete"
                                                        color="error"

                                                        onClick = {() => deleteProfessorById(professor.id)}
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

