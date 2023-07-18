const Sequelize = require("sequelize");
const db = require("../config/db");

const Mahasiswa = db.define(
    "mahasiswa", {
        Nim: { type: Sequelize.STRING },
        Nama_Mhs: { type: Sequelize.STRING },
        Tgl_Lahir: { type: Sequelize.STRING },
        Alamat: { type: Sequelize.STRING },
        Jenis_Kelamin: { type: Sequelize.STRING },
    }, {
        freezeTableName: true
    }
);

module.exports = Mahasiswa;