var express = require('express');
var router = express.Router();
var AlunoService = require('../services/aluno.services'); // Importa o serviço de professores

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/listar",
    (req, res, next) => {
        res.json(AlunoService.list());
    }
);

router.post("/register"

    , (req, res, next) => {
        const aluno = AlunoService.register(req.body);
        res.json(aluno);
    }

)

router.put("/update/:id"

    , (req, res, next) => {
        const aluno = AlunoService.update(req.params.id, req.body);
        res.json(aluno);
    }

)

router.delete("/delete/:id"

    , function(req, res, next) {
        const ok = AlunoService.delete(req.params.id);
        if(ok){
            return res.json({"success": true});
        }else{
            return res.json({"success": false});
        }
    }

)

router.get("/retrieve/:id", function(req, res, next) {
    const out = AlunoService.retrieve(req.params.id);
    res.json(out);
});



module.exports = router;
