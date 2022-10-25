const router = require('express').Router()
const anggotaController = require('../controller/anggotaController')

//router anggota
router.get('/', anggotaController.index);
router.post('/add_anggota', anggotaController.addanggota)
router.put('/edit_anggota', anggotaController.update)
router.delete('/delete/:nim', anggotaController.delete)

module.exports = router