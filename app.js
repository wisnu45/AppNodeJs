const express = require("express");
const app = express();

const db = require("./config/db");
app.get('/', (req, res) => res.send("respon nodejs berhasil"));

app.use(express.urlencoded({ extended: true }));

db.authenticate().then(() =>
    console.log("berhasil terkoneksi database")
);

const Mahasiswa = require("./models/Mahasiswa");

app.post("/crud", async(req, res) => {
    try {
        const { Nim, Nama_Mhs, Tgl_Lahir, Alamat, Jenis_Kelamin } = req.body;

        const newMahasiswa = new Mahasiswa({
            Nim,
            Nama_Mhs,
            Tgl_Lahir,
            Alamat,
            Jenis_Kelamin
        })

        await newMahasiswa.save();
        res.json(newMahasiswa);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error")
    }
});

app.listen(5000, () => console.log("port berjalan di server 5000"));