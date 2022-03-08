const { user_game, user_game_biodata } = require('../models');
const passport = require('../lib/passport');
const bcrypt = require('bcrypt');

function format(user) {
    const { id, username } = user
    return {
        id,
        username,
        accessToken : user.generateToken()
    }
}

module.exports = {
    register: (req,res, next) =>{
        
        user_game.register(req.body)
        .then(() => {
            res.status(201).json("Register berhasil, silakan login")
        })
        .catch (err => res.status(422).json("Periksa kembali data login anda"))

        user_game_biodata.register(req.body)
    },

    login: (req,res) => {
        user_game.authenticate(req.body)
        .then(user => {
            res.json(
                format(user)
            )
        })
    },
    
    
    whoami: (req,res) => {
        const currentUser = req.user;
        res.json(`anda berhasil login sebagai ${currentUser.username}`)
    }

}