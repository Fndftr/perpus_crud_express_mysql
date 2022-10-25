module.exports = {
    getData: (db, callback) => {
        db.query("SELECT * FROM mahasiswa ", callback)
    },
    getId: (db, id, callback ) => {
        db.query("SELECT * FROM mahasiswa WHERE nim =" + id, callback)
    },
    addanggota: (db, data, callback) => {
        db.query("INSERT INTO mahasiswa SET ?", data, callback)
    },
    updateanggota: (db, id, data, callback ) => {
        db.query("UPDATE mahasiswa SET ? WHERE nim =" + id, data, callback)
    },
    deleteanggota: (db, id, callback) => {
        db.query("DELETE FROM mahasiswa WHERE nim =" + id, callback)
    }
}