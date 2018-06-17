let express = require('express')
let router = express.Router()
let modelData = require('../models/model_data')

// Ruta api/getData: recupera nºbuzón, letra acceso, código actual, código anterior y código reseteo
router.get('/api/datosAcceso', (req, res) => {
   if(err) return console.log(err.message)
   res.json({
      'numBuzon': '14',
      'letra': 'H',
      'codigoAct': '1234',
      'codigoAnt': '3456',
      'codigoRes': '12345678'
   })
})

module.exports = router