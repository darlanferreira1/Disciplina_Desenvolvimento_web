import { Container } from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MyMenuV1 from "./MyMenuV1"
//================================================imports do professor========================================
import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

//================================================imports aluno===============================================
import CadastrarAluno from "./aluno/Cadastrar"
import ListarAluno from "./aluno/Listar"
import EditarAluno from "./aluno/Editar"

// ================================ sobre =====================================
import Sobre from "./sobre/About"


const MainPage = () =>{
    return(
        <>
            <BrowserRouter>
                <MyMenuV1 />

                <Container>
                    
                    <Routes>
                        {/* ==========================================rotas professor ===================================== */}

                        <Route
                            path="cadastrarProfessor"
                            element={<CadastrarProfessor />} // Componente associado a esse path
                        />

                        <Route
                            path="editarProfessor/:id"
                            element={<EditarProfessor />} // Componente associado a esse path
                        />

                        <Route
                            path="listarProfessor"
                            element={<ListarProfessor />} // Componente associado a esse path
                        />
                        {/* ==========================================rotas aluno ===================================== */}
                        <Route
                            path="cadastrarAluno"
                            element={<CadastrarAluno />} // Componente associado a esse path
                        />

                        <Route
                            path="editarAluno/:id"
                            element={<EditarAluno />} // Componente associado a esse path
                        />

                        <Route
                            path="listarAluno"
                            element={<ListarAluno />} // Componente associado a esse path
                        />

                        <Route
                            path="sobre"
                            element = {<Sobre />}
                        />
    

                    </Routes>
                        
                       
                </Container>
            </BrowserRouter>   
        </>
    )
}


export default MainPage;