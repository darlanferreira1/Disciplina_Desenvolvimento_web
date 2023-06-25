import { Menu, MenuItem, Typography } from '@mui/material';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';


//react-router-dom
import { Link } from "react-router-dom"


const MyMenu = () => {

    /* para cada menu criar uma variável de estado */
    const [anchorElProfessor, setAnchorElProfessor] = useState(null)


    const handleOpenAnchorElProfessor = (event) => {
        setAnchorElProfessor(event.currentTarget) /*setar o elemento que
        eu estou ancorado usando uma propriedade do evento
        a propriedade current target
        */
    }

    const handleCloseProfessorMenu = () => {
        setAnchorElProfessor(null)
    }

    /*===================================================variaveis de estado para aluno====================================================================*/
    const [anchorAluno, setAnchorAluno] = useState(null);

    const handleOpenAnchorAluno = (event) => {
        setAnchorAluno(event.currentTarget);
    }

    const handleCloseAluno = () => {
        setAnchorAluno(null)
    }

    /*======================================== sobre ================================================ */
    const [anchorAbout, setAnchorAbout] = useState(null)

    const handleOpenAnchorAbout = (event) => {
        setAnchorAbout(event.currentTarget);
    }

    const handleCloseAbout = () => {
        setAnchorAbout(null)
    }
    /* ==========================================================função de controle do menu professsor================================================================ */
    function dropProfMenu() {
        return (
            <Box>
                <Button
                    sx={{
                        color: "white",
                        my: 2,
                    }}
                    onClick={handleOpenAnchorElProfessor}
                >
                    <Typography> PROFESSORES</Typography>
                </Button>

                <Menu
                    anchorEl={anchorElProfessor} /* propriedade que vai */
                    open={Boolean(anchorElProfessor)} /* open espera um booleano (abrir ou não) 
                    */
                    onClose={handleCloseProfessorMenu}
                >
                    <MenuItem
                        onClick={handleCloseProfessorMenu}
                        component={Link} //react router dom linkar
                        to={"cadastrarProfessor"} //pra onde esse link vai
                    >
                        <Typography> Cadastrar </Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseProfessorMenu}
                        component={Link} //react router dom linkar
                        to={"listarProfessor"} //pra onde esse link vai
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }
    /* ==========================================================função de controle do menu professsor================================================================ */
    function dropAlunoMenu() {
        return (
            <Box>
                <Button
                    sx={{
                        color: "white",
                        my: 2
                    }}

                    onClick={handleOpenAnchorAluno}
                >
                    <Typography> ALUNOS </Typography>
                </Button>

                <Menu
                    anchorEl={anchorAluno} /* propriedade que vai */
                    open={Boolean(anchorAluno)} /* open espera um booleano (abrir ou não) 
                    */
                    onClose={handleCloseAluno}
                >
                    <MenuItem
                        onClick={handleCloseAluno}
                        component={Link} //react router dom linkar
                        to={"cadastrarAluno"} //pra onde esse link vai
                    >
                        <Typography> Cadastrar </Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseAluno}
                        component={Link} //react router dom linkar
                        to={"listarAluno"} //pra onde esse link vai
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    function sobreMenu() {
        return(
        <Box>
            <Button
                sx={{
                    color: "white",
                    my: 2
                }}
                onClick={handleOpenAnchorAbout}
                onClose={handleCloseAbout}
                component={Link} //react router dom linkar
                to={"sobre"}
            >
                <Typography>
                    SOBRE
                </Typography>
            </Button>
        </Box>
        )
    }

    return (
        <AppBar
            position="static" /* pra barra não rolar junto com a page */
        >
            <Container>
                <Toolbar>

                    <AdbIcon
                        sx={{ display: 'flex', marginRight: 1 /* "mr" */, }} />

                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'monospace',
                            letterspacing: ".3rem",
                            fontWeight: 800
                        }}
                    >
                        CRUD_V1
                    </Typography>
                    <Box
                        sx={{
                            ml: 3,
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        {dropProfMenu()}

                        {dropAlunoMenu()}

                        {sobreMenu()}
                    </Box>

                </Toolbar>

            </Container>
        </AppBar>
    )
}

export default MyMenu;
