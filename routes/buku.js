const router = require('express').Router()
const bukuController = require('../controller/bukuController')


router.get('/', bukuController.index);
router.post('/add_buku', bukuController.addBuku)
router.put('/edit_buku', bukuController.update)
router.delete('/delete/:kode_buku', bukuController.delete)

module.exports = router