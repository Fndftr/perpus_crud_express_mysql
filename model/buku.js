module.exports = {
    getData: (db, callback) => {
        db.query("SELECT * FROM buku", callback)
    },
    getId: (db, id, callback ) => {
        db.query("SELECT * FROM buku  WHERE kode_buku =" + id, callback)
    },
    addBuku: (db, data, callback) => {
        db.query("INSERT INTO buku SET ?", data, callback)
    },
    updateBuku: (db, id, data, callback ) => {
        db.query("UPDATE buku SET ? WHERE kode_buku =" + id, data, callback)
    },
    deleteBuku: (db, id, callback) => {
        db.query("DELETE FROM buku WHERE kode_buku =" + id, callback)
    }
}