const buku = require('../model/buku')

module.exports = {
    index: (req, res) =>{
        buku.getData(req.db, (err, rows) =>{
            if(err) {
                req.flash('err', `${err.message}`)
                res.render('buku/index', { data: '' })
            }else{
                res.render('buku/index', { data: rows })
            }
        })
    },
    addBuku: (req, res) => {
        const { kode_buku, judul, pengarang, penerbit, tahun } = req.body
        var form_data = {
            kode_buku, 
            judul,
             pengarang, 
             penerbit, 
             tahun,
        }
        buku.addBuku(req.db, form_data, (err, result) =>{
            if (err) {
                req.flash('error', `${err.message}`)
                res.redirect('/buku')
            } else {
                req.flash('suskses', 'Buku Berhasil Ditambahkan')
                res.redirect('/buku')
            }
        })
    },
    update: (req, res) =>{
        const  { kode_buku, judul, pengarang, penerbit, tahun } = req.body 
        var form_data = {
            kode_buku, 
            judul,
             pengarang, 
             penerbit, 
             tahun,
        }
        buku.updateBuku(req.db, kode_buku, form_data, (err, result) => {
            if (err) {
                req.flash('error', `${err.message}`)
                res.redirect('/buku')
            } else {
                req.flash('success', 'Buku Berhasil Diedit')
                res.redirect('/buku')
            }
        })
    },
    delete: (req, res) => {
        const { kode_buku } = req.params
        buku.deleteBuku(req.db, kode_buku, (err)=>{
            if (err) {
                req.flash('error', `${err.message}`)
                res.redirect('/buku')
            } else {
                req.flash('success', 'Buku Berhasil Dihapus')
                res.redirect('/buku')
            }
        })
    }
}