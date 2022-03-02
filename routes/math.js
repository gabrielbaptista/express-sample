var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var operacao = req.query['operacao'];
  var valorA = parseInt(req.query['valorA'], 0);
  var valorB = parseInt(req.query['valorB'], 0);
  if (operacao == 'soma')
    res.send(String(valorA + valorB));
  else
  {
    if (operacao == 'subtracao')
      res.send(String(valorA - valorB));
    else
      res.send("operação desconhecida");
  }
});

module.exports = router;
