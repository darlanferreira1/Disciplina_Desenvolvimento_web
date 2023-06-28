const AlunoModel = require('../models/aluno.models');


let Alunos = [
    {id: 0, nome: "Roger Guedes", curso: "SI", ira: 9.9 },
    {id: 1, nome: "Maria Marques", curso: "CC", ira: 8.5},
    {id: 2, nome: "Eliene Sulivan", curso: "RC", ira: 7.4},
    {id: 3, nome: "Paulo Coelho", curso: "ES", ira: 10.0},
    {id: 4, nome: "José Maria", curso: "CC", ira: 2.4},
    {id: 5, nome: "Maria José", curso: "EC", ira: 4.2}
]

let id = 6;

class AlunoService {
    static list () {
        return Alunos;
    }

    static register (data) {
        let aluno = new AlunoModel(id++, data.nome, data.curso, data.ira);
        Alunos.push(aluno);
        return aluno;
    }

    static update (id, data) {
        for(let aluno of Alunos){
            if(aluno.id == id){
                aluno.nome = data.nome;
                aluno.curso = data.curso;
                aluno.ira = data.ira;
                return aluno;
            }
        }
        return null;
    }

    static delete (id) {
        for(let i = 0; i < Alunos.length; i++){
            if(Alunos[i].id == id){
                Alunos.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve (id) {
        for(let aluno of Alunos){
            if(aluno.id == id){
                return aluno;
            }
        }
        return {};
    }
    

}


module.exports = AlunoService;