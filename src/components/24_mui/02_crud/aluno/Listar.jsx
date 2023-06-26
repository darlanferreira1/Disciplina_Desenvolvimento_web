import {Typography, TableContainer, Table, TableHead, TableRow, TableBody, Paper, Box, IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import	{styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {Link} from "react-router-dom";

const Listar = () => {

    

    const Alunos = [
        {id: 0, nome: "Roger Guedes", curso: "SI", ira: 9.9 },
        {id: 1, nome: "Maria Marques", curso: "CC", ira: 8.5},
        {id: 2, nome: "Eliene Sulivan", curso: "RC", ira: 7.4},
        {id: 3, nome: "Paulo Coelho", curso: "ES", ira: 10.0},
        {id: 4, nome: "José Maria", curso: "CC", ira: 2.4},
        {id: 5, nome: "Maria José", curso: "EC", ira: 4.2}
    ]

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
                                            <StyledTableCell align="center" key = {Aluno.id}>{Aluno.id}</StyledTableCell>
                                            <StyledTableCell>{Aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{Aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{Aluno.ira}</StyledTableCell>
                                        
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton
                                                        aria-label="delete"
                                                        color="primary"

                                                        component = {Link}
                                                        to = "/editarAluno"
                                                    >
                                                        <EditIcon />
                                                    </IconButton>

                                                    <IconButton
                                                        aria-label="delete"
                                                        color="error"
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

