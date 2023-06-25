import { Button, TextField, Typography, Link, Container, Box } from '@mui/material'

const SignIn = () => {
    return(
        <Container maxWidth="xs">        
        
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 8
            }}
            >
                <Typography 
                    component="h1"
                    variant="h5" 
                > {/* h1 mas se comportando como h5 */}
                    Sign In
                </Typography>
                
                <TextField /* tag autocontida */
                    required /* obrigatorio */
                    margin="normal" /* margem normal */
                    fullWidth /* ocupa toda a largura */
                    autoFocus /* foco no campo ao iniciar a página */

                    label="Endereço de email" /* nome do textfield */
                    id="email" /* */
                    name="email" /* */
                    type="email"
                />

                <TextField
                    required /* obrigatorio */
                    margin="normal" /* margem normal */
                    fullWidth /* ocupa toda a largura */

                    label="Senha" /* nome do textfield */
                    id="password" /* */
                    name="password" /* */
                    type="password"  
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ /* sx é pra sobrescrever o estilo do mui */
                        mt: 3,
                        mb: 2,
                    }}
                >
                Sign In
                </Button>

                <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%" /* o flexbox aplicado abox mãe interfere nessa box filha
                        então uso o width="100%" para fazer todos os filhos da box filha ocuparem todo o
                        espaço em vez de ficarem centralizados (que é a ordem da box mãe dessa box) */
                    }}
                >
                    <Link
                        underline = "none"/* tirar a linha de baixo */
                        href="#" /* ancora para lugar nenhum */
                    >
                        Esqueceu a senha?
                    </Link>
                    <Link
                        underline = "none"
                        href="#"
                    >
                        Cadastre-se
                    </Link>
                </Box>  
            </Box>
           
        </Container>
    )
}

export default SignIn