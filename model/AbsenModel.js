const db = require("./connection");

// membuat function tambah data absen
const tambahAbsen = async (data) => {
  return await db
    .table("siswa")
    .insert(data)
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

// membuat function bernama tampilAbsen
const tampilAbsen = async () => {
  return await db
    .from("siswa")
    .select("*")
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

// membuat function bernama hapusAbsen
const hapusAbsen = async (data) => {
  return await db("siswa")
    .where(data)
    .del()
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

// menbuat function edit absen
const editAbsen = async (id, data) => {
  return await db("siswa")
    .where({ id: id })
    .update(data)
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

// export module
module.exports = { tambahAbsen, tampilAbsen, hapusAbsen, editAbsen };
