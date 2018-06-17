var express = require('express')
var router = express.Router()
let modelData = require('../models/model_data')

// Ruta api/getData: recupera nºbuzón, letra acceso, código actual, código anterior y código reseteo
router.get('/orden/:transaction', (req, res) => {
   if(req.params.transaction === 'gHJS7896') {
      res.json({
         'numBuzon': '14',
         'letra': 'H',
         'codigoAct': '1234',
         'codigoAnt': '3456',
         'codigoRes': '12345678',
         'codigoTrans': 'gHJS7896'
      })
   } else {
      res.json({'error': 'El pedido no existe'})
   }
   
   
})


// Ruta 
module.exports = router