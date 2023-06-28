var express = require('express');
var router = express.Router();
var AlunoService = require('../services/aluno.services'); // Importa o serviço de professores


// mongoose
var AlunoServiceMongo = require("../services/aluno.services.mongo")


/* GET users listing. */
// =========== express =======================
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get("/listar",
//     (req, res, next) => {
//         res.json(AlunoService.list());
//     }
// );

// router.post("/register"

//     , (req, res, next) => {
//         const aluno = AlunoService.register(req.body);
//         res.json(aluno);
//     }

// )

// router.put("/update/:id"

//     , (req, res, next) => {
//         const aluno = AlunoService.update(req.params.id, req.body);
//         res.json(aluno);
//     }

// )

// router.delete("/delete/:id"

//     , function(req, res, next) {
//         const ok = AlunoService.delete(req.params.id);
//         if(ok){
//             return res.json({"success": true});
//         }else{
//             return res.json({"success": false});
//         }
//     }

// )

// router.get("/retrieve/:id", function(req, res, next) {
//     const out = AlunoService.retrieve(req.params.id);
//     res.json(out);
// });


// =========== mongoose =======================

router.get("/listar",
    (req, res, next) => {
        AlunoServiceMongo.list(req, res);
    }
);

router.post("/register"

    , (req, res, next) => {
        AlunoServiceMongo.register(req, res);
    }

)

router.put("/update/:id"

    , (req, res, next) => {
        AlunoServiceMongo.update(req, res);
    }

)

router.delete("/delete/:id"

    , function(req, res, next) {
        AlunoServiceMongo.delete(req, res);
    }

)

router.get("/retrieve/:id", function(req, res, next) {
    AlunoServiceMongo.retrieve(req, res);
});



module.exports = router;
