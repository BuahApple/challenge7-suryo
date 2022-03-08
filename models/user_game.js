'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // method untuk enkripsi
    static #encrypt = (password) => bcrypt.hashSync(password, 10)
    // method register
    static register = ({ username, password}) => {
      const encryptedPassword = this.#encrypt (password)

      return this.create({ username, password : encryptedPassword
      })
    }
    
    //method nyocokin plaintext dengan hash
    checkPassword = password => bcrypt.compareSync(password, this.password)
    // membuat JWT 
    generateToken = () => {
      // !!password jgn masukin ke payload 
      const payload = {
        id: this.id,
        username: this.username
      }

      const rahasia = 'kata sandi'

      const token = jwt.sign(payload, rahasia)
      return token

    }

    // method authenticate buat login
    static authenticate = async({ username, password}) => {
      try {
        const user = await this.findOne({ where: {username} })
        if (!user) return Promise.reject("User tidak ditemukan")

        const isPasswordValid = user.checkPassword(password)
        if (!isPasswordValid) return Promise.reject("Password Salah")
        return Promise.resolve(user)
      }
      catch(err) {
        return Promise.reject(err)
      }
    }


  };


  user_game.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game',
  });
  return user_game;
};
