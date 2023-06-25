import{Typography} from '@mui/material';
import {AppBar, Box, Button, Container, Toolbar} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

const MyMenu = () => {
    return(
        <AppBar 
            position="static" /* pra barra não rolar junto com a page */
        >
            <Container>
                <Toolbar>
                
                    <AdbIcon 
                        sx={{display: 'flex', marginRight: 1 /* "mr" */,}}/>
                    
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
                        CRUD_V0
                    </Typography>    
                    <Box
                        sx={{
                            ml: 3,
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        <Button
                            sx={{color:"white",
                                my:2
                            }}
                        >
                            PROFESSORES
                        </Button>
                    
                        <Button
                            sx={{color:"white",
                            my:2
                            }}
                        >
                            ALUNOS
                        </Button>

                        <Button
                            sx={{color:"white",
                            my:2
                            }}
                        >
                            SOBRE
                        </Button>
                    </Box>
                
                </Toolbar>
                
            </Container>
        </AppBar>
    )
}

export default MyMenu;
