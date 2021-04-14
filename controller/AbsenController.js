const express = require("express");
const absen = express.Router();
const {
  tambahAbsen,
  tampilAbsen,
  hapusAbsen,
  editAbsen,
} = require("../model/AbsenModel");

// POST data absen
absen.post("/", (req, res) => {
  // tangkap data dari request
  let data = req.body;

  tambahAbsen(data)
    .then((hasil) => {
      res.json({
        pesan: "data berhasil dimasukan",
        rows: hasil,
      });
    })
    .catch((err) => {
      res.status(400).json({
        pesan: "error pada Mysql Syntax",
      });
    });
});

// GET data absen
absen.get("/", (req, res) => {
  // functin model tampilAbsen
  tampilAbsen()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json({
        pesan: "tidak bisa menampilkan data..",
      });
    });
});

absen.delete("/", (req, res) => {
  let data = req.body;

  hapusAbsen(data)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          pesan: "berhasil menghapus data",
        });
      } else {
        res.status(404).json({
          pesan: "Data yang akan dihapus tidak ditemukan..",
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        pesan: "gagal menghapus data",
      });
    });
});

absen.patch("/edit/:id", (req, res) => {
  let id = req.params.id;
  let data = req.body;
  editAbsen(id, data)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          hasil: result,
          pesan: "berhasil ubah data",
        });
      } else {
        res.status(400).json({
          hasil: result,
          pesan: "data yang akan diubah tidak ditemukan",
        });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = absen;
