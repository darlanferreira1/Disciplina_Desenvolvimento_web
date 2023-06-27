const professorService = require('../services/professor.services'); // Importa o serviço de professores


var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/listar",
    (req, res, next) => {
        res.json(professorService.list());
    }
);

router.post("/register"

    , (req, res, next) => {
        const professor = professorService.register(req.body);
        res.json(professor);
    }

)

router.put("/update/:id"

    , (req, res, next) => {
        const professor = professorService.update(req.params.id, req.body);
        res.json(professor);
    }

)

router.delete("/delete/:id"

    , function(req, res, next) {
        const ok = professorService.delete(req.params.id);
        if(ok){
            return res.json({"success": true});
        }else{
            return res.json({"success": false});
        }
    }

)

router.get("/retrieve/:id"

    , function(req, res, next) {
        const professor = professorService.retrieve(req.params.id);
        res.json(professor);
    }

)





module.exports = router;
