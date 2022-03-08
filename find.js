const { user } = require('pg/lib/defaults');
const {user_game} = require('./models');


    user_game.findOne({
        where: {
            id:3
        }
    }).then(data => {
        console.log(data)
        process.exit()
    });
