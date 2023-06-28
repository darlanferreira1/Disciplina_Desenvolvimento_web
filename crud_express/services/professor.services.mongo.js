const ProfessorModel = require("../models/professor.models.mongo");

class ProfessorService {
    static list (request, response){
        ProfessorModel.find()
            .then(
                (professores)=> response.status(201).json(professores)
            )
            .catch(
                (err)=> response.status(500).json(err)
            )
    } 

    static register(request,response){
        ProfessorModel.create(request.body)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
    }

    static delete(request,response){
        ProfessorModel.findByIdAndDelete(request.params.id)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
    }

    static retrieve(request,response){
        ProfessorModel.findById(request.params.id)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
    }

    static update(request,response){
        ProfessorModel.findByIdAndUpdate(
                request.params.id,
                request.body,
                {"new":true})
        .then(
            (professor) =>{
                response.status(201).json(professor)
            }
        )
    }

}

module.exports = ProfessorService;