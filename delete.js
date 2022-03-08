const {user_game, user_game_biodata} = require('./models');

user_game.destroy({
    where: {
        id: 2
    }
}).then(data =>{
    console.log(data, "telah dihapus")
    process.exit()
})

user_game_biodata.destroy({
    where: {
        id: 2
    }
}).then(data =>{
    console.log(data, "telah dihapus")
    process.exit()
})