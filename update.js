const { user_game_biodata } = require('./models')

const query = {
where: { id: 3 }
}
user_game_biodata.update({
info: "info sudah diupdate"
}, query)
.then(() => {
console.log("biodata berhasil diupdate")
process.exit()
})
.catch(err => {
console.error("Gagal mengupdate biodata!")
})