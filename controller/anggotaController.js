const anggota = require('../model/anggota')

module.exports = {
    index: (req, res) =>{
        anggota.getData(req.db, (err, rows) =>{
            if(err) {
                req.flash('err', `${err.message}`)
                res.render('anggota/index', { data: '' })
            }else{
                res.render('anggota/index', { data: rows })
            }
        })
    },
    addanggota: (req, res) => {
        const { nim, nama, Jns_kelamin, alamat, telp, email, ttl } = req.body
        var form_data = {
            nim, 
            nama,
            Jns_kelamin, 
            alamat, 
            telp,
            email,
            ttl,
        }
        anggota.addanggota(req.db, form_data, (err, result) =>{
            if (err) {
                req.flash('error', `${err.message}`)
                res.redirect('/anggota')
            } else {
                req.flash('suskses', 'anggota Berhasil Ditambahkan')
                res.redirect('/anggota')
            }
        })
    },
    update: (req, res) =>{
        const  { nim, nama, Jns_kelamin, alamat, telp, email, ttl } = req.body 
        var form_data = {
            nim, 
            nama,
            Jns_kelamin, 
            alamat, 
            telp,
            email,
            ttl,
        }
        anggota.updateanggota(req.db, nim, form_data, (err, result) => {
            if (err) {
                req.flash('error', `${err.message}`)
                res.redirect('/anggota')
            } else {
                req.flash('success', 'anggota Berhasil Diedit')
                res.redirect('/anggota')
            }
        })
    },
    delete: (req, res) => {
        const { nim } = req.params
        anggota.deleteanggota(req.db, nim, (err)=>{
            if (err) {
                req.flash('error', `${err.message}`)
                res.redirect('/anggota')
            } else {
                req.flash('success', 'anggota Berhasil Dihapus')
                res.redirect('/anggota')
            }
        })
    }
}