import Database from './../../Database'

export default class MahasiswaModel {

    constructor() {
        this.db = new Database()
        const tabel = 'mahasiswa'
        this.tabel = tabel
        const query = `CREATE TABLE IF NOT EXISTS ${tabel} (nim, nama)`
        this.initDb = this
            .db
            .init(tabel, query)
    }

    create({nim, nama}) {
        return new Promise((resolve) => {
            this
                .db.openDb()
                .then((db) => {
                    db.transaction((tx) => {
                        tx
                            .executeSql(`INSERT INTO ${this.tabel} VALUES (?, ?)`, [nim, nama])
                            .then(([tx, results]) => {
                                resolve(results);
                            });
                    }).then((result) => {
                        this.db.closeDatabase(db);
                    }).catch((err) => {
                        console.log(err);
                    });
                })
        })
    }
}